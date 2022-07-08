CREATE TABLE emplacementdossiers(
  dossier_id SERIAL PRIMARY KEY,
  libelle VARCHAR(255)
);

CREATE TABLE collaborateurs(
  collab_id SERIAL PRIMARY KEY,
  nom VARCHAR(25),
  cin INTEGER,
  ville VARCHAR(25),
  rue VARCHAR(25),
  num INTEGER,
  codepostale INTEGER,
  activite VARCHAR(25),
  tel INTEGER,
  fax INTEGER,
  email VARCHAR(25),
  matricule VARCHAR(25),
  methodepaiment VARCHAR(25),
  montant INTEGER,
  nombre_dossier INTEGER);

CREATE TABLE tribunaux(
  trib_id SERIAL PRIMARY KEY,
  lieux VARCHAR(255)
);

CREATE TABLE servicess(
  service_id SERIAL PRIMARY KEY,
  tribunal VARCHAR(255),
  nom VARCHAR(255),
  lundi VARCHAR(255),
  mardi VARCHAR(255),
  mercredi VARCHAR(255),
  jeudi VARCHAR(255),
  vendredi VARCHAR(255),
  samedi VARCHAR(255));