const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

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

    res.status(200).json("client was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a type_dossier
app.delete("/type_dossiers/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM clients WHERE type_id = $1", [
      id,
    ]);
    res.status(200).json("client was deleted");
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


/////////////////////////get all primes////////////////////////////
app.get("/primes/list", async (req, res) => {
  try {
    const allprimes = await pool.query("SELECT * from primes");
    res.status(200).json(allprimes.rows);
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


/////////////////////////get all cclients////////////////////////////
app.get("/cclients/list", async (req, res) => {
  try {
    const allcclients = await pool.query("SELECT * from cclients");
    res.status(200).json(allcclients.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a cclient
app.get("/cclients/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cclient = await pool.query("SELECT * FROM cclients WHERE cclient_id = $1", [
      id,
    ]);
    res.status(200).json(cclient.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// create a cclient
app.post("/cclients/list", async (req, res) => {
  try {
    const { collaborateur,code_client,raison,situation_fiscale,type_client,matricule,ville,rue,num,code_postale,adresse,activite,tel,fax,email } = req.body;
    const newcclient = await pool.query(
      "INSERT INTO cclients (collaborateur,code_client,raison,situation_fiscale,type_client,matricule,ville,rue,num,code_postale,adresse,activite,tel,fax,email) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING *",
      [collaborateur,code_client,raison,situation_fiscale,type_client,matricule,ville,rue,num,code_postale,adresse,activite,tel,fax,email]
    );

    res.status(200).json(newcclient.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a cclient
app.put("/cclients/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { collaborateur,code_client,raison,situation_fiscale,type_client,matricule,ville,rue,num,code_postale,adresse,activite,tel,fax,email } = req.body;
    await pool.query(
      "UPDATE cclients SET collaborateur = $1, code_client = $2, raison = $3, situation_fiscale = $4, type_client = $5, matricule = $6, ville = $7, rue = $8, num = $9, code_postale = $10, adresse = $11, activite = $12, tel = $13, fax = $14, email = $15 WHERE cclient_id = $16",
      [collaborateur,code_client,raison,situation_fiscale,type_client,matricule,ville,rue,num,code_postale,adresse,activite,tel,fax,email, id]
    );

    res.status(200).json("cclient was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a cclient
app.delete("/cclients/list/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM cclients WHERE cclient_id = $1", [
      id,
    ]);
    res.status(200).json("cclient was deleted");
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