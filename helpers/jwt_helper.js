const JWT = require('jsonwebtoken')
const createError = require('http-errors')
//const client = require('./init_redis')

module.exports = {
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {}
      const secret = process.env.ACCESS_TOKEN_SECRET
      const options = {
        expiresIn: '1h',
        //issuer: 'pickurpage.com',
        audience: userId,
      }
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.log(err.message)
          reject(createError.InternalServerError())
          return
        }
        resolve(token)
      })
    })
  },
  verifyAccessToken: (req, res, next) => {
    if (req.headers['authorization']==undefined) return next(createError.Unauthorized())
    const authHeader = req.headers['authorization']
    const bearerToken = authHeader.split(' ')
    const token = bearerToken[1]
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        const message =
          err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
        return next(createError.Unauthorized(message))
      }
      req.payload = payload
      //console.log(req.payload)
      //console.log(payload)
      next()
    })
  },
  signRefreshToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {}
      const secret = process.env.REFRESH_TOKEN_SECRET
      const options = {
        expiresIn: '1y',
        audience: userId,
      }
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.log(err.message)
          reject(createError.InternalServerError())
          //console.log("hi if") 
          return
        }
        else{resolve(token)};
        /*else{
          console.log("hi else"); 
 
          res.cookie(String(userId),String(token),{
            httpOnly: true,
            maxAge:365*24*60*60*1000
          });

          console.log("hi else2"); 

          if(req.cookies.userId==undefined){
              console.log(err.message)
              reject(createError.InternalServerError())
              return
            }
        resolve(token)}*/
      })
    })


    /*return new Promise((resolve, reject) => {
      const payload = {}
      const secret = process.env.REFRESH_TOKEN_SECRET
      const options = {
        expiresIn: '1y',
        //issuer: 'pickurpage.com',
        //audience: userId,
      }
      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.log(err.message)
          // reject(err)
          reject(createError.InternalServerError())
        }

        client.SET(userId, token, 'EX', 365 * 24 * 60 * 60, (err, reply) => {
          if (err) {
            console.log(err.message)
            reject(createError.InternalServerError())
            return
          }
          resolve(token)
        })
      })
    })*/
  },
  verifyRefreshToken: (refreshToken,result) => {
    return new Promise((resolve, reject) => {
      JWT.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, payload) => {
          if (err) {return reject(createError.Unauthorized())}
          else{
          const userId = payload.aud;
          //console.log(`${userId} DANS payload.aud`)
          //resolve(userId);

          //const result=req.cookies.userId;
          //console.log(`${result} contenue de cookie avant`)

          if(result==undefined){
              console.log(err.message)
              reject(createError.InternalServerError())
              return
          }
          else{
          if (refreshToken == result[userId]) return resolve(userId)
          else{
            //console.log("nooooooooooooon")
            //console.log(typeof(userId))
            //console.log(result[userId])
            reject(createError.Unauthorized())
            //console.log("try")
            
          }
        }

          /*client.GET(userId, (err, result) => {
            if (err) {
              console.log(err.message)
              reject(createError.InternalServerError())
              return
            }
            if (refreshToken === result) return resolve(userId)
            reject(createError.Unauthorized())
          })*/
        }
      }
      )
    })
  },
}