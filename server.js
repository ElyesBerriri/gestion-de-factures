const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");


// process.env.NODE_ENV => production or undefined
// middleware

app.use(cors());
app.use(express.json()); 
app.use(bodyParser.json());
 
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



//emplacement dossiers
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



//liste des collaborateurs
//get all colab

app.get("/collaborateurs/list", async (req, res) => {
  try {
    const allColab = await pool.query("SELECT * from collaborateurs");
    res.status(200).json(allColab.rows);
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
    const { nom } = req.body;
    await pool.query(
      "UPDATE collaborateurs SET nom = $1 WHERE collab_id = $2",
      [nom, id]
    );

    res.status(200).json("folder was updated");
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


//else

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});