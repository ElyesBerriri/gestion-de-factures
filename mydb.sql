CREATE TABLE type_dossiers(
  type_id SERIAL PRIMARY KEY,
  libelle VARCHAR(255)
);

CREATE TABLE clients(
  client_id SERIAL PRIMARY KEY,
  collaborateur VARCHAR(225),
  code_client VARCHAR(225),
  raison VARCHAR(225),
  situation_fiscale VARCHAR(20),
  type_client VARCHAR(225),
  matricule VARCHAR(225),
  ville VARCHAR(225),
  rue VARCHAR(225),
  num INTEGER,
  code_postale INTEGER,
  adresse VARCHAR(225),
  activite VARCHAR(225),
  tel VARCHAR(225),
  fax VARCHAR(225),
  email VARCHAR(225)
);

CREATE TABLE primes(
  id SERIAL PRIMARY KEY,
  libelle VARCHAR(255),
  montant REAL,
  dissociale BOOLEAN,
  impot BOOLEAN,
  mensuel BOOLEAN
);

CREATE TABLE utilisateurs(
  utilisateur_id SERIAL PRIMARY KEY,
  login VARCHAR(255),
  pwd VARCHAR(255),
  domaine VARCHAR(255)
);