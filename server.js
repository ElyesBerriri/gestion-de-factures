const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

const bodyParser = require("body-parser");//transforme les données en format .json
app.use(bodyParser.json());

// process.env.NODE_ENV => production or undefined

// middleware
app.use(cors());
app.use(express.json()); // req.body

if (process.env.NODE_ENV === "production") {
  // service static content
  // npm run build
  app.use(express.static(path.join(__dirname, "frontend/build")));
}

// ROUTES

// get all Clients
app.get("/Clients/list", async (req, res) => {
  try {
    const allClients = await pool.query("SELECT * from clients");
    res.status(200).json(allClients.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a client
app.get("/Clients/list/:id", async (req, res) => {
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

// create a client
app.post("/Clients/list", async (req, res) => {
  try {
    const { description } = req.body;
    const newClient = await pool.query(
      "INSERT INTO clients (description) VALUES($1) RETURNING *",
      [description]
    );

    res.status(200).json(newClient.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a client
app.put("/Clients/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await pool.query(
      "UPDATE clients SET description = $1 WHERE client_id = $2",
      [description, id]
    );

    res.status(200).json("client was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a client
app.delete("/Clients/list/:id", async (req, res) => {
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});




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

// get a honorary
app.get("/honoraires/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const honoraire = await pool.query("SELECT * FROM honoraire_en_extra WHERE gr_id = $1", [id]);
    res.status(200).json(honoraire.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// create a honorary
app.post("/honoraires/list", async (req, res) => {
  try {
    const { lib_arab,lib_fr,montant } = req.body;
    const newhonorary = await pool.query(
      "INSERT INTO clients (lib_arab,lib_fr,montant) VALUES($1,$2,$3) RETURNING *",
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
      "UPDATE clients SET lib_arab = $1 lib_fr = $2 montant = $3 WHERE gr_id = $4",
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

// get a stamp
app.get("/timbres/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const timbre = await pool.query("SELECT * FROM timbre WHERE tim_id = $1", [id]);
    res.status(200).json(timbre.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

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
      "UPDATE timbre SET libelle = $1 montant = $2 WHERE tim_id = $3",
      [libelle,montant,id]
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

// get one
app.get("/recettefinance/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT * FROM recette_finance WHERE rf_id = $1", [id]);
    res.status(200).json(one.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

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
      "UPDATE recette_finance SET libelle = $1 montant = $2 WHERE rf_id = $3",
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

// get one
app.get("/greffier/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const one = await pool.query("SELECT * FROM greffier WHERE gref_id = $1", [id]);
    res.status(200).json(one.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// create one
app.post("/greffier/list", async (req, res) => {
  try {
    const { nom ,prenom ,date_nais ,adresse ,etat_civile ,nombre_e ,type_payement ,base ,cin ,tel,categorie ,echelon ,crss ,contrat ,sexe ,date_emb ,actif ,unk1 ,unk2  } = req.body;
    const newone = await pool.query(
    "INSERT INTO greffier \
    (nom ,prenom ,date_nais ,adresse ,etat_civile ,nombre_e ,type_payement ,base ,cin ,tel,categorie ,echelon ,crss ,contrat ,sexe ,date_emb ,actif ,unk1 ,unk2 ) \
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19) RETURNING *",[nom ,prenom ,date_nais ,adresse ,etat_civile ,nombre_e ,type_payement ,base ,cin ,tel,categorie ,echelon ,crss ,contrat ,sexe ,date_emb ,actif ,unk1 ,unk2 ]);
    res.status(200).json(newone.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update one
app.put("/greffier/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { libelle,montant } = req.body;
    await pool.query(
      "UPDATE greffier SET\
      nom = $1 prenom = $2 date_nais = $3 adresse = $4 etat_civile = $5 nombre_e = $6 type_payement = $7 base = $8 cin = $9 tel = $10 categorie = $11 echelon = $12 crss = $13 contrat = $14 sexe = $15 date_emb = $16 actif = $17 unk1 = $18 unk2 = $19 \
        WHERE gref_id = $20",
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

