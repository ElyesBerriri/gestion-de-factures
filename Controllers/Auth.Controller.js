const createError = require('http-errors')
const pool = require('../db')
const bcrypt = require("bcryptjs");
const saltRounds = 10;
//var nom=true;
//const { authSchema } = require('../helpers/validation_schema')
const {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} = require('../helpers/jwt_helper')

//const client = require('../helpers/init_redis')

module.exports = {
  register: async (req, res, next) => {
    try {
       const { username, password } = req.body
       if (username==undefined || password==undefined) 
       {res.json(createError.BadRequest(`you must put both username&password`))}
      //const result = await authSchema.validateAsync(req.body)

      else
      {
      pool.query(
        "SELECT * FROM uusers WHERE (username=$1) ", [username,],(error, result) => {
            if (error) {
                throw error;
            } else {
                if (result.rows.length > 0) {
                   // non=false;
                    res.json (createError.Conflict(`${username} is already been registered`))
                    
                } else {
                 //   non=true;
                    bcrypt.hash(password, saltRounds, (err, hash) => {
                        if (err) {
                            throw err;
                        }
                        pool.query(
                            "INSERT INTO uusers (username,password) VALUES($1,$2)", [username, hash],async(err, result) => {
                                if (err) {
                                    throw err;
                                } else {
                    
                                  const new_id=await pool.query("SELECT * FROM uusers WHERE (username=$1)",[username]);
                                  
                                  const accessToken = await signAccessToken(String(new_id.rows[0].id_uusers))
                                  const refreshToken = await signRefreshToken(String(new_id.rows[0].id_uusers))
                                  res.json({ accessToken,refreshToken })
                                    //res.json("SUCCESS"); //renvoi sucess au client
                                }
                            }
                        );
                    });
                }
            }
        }
    );
    //if (non==true){
    //const new_id=await pool.query("SELECT * FROM uusers WHERE (username=$1)",[username]);
    
      //if (doesExist)
        //throw createError.Conflict(`${email} is already been registered`)

      //const user = new User(result)
      //const savedUser = await user.save()
      
      //console.log(new_id.rows)
      //const accessToken = await signAccessToken(new_id.rows)
      //const refreshToken = await signRefreshToken(new_id.rows)
      //res.json({ accessToken })   }}//, refreshToken
    }} catch (error) {
      //if (error.isJoi === true) error.status = 422
      //next(error)
      console.error(error.message);
    }
  },




  login: async (req, res, next) => {
    console.log("1")
    try {
        const { username, password } = req.body
        if (username==undefined || password==undefined)
        { res.json(next(createError.BadRequest(`you must put both username&password`)))}
        //const result = await authSchema.validateAsync(req.body)
        //const user = await User.findOne({ email: result.email })
        else{
        pool.query(
            "SELECT * FROM uusers WHERE (username=$1) ", [username],(error, result) => {
                if (error) {
                    throw error;
                } else {
                    if (!(result.rows.length > 0)) {
                    res.json(createError.NotFound(`${username} is not registered`))
                } else {
                    //console.log(result.rows[0]);
                    //console.log(result.rows[0].id_uusers);
                    //console.log(result.rows[0].username);
                    //console.log(result.rows[0].password);
                    bcrypt.compare(password, result.rows[0].password, async (error, match) => {
                        console.log(match);
                        if (!match) {
                            res.json(createError.Unauthorized('Username/password not valid'))}
                        else{
                            const accessToken = await signAccessToken(String(result.rows[0].id_uusers) )
                            const refreshToken = await signRefreshToken(String(result.rows[0].id_uusers ))
                            console.log(req.cookies.result.rows[0].id_uusers)
                            res.json({ accessToken , refreshToken })
                            //res.send({accessToken})
                        }
                    })
                }
            }
        }
        )
    
        }
      //if (!user) throw createError.NotFound('User not registered')

      //const isMatch = await user.isValidPassword(result.password)
      //if (!isMatch)
        //throw createError.Unauthorized('Username/password not valid')

      //const accessToken = await signAccessToken(user.id)
      //const refreshToken = await signRefreshToken(user.id)

      //res.send({ accessToken, refreshToken })
    } catch (error) {
      //if (error.isJoi === true)
        //return next(createError.BadRequest('Invalid Username/Password'))
      //next(error)
      console.error(error.message);
    }
  },


  refreshToken: async (req, res, next) => {
    try {
      const { refreshToken } = req.body
      if (refreshToken==undefined) throw createError.BadRequest()
      const userId = await verifyRefreshToken(refreshToken)

      const accessToken = await signAccessToken(userId)
      const refToken = await signRefreshToken(userId)
      res.send({ accessToken: accessToken, refreshToken: refToken })
    } catch (error) {
      next(error)
    }
  },

  logout: async (req, res, next) => {
    try {
      const { refreshToken } = req.body
      if (refreshToken==undefined) throw createError.BadRequest()
      const userId = await verifyRefreshToken(refreshToken)
      
      res.clearCookie(userId,(err,val)=>{
        if (err) {
          console.log(err.message)
          throw createError.InternalServerError()
        }
        console.log(val)
        res.sendStatus(204)
      });
      

      /*client.DEL(userId, (err, val) => {
        if (err) {
          console.log(err.message)
          throw createError.InternalServerError()
        }
        console.log(val)
        res.sendStatus(204)
      })*/
    } catch (error) {
      next(error)
    }
  },
}