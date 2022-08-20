const express = require("express");
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");//transforme les données en format .json

const morgan = require('morgan')
const createError = require('http-errors')
require('dotenv').config()

//require('./helpers/init_mongodb')
//const { verifyAccessToken } = require('./helpers/jwt_helper')
//require('./helpers/init_redis')
const AuthRoute = require('./Routes/Auth.route')


const app = express();


// process.env.NODE_ENV => production or undefined
// middleware

app.use(cors());
app.use(express.json()); 
app.use(bodyParser.json());



app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))

app.get('/', verifyAccessToken, async (req, res, next) => {
  res.send('Hello from express.')
})

app.use('/auth', AuthRoute)

app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})


 
if (process.env.NODE_ENV === "production") {
  // service static content
  // npm run build
  app.use(express.static(path.join(__dirname, "frontend/build")));
}

// ROUTES

///////////////////////// get all type_dossiers//////////////////////////
app.get("/type_dossiers/list", async (req, res) => {
  try {
    const alltype_dossiers = await pool.query("SELECT * from type_dossiers");
    res.status(200).json(alltype_dossiers.rows);
  } catch (err) {
    console.error(err.message);
  }
});


// get a type_dossier
app.get("/type_dossiers/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.query("SELECT * FROM type_dossiers WHERE type_id = $1", [
      id,
    ]);
    res.status(200).json(client.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// create a type_dossier
app.post("/type_dossiers/list", async (req, res) => {
  try {
    const { libelle } = req.body;
    const newType_dossier = await pool.query(
      "INSERT INTO type_dossiers (libelle) VALUES($1) RETURNING *",
      [libelle]
    );

    res.status(200).json(newType_dossier.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


// update a type_dossier
app.put("/type_dossiers/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { libelle } = req.body;
    await pool.query(
      "UPDATE type_dossiers SET libelle = $1 WHERE type_id = $2",
      [libelle, id]
    );

    res.status(200).json("type_dossier was updated");
  } catch (err) {
    console.error(err.message);
  }
});
// delete a type_dossier
app.delete("/type_dossiers/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM type_dossiers WHERE type_id = $1", [
      id,
    ]);
    res.status(200).json("type_dossier was deleted");
  } catch (err) {
    console.error(err.message);
  }
});


/////////////////////////get all utilisateurs////////////////////////////
app.get("/utilisateurs/list", async (req, res) => {
  try {
    const allutilisateurs = await pool.query("SELECT * from utilisateurs");
    res.status(200).json(allutilisateurs.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//liste des collaborateurs
//get all colab

/*app.get("/collaborateurs/list", async (req, res) => {
  try {
    const allColab = await pool.query("SELECT * from collaborateurs");
    res.status(200).json(allColab.rows);
  } catch (err) {
    console.error(err.message);
  }
});
*/
app.get("/collaborateurs/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allColab = await pool.query("SELECT * from collaborateurs where collab_id = $1",[id]);
    res.status(200).json(allColab.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get a utilisateur
app.get("/utilisateurs/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const utilisateur = await pool.query("SELECT * FROM utilisateurs WHERE utilisateur_id = $1", [
      id,
    ]);
    res.status(200).json(utilisateur.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// create a utilisateur
app.post("/utilisateurs/list", async (req, res) => {
  try {
    const { login, pwd, domaine } = req.body;
    const newutilisateur = await pool.query(
      "INSERT INTO utilisateurs (login,pwd,domaine) VALUES($1,$2,$3) RETURNING *",
      [login, pwd, domaine]
    );

    res.status(200).json(newutilisateur.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a utilisateur
app.put("/utilisateurs/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { login, pwd, domaine } = req.body;
    await pool.query(
      "UPDATE utilisateurs SET login = $1, pwd = $2, domaine = $3 WHERE utilisateur_id = $4",
      [login, pwd, domaine, id]
    );

    res.status(200).json("utilisateur was updated");
  } catch (err) {
    console.error(err.message);
  }
});
// ajouter collaborateur
app.post("/collaborateurs/list", async (req, res) => {
  try {
    const { nom,cin,ville,rue,num,codepostale,activite,tel,fax,email,matricule,methodepaiment,montant,nombre_dossier} = req.body;
    //const user = req.body;
    const newdossier = await pool.query(
       "INSERT INTO collaborateurs (nom,cin,ville,rue,num,codepostale,activite,tel,fax,email,matricule,methodepaiment,montant,nombre_dossier) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING *",
      [nom,cin,ville,rue,num,codepostale,activite,tel,fax,email,matricule,methodepaiment,montant,nombre_dossier] 
      );
    
    res.status(200).json(newdossier.rows);
  } catch (err) {
    console.error(err.message);
  }
});


// modifier collaborateur
app.put("/collaborateurs/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nom,cin,ville,rue,num,codepostale,activite,tel,fax,email,matricule,methodepaiment,montant,nombre_dossier} = req.body;
    await pool.query(
      "UPDATE collaborateurs SET nom=$1,cin=$2,ville=$3,rue=$4,num=$5,codepostale=$6,activite=$7,tel=$8,fax=$9,email=$10,matricule=$11,methodepaiment=$12,montant=$13,nombre_dossier=$14 WHERE collab_id = $15",
      [nom,cin,ville,rue,num,codepostale,activite,tel,fax,email,matricule,methodepaiment,montant,nombre_dossier, id]
    );

    res.status(200).json("folder was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a utilisateur
app.delete("/utilisateurs/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM utilisateurs WHERE utilisateur_id = $1", [
      id,
    ]);
    res.status(200).json("utilisateur was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

// delete collaborateur
app.delete("/collaborateurs/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM collaborateurs WHERE collab_id = $1", [
      id,
    ]);
    res.status(200).json("colab was deleted");
  } catch (err) {
    console.error(err.message);
  }
});


/////////////////////////get all primes////////////////////////////
app.get("/primes/list", async (req, res) => {
  try {
    const allprimes = await pool.query("SELECT * from primes");
    res.status(200).json(allprimes.rows);
  } catch (err) {
    console.error(err.message);
  }
});
//liste des tribunaux
//get all trib

app.get("/tribunaux/list", async (req, res) => {
  try {
    const alltrib = await pool.query("SELECT * from tribunaux");
    res.status(200).json(alltrib.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a prime
app.get("/primes/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const prime = await pool.query("SELECT * FROM primes WHERE id = $1", [
      id,
    ]);
    res.status(200).json(prime.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// create a prime
app.post("/primes/list", async (req, res) => {
  try {
    const { libelle,montant,dissociable,impot,mensuel } = req.body;
    const newprime = await pool.query(
      "INSERT INTO primes (libelle,montant,dissociable,impot,mensuel) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [libelle,montant,dissociable,impot,mensuel]
    );

    res.status(200).json(newprime.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a prime
app.put("/primes/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { libelle,montant,dissociable,impot,mensuel } = req.body;
    await pool.query(
      "UPDATE primes SET libelle = $1, montant = $2, dissociable = $3, impot = $4, mensuel = $5 WHERE id = $6",
      [libelle,montant,dissociable,impot,mensuel, id]
    );

    res.status(200).json("prime was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// ajouter trib
app.post("/tribunaux/list", async (req, res) => {
  try {
    const {lieux} = req.body;
    const newtrib = await pool.query(
       "INSERT INTO tribunaux (lieux) VALUES($1) RETURNING *",
      [lieux]   
      );
    res.status(200).json(newtrib.rows);
  } catch (err) {
    console.error(err.message);
  }
});


// modifier trib
app.put("/tribunaux/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { lieux } = req.body;
    await pool.query(
      "UPDATE tribunaux SET lieux = $1 WHERE trib_id = $2",
      [lieux, id]
    );

    res.status(200).json("trib was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a prime
app.delete("/primes/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM primes WHERE id = $1", [
      id,
    ]);
    res.status(200).json("prime was deleted");
  } catch (err) {
    console.error(err.message);
  }
});


/////////////////////////get all clients////////////////////////////
app.get("/clients/list", async (req, res) => {
  try {
    const { q } = req.query;
    const keys = ["collaborateur","code_client","raison","situation_fiscale","type_client","matricule","ville","rue","num","code_postale","adresse","activite","tel","fax","email"];
    const allclients = await pool.query("SELECT * from clients");
    const rows = allclients.rows;
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toString().toLowerCase().includes(q))
      );
    };
    q ? res.json(search(rows)) : res.json(rows);
  } catch (err) {
    console.error(err.message);
  }
});

 

//For Mayssa
app.get("/clients/list/creation", async (req, res) => {
  try {
    const { q } = req.query;
    const keys = ["collaborateur","code_client"];
    const allclients = await pool.query("SELECT * from clients");
    const rows = allclients.rows;
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toString().toLowerCase().includes(q))
      );
    };
    q ? res.json(search(rows)) : res.json(rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a client
app.get("/clients/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.query("SELECT * FROM clients WHERE client_id = $1", [
      id,
    ]);
    res.status(200).json(client.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/clients/list2/", async (req, res) => {
  try {
    const { q } = req.query;
    const numberclients = await pool.query(`SELECT code_client FROM clients WHERE code_client LIKE '%${q}' ORDER BY code_client DESC LIMIT 1`);
    (numberclients.rows.length>0) ? res.status(200).json(numberclients.rows[0].code_client.substr(0,numberclients.rows[0].code_client.search("/"))) : res.status(200).json("-1");
  } catch (err) {
    console.error(err.message);
  }
});

// create a client
app.post("/clients/list", async (req, res) => {
  try {
    const { collaborateur,code_client,raison,situation_fiscale,type_client,matricule,ville,rue,num,code_postale,adresse,activite,tel,fax,email } = req.body;
    const newclient = await pool.query(
      "INSERT INTO clients (collaborateur,code_client,raison,situation_fiscale,type_client,matricule,ville,rue,num,code_postale,adresse,activite,tel,fax,email) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING *",
      [collaborateur,code_client,raison,situation_fiscale,type_client,matricule,ville,rue,num,code_postale,adresse,activite,tel,fax,email]
    );

    res.status(200).json(newclient.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a client
app.put("/clients/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { collaborateur,code_client,raison,situation_fiscale,type_client,matricule,ville,rue,num,code_postale,adresse,activite,tel,fax,email } = req.body;
    await pool.query(
      "UPDATE clients SET collaborateur = $1, code_client = $2, raison = $3, situation_fiscale = $4, type_client = $5, matricule = $6, ville = $7, rue = $8, num = $9, code_postale = $10, adresse = $11, activite = $12, tel = $13, fax = $14, email = $15 WHERE client_id = $16",
      [collaborateur,code_client,raison,situation_fiscale,type_client,matricule,ville,rue,num,code_postale,adresse,activite,tel,fax,email, id]
    );

    res.status(200).json("client was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a client
app.delete("/clients/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM clients WHERE client_id = $1", [
      id,
    ]);
    res.status(200).json("client was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

// delete trib
app.delete("/tribunaux/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM tribunaux WHERE trib_id = $1", 
    [id]
    );
    res.status(200).json("trib was deleted");
  } catch (err) {
    console.error(err.message);
  }
});





                                             //dossiers Mayssa//
  // modifier dossier
app.put("/dossiers/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { libelle } = req.body;
    await pool.query(
      "UPDATE emplacementdossiers SET libelle = $1 WHERE dossier_id = $2",
      [libelle, id]
    );

    res.status(200).json("folder was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete dossier
app.delete("/dossiers/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM emplacementdossiers WHERE dossier_id = $1", [
      id,
    ]);
    res.status(200).json("folder was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

//get dossiers
app.get("/dossiers/list", async (req, res) => {
  try {
    const dossiers = await pool.query("SELECT * from emplacementdossiers");
    res.status(200).json(dossiers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// ajouter dossier
app.post("/dossiers/list", async (req, res) => {
  try {
    const { libelle } = req.body;
    const newdossier = await pool.query(
      "INSERT INTO emplacementdossiers (libelle) VALUES($1) RETURNING *",
      [libelle]
    );

    res.status(200).json(newdossier.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//else





//honoraire en extra 


// get all honoraries
app.get("/honoraires/list", async (req, res) => {
  try {
    const allhonoraries = await pool.query("SELECT * from honoraire_en_extra");
    res.status(200).json(allhonoraries.rows);
  } catch (err) {
    console.error(err.message);
  }
});

/*get a honorary
app.get("/honoraires/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const honoraire = await pool.query("SELECT * FROM honoraire_en_extra WHERE gr_id = $1", [id]);
    res.status(200).json(honoraire.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});*/

// create a honorary
app.post("/honoraires/list", async (req, res) => {
  try {
    const { lib_arab,lib_fr,montant } = req.body;
    const newhonorary = await pool.query(
      "INSERT INTO honoraire_en_extra (lib_arab,lib_fr,montant) VALUES($1,$2,$3) RETURNING *",
      [lib_arab,lib_fr,montant]
    );

    res.status(200).json(newhonorary.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});



// update a honorary
app.put("/honoraires/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { lib_arab,lib_fr,montant } = req.body;
    await pool.query(
      "UPDATE honoraire_en_extra SET lib_arab = $1, lib_fr = $2, montant = $3 WHERE gr_id = $4",
      [lib_arab,lib_fr,montant,id]
    );

    res.status(200).json("honorary was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a honorary
app.delete("/honoraires/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM honoraire_en_extra WHERE gr_id = $1", [id]);
    res.status(200).json("honorary was deleted");
  } catch (err) {
    console.error(err.message);
  }
});





//timbre 


// get all stamps
app.get("/timbres/list", async (req, res) => {
  try {
    const allstamps = await pool.query("SELECT * from timbre");
    res.status(200).json(allstamps.rows);
  } catch (err) {
    console.error(err.message);
  }
});

/* get a stamp
app.get("/timbres/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const timbre = await pool.query("SELECT * FROM timbre WHERE tim_id = $1", [id]);
    res.status(200).json(timbre.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});*/

// create a stamp
app.post("/timbres/list", async (req, res) => {
  try {
    const { libelle,montant } = req.body;
    const newstamp = await pool.query(
      "INSERT INTO timbre (libelle,montant) VALUES($1,$2) RETURNING *",
      [libelle,montant]
    );

    res.status(200).json(newstamp.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a stamp
app.put("/timbres/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { libelle,montant } = req.body;
    await pool.query(
      "UPDATE timbre SET libelle = $1, montant = $2 WHERE tim_id = $3",[libelle,montant,id]
    );

    res.status(200).json("stamp was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a stamp
app.delete("/timbres/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM timbre WHERE tim_id = $1", [id]);
    res.status(200).json("stamp was deleted");
  } catch (err) {
    console.error(err.message);
  }
});




//recette de finance


// get all 
app.get("/recettefinance/list", async (req, res) => {
  try {
    const all = await pool.query("SELECT * from recette_finance");
    res.status(200).json(all.rows);
  } catch (err) {
    console.error(err.message);
  }
});

/* get one
app.get("/recettefinance/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT * FROM recette_finance WHERE rf_id = $1", [id]);
    res.status(200).json(one.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});*/

// create one
app.post("/recettefinance/list", async (req, res) => {
  try {
    const { libelle,montant } = req.body;
    const newone = await pool.query(
    "INSERT INTO recette_finance (libelle,montant) VALUES($1,$2) RETURNING *",[libelle,montant]);
    res.status(200).json(newone.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update one
app.put("/recettefinance/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { libelle,montant } = req.body;
    await pool.query(
      "UPDATE recette_finance SET libelle = $1, montant = $2 WHERE rf_id = $3",
      [libelle,montant,id]
    );

    res.status(200).json("update is done");
  } catch (err) {
    console.error(err.message);
  }
});

// delete one
app.delete("/recettefinance/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM recette_finance WHERE rf_id = $1", [id]);
    res.status(200).json("delete is done");
  } catch (err) {
    console.error(err.message);
  }
});



//greffier


// get all 
app.get("/greffier/list", async (req, res) => {
  try {
    const all = await pool.query("SELECT * from greffier");
    res.status(200).json(all.rows);
  } catch (err) {
    console.error(err.message);
  }
});

/* get one
app.get("/greffier/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT * FROM greffier WHERE gref_id = $1", [id]);
    res.status(200).json(one.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});*/

// create one
app.post("/greffier/list", async (req, res) => {
  try {
    const { nom ,prenom ,date_nais ,adresse ,etat_civile ,nombre_e ,type_payement ,base ,cin ,tel,categorie ,echelon ,crss ,contrat ,sexe ,date_emb ,actif ,unk1 ,unk2  } = req.body;
    const newone = await pool.query("INSERT INTO greffier (nom ,prenom ,date_nais ,adresse ,etat_civile ,nombre_e ,type_payement ,base ,cin ,tel,categorie ,echelon ,crss ,contrat ,sexe ,date_emb ,actif ,unk1 ,unk2 ) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19) RETURNING *",[nom ,prenom ,date_nais ,adresse ,etat_civile ,nombre_e ,type_payement ,base ,cin ,tel,categorie ,echelon ,crss ,contrat ,sexe ,date_emb ,actif ,unk1 ,unk2 ]);
    res.status(200).json(newone.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update one
app.put("/greffier/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nom ,prenom ,date_nais ,adresse ,etat_civile ,nombre_e ,type_payement ,base ,cin ,tel,categorie ,echelon ,crss ,contrat ,sexe ,date_emb ,actif ,unk1 ,unk2 } = req.body;
    await pool.query(
      "UPDATE greffier SET nom = $1, prenom = $2, date_nais = $3, adresse = $4, etat_civile = $5, nombre_e = $6, type_payement = $7, base = $8, cin = $9, tel = $10, categorie = $11, echelon = $12, crss = $13, contrat = $14, sexe = $15, date_emb = $16, actif = $17, unk1 = $18, unk2 = $19 WHERE gref_id = $20",
      [nom ,prenom ,date_nais ,adresse ,etat_civile ,nombre_e ,type_payement ,base ,cin ,tel,categorie ,echelon ,crss ,contrat ,sexe ,date_emb ,actif ,unk1 ,unk2,id ]
    );

    res.status(200).json("update is done");
  } catch (err) {
    console.error(err.message);
  }
});



// delete one
app.delete("/greffier/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM greffier WHERE gref_id = $1", [id]);
    res.status(200).json("delete is done");
  } catch (err) {
    console.error(err.message);
  }
});



// services

/*app.get("/services/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const services = await pool.query("SELECT * FROM services WHERE tribunal = $1", [
      id,
    ]);
    res.status(200).json(services.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});*/

 

app.post("/services/list", async (req, res) => {
  try {
    const { tribunal,nom,lundi,mardi,mercredi,jeudi,vendredi,samedi } = req.body;
    const services = await pool.query(
    "INSERT INTO servicess (tribunal,nom,lundi,mardi,mercredi,jeudi,vendredi,samedi) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",[tribunal,nom,lundi,mardi,mercredi,jeudi,vendredi,samedi]);
    res.status(200).json(services.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/services/list", async (req, res) => {
  try {
    const services = await pool.query("SELECT * from servicess");
    res.status(200).json(services.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/services/list", async (req, res) => {
  try{
    const { q } = req.query;

  const keys = ["tribunal"];
  
  const services = await pool.query("SELECT * from servicess");
  console.log(services);
  const rows = services.rows;
  
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(search(rows)) : res.json(rows);
  }catch (err) {
    console.error(err.message);
  }
  
});

app.get("/collaborateurs/list", async (req, res) => {
  try {
    const { q } = req.query;
    const keys = ["nom","cin","ville","rue","num","codepostale","activite","tel","fax","email","matricule","methodepaiment","montant","nombre_dossier"];

    const allColab = await pool.query("SELECT * from collaborateurs");
    const rows = allColab.rows;

    const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toString().toLowerCase().includes(q))
    );
  };

  q ? res.json(search(rows)) : res.json(rows);

  } catch (err) {
    console.error(err.message);
  }
});

app.get("/collaborateurs/list2", async (req, res) => {
  try {
    const { q } = req.query;
    const keys = ["nom"];
    const allColab = await pool.query("SELECT * from collaborateurs");
    const rows = allColab.rows;

    const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toString().toLowerCase().includes(q))
    );
  };

  q ? res.json(search(rows)) : res.json(rows);

  } catch (err) {
    console.error(err.message);
  }
});

app.put("/services/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nom,lundi,mardi,mercredi,jeudi,vendredi,samedi} = req.body;
    await pool.query(
      "UPDATE services SET nom=$1,lundi=$2,mardi=$3,mercredi=$4,jeudi=$5,vendredi=$6,samedi=$7  WHERE service_id = $8",
      [nom,lundi,mardi,mercredi,jeudi,vendredi,samedi, id]
    );

    res.status(200).json("service was updated");
  } catch (err) {
    console.error(err.message);
  }
});


app.delete("/services/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM services WHERE service_id = $1", [
      id,
    ]);
    res.status(200).json("services was deleted");
  } catch (err) {
    console.error(err.message);
  }
});




//Parametres

// get all 
app.get("/parametres/list", async (req, res) => {
  try {
    const all = await pool.query("SELECT * from parametree");
    res.status(200).json(all.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/parametres/list", async (req, res) => {
  try {
    const { timbre,tva,photocopie,transport } = req.body;
    const services = await pool.query(
    "INSERT INTO parametree (timbre,tva,photocopie,transport) VALUES($1,$2,$3,$4) RETURNING *",[timbre,tva,photocopie,transport]);
    res.status(200).json(services.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/parametres/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM parametree WHERE parametre_id = $1", [
      id,
    ]);
    res.status(200).json("parametre was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/parametres/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { timbreFiscale, tauxTVA, prixPhotocopie, montantTransport} = req.body;
    await pool.query(
      `UPDATE parametree SET timbre=$1, tva=$2, photocopie=$3, transport=$4 WHERE parametre_id = $5`,
      [timbreFiscale, tauxTVA, prixPhotocopie, montantTransport,id]
    );

    res.status(200).json("service was updated");
  } catch (err) {
    console.error(err.message);
  }
});



app.post("/adversaire/list", async (req, res) => {
  try {
    const { dossier_id,nom,registre,adresse,adresse_d,avocat,adresse_a,brouillon} = req.body;
    const donnees = await pool.query(
    "INSERT INTO adversaires (dossier_id,nom,registre,adresse,adresse_d,avocat,adresse_a,brouillon) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
    [dossier_id,nom,registre,adresse,adresse_d,avocat,adresse_a,brouillon]);
    res.status(200).json(donnees.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/adversaire/list", async (req, res) => {
  try {
    const all = await pool.query("SELECT * from adversaires");
    res.status(200).json(all.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/adversaire/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM adversaires WHERE adversaire_id = $1", [
      id,
    ]);
    res.status(200).json("adversaire was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/adversaire/list/", async (req, res) => {
  try {
    await pool.query("DELETE FROM adversaires WHERE brouillon = $1", [
      "oui",
    ]);
    res.status(200).json("adversaire was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/adversaire/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT nom FROM adversaires WHERE dossier_id = $1", [id]);
    res.status(200).json(one.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/adversaire/listtotal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT * FROM adversaires WHERE dossier_id = $1", [id]);
    res.status(200).json(one.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/adversaire/listid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT adversaire_id FROM adversaires WHERE dossier_id = $1", [id]);
    res.status(200).json(one.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.put("/adversaire/list/", async (req, res) => {
  try {
    await pool.query(
      `UPDATE adversaires SET brouillon=$1 WHERE brouillon = $2`,
      ["non","oui"]
    );

    res.status(200).json("service was updated");
  } catch (err) {
    console.error(err.message);
  }
});



//Gestion de la table qui contient les détails des dossiers//////////

//demandeurs

app.get("/demandeurs/list", async (req, res) => {
  try {
    const all = await pool.query("SELECT * from demandeurs");
    res.status(200).json(all.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/demandeurs/listtotal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT * FROM demandeurs WHERE dossier_id = $1", [id]);
    res.status(200).json(one.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/demandeurs/listid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT demandeur_id FROM demandeurs WHERE dossier_id = $1", [id]);
    res.status(200).json(one.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/demandeurs/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT nom FROM demandeurs WHERE dossier_id = $1", [id]);
    res.status(200).json(one.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.delete("/demandeurs/list/", async (req, res) => {
  try {
    await pool.query("DELETE FROM demandeurs WHERE brouillon = $1", [
      "oui",
    ]);
    res.status(200).json("demandeurs was deleted");
  } catch (err) {
    console.error(err.message);
  }
});


app.delete("/demandeurs/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM demandeurs WHERE demandeur_id = $1", [
      id,
    ]);
    res.status(200).json("demandeur was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/demandeurs/list", async (req, res) => {
  try {
    const { dossier_id,nom,CIN,adresse,adresse_d,tel,fax,brouillon} = req.body;
    const donnees = await pool.query(
    "INSERT INTO demandeurs (dossier_id,nom,CIN,adresse,adresse_d,tel,fax,brouillon) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
    [dossier_id,nom,CIN,adresse,adresse_d,tel,fax,brouillon]);
    res.status(200).json(donnees.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/demandeurs/list/", async (req, res) => {
  try {
    await pool.query(
      `UPDATE demandeurs SET brouillon=$1 WHERE brouillon = $2`,
      ["non","oui"]
    );

    res.status(200).json("demandeur was updated");
  } catch (err) {
    console.error(err.message);
  }
});

//tache
app.put("/tache/list/", async (req, res) => {
  try {
    await pool.query(
      `UPDATE tache SET brouillon=$1 WHERE brouillon = $2`,
      ["non","oui"]
    );

    res.status(200).json("tache was updated");
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/tache/list", async (req, res) => {
  try {
    const { dossier_id,tache,datec,dater,resolu,course,lieu,service,dateaud,dateech,greffier,personnech,brouillon} = req.body;
    const donnees = await pool.query(
    "INSERT INTO tache (dossier_id,tache,datec,dater,resolu,course,lieu,service,dateaud,dateech,greffier,personnech,brouillon) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *",
    [dossier_id,tache,datec,dater,resolu,course,lieu,service,dateaud,dateech,greffier,personnech,brouillon]);
    res.status(200).json(donnees.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


app.delete("/tache/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM tache WHERE tache_id = $1", [
      id,
    ]);
    res.status(200).json("tache was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/tache/list", async (req, res) => {
  try {
    const all = await pool.query("SELECT * from tache");
    res.status(200).json(all.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/tache/listtotal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT * FROM tache WHERE dossier_id = $1", [id]);
    res.status(200).json(one.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/tache/listid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT tache_id FROM tache WHERE dossier_id = $1", [id]);
    res.status(200).json(one.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/tache/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT tache FROM tache WHERE tache_id = $1", [id]);
    res.status(200).json(one.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.delete("/tache/list/", async (req, res) => {
  try {
    await pool.query("DELETE FROM tache WHERE brouillon = $1", [
      "oui",
    ]);
    res.status(200).json("tache was deleted");
  } catch (err) {
    console.error(err.message);
  }
});


app.post("/dossierss/list", async (req, res) => {
  try {
    const { code1,code2,typee,mission,emplacement,lieu,numaff,servicee,observation,calendar,client,tel,adversaire,honoraire,net,client_id,collab_id,parent_id,mode_r,part_c,type_r } = req.body;
    const donnees = await pool.query(
    "INSERT INTO dossiers (code,typee,mission,emplacement,lieu,numaff,servicee,observation,calendar,client,tel,adversaire,honoraire,net,client_id,collab_id,parent_id,mode_r,part_c,type_r) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) RETURNING *",
    [`${code1}-${code2}`,typee,mission,emplacement,lieu,numaff,servicee,observation,calendar,client,tel,adversaire,honoraire,net,client_id,collab_id,parent_id,mode_r,part_c,type_r ]);
    res.status(200).json(donnees.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


app.put("/dossierss/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { emplacement } = req.body;
    await pool.query(
      "UPDATE dossiers SET emplacement = $1 WHERE dossier_id = $2",
      [emplacement, id]
    );

    res.status(200).json("dossier reclassé avec succés");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/dossierss/list", async (req, res) => {
  try {
    const { q } = req.query;
    const keys = ["dossier_id","numaff","emplacement","client","tel","mission","adversaire"];
    const allclients = await pool.query("SELECT * from dossiers");
    const rows = allclients.rows;
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toString().toLowerCase().includes(q))
      );
    };
    q ? res.json(search(rows)) : res.json(rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.delete("/dossierss/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM dossiers WHERE dossier_id = $1", [
      id,
    ]);
    res.status(200).json("dossier was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/dossierss/list/number", async (req, res) => {
  try {
    const numberclients = await pool.query("SELECT dossier_id FROM dossiers ORDER BY dossier_id DESC LIMIT 1");
    res.status(200).json(numberclients.rows[0].dossier_id);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/dossierss/list", async (req, res) => {
  try {
    const all = await pool.query("SELECT * from dossiers");
    res.status(200).json(all.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/dossierss/list/recherche/one/", async (req, res) => {
  try {
    const { q } = req.query;
    const keys = ["dossier_id"];
    const allclients = await pool.query("SELECT * from dossiers");
    const rows = allclients.rows;
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toString().toLowerCase().includes(q))
      );
    };
    q ? res.json(search(rows)) : res.json(rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/dossierss/list/recherche/", async (req, res) => {
  try {
    const { q,p } = req.query;
    const keys = [p];
    const allclients = await pool.query("SELECT * from dossiers");
    const rows = allclients.rows;
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toString().toLowerCase().includes(q))
      );
    };
    q ? res.json(search(rows)) : res.json(rows);
  } catch (err) {
    console.error(err.message);
  }
});


//reglement

/*app.post("/reglement/list", async (req, res) => {
  try {
    const { hono_avo,net_payer,montant,typee,bare,num_operation,banque,porteur,echeance } = req.body;
    const donnees = await pool.query(
    "INSERT INTO reglement (hono_avo,net_payer,montant,typee,bare,num_operation,banque,porteur,echeance) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
    [ hono_avo,net_payer,montant,typee,bare,num_operation,banque,porteur,echeance ]);
    res.status(200).json(donnees.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


app.put("/reglement/list/", async (req, res) => {
  try {
    const { id_reg } = req.params;
    const { hono_avo,net_payer,montant,typee,bare,num_operation,banque,porteur,echeance } = req.body;
    await pool.query(
      `UPDATE reglement SET hono_avo=$1,net_payer=$2,montant=$3,typee=$4,bare=$5,num_operation=$6,banque=$7,porteur=$8,echeance=$9 WHERE id_reg=$10`,
      [hono_avo,net_payer,montant,typee,bare,num_operation,banque,porteur,echeance,id_reg]
    );

    res.status(200).json("reglement was updated");
  } catch (err) {
    console.error(err.message);
  }
});





// get all 
app.get("/reglement/list", async (req, res) => {
  try {
    const all = await pool.query("SELECT * from reglement");
    res.status(200).json(all.rows);
  } catch (err) {
    console.error(err.message);
  }
});

get one
app.get("/reglement/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT * FROM reglement WHERE id_reg = $1", [id]);
    res.status(200).json(one.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/reglement/listtotal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT * FROM reglement WHERE id_reg = $1", [id]);
    res.status(200).json(one.rows);
  } catch (err) {
    console.error(err.message);
  }
});


// delete one
app.delete("/reglement/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM reglement WHERE id_reg = $1", [id]);
    res.status(200).json("delete is done");
  } catch (err) {
    console.error(err.message);
  }
});*/











app.post("/reglement/list", async (req, res) => {
  try {
    const { dossier_id,hono_avo,net_payer,montant,typee,bare,num_operation,banque,porteur,echeance,broui} = req.body;
    const donnees = await pool.query(
    "INSERT INTO adversaires (dossier_id,hono_avo,net_payer,montant,typee,bare,num_operation,banque,porteur,echeance,broui) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
    [dossier_id,hono_avo,net_payer,montant,typee,bare,num_operation,banque,porteur,echeance,broui]);
    res.status(200).json(donnees.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/reglement/list", async (req, res) => {
  try {
    const all = await pool.query("SELECT * from reglement");
    res.status(200).json(all.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/reglement/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM reglement WHERE id_reg = $1", [
      id,
    ]);
    res.status(200).json("reglement was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/reglement/list/", async (req, res) => {
  try {
    await pool.query("DELETE FROM reglement WHERE broui = $1", [
      "oui",
    ]);
    res.status(200).json("reg was deleted");
  } catch (err) {
    console.error(err.message);
  }
});



app.get("/reglement/listtotal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT * FROM reglement WHERE dossier_id = $1", [id]);
    res.status(200).json(one.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/reglement/list/", async (req, res) => {
  try {
    await pool.query(
      `UPDATE reglement SET broui=$1 WHERE broui = $2`,
      ["non","oui"]
    );

    res.status(200).json("reglement was updated");
  } catch (err) {
    console.error(err.message);
  }
});















app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});