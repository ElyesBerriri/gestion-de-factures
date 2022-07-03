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
app.get("/Clients", async (req, res) => {
  try {
    const allClients = await pool.query("SELECT * from clients");
    res.status(200).json(allClients.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a client
app.get("/Clients/:id", async (req, res) => {
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
app.post("/Clients", async (req, res) => {
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
app.put("/Clients/:id", async (req, res) => {
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
app.delete("/Clients/:id", async (req, res) => {
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