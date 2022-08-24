CREATE TABLE emplacementdossiers(
  dossier_id SERIAL PRIMARY KEY,
  libelle VARCHAR(255)
);

CREATE TABLE parametree(
  parametre_id SERIAL PRIMARY KEY,
  timbre real,
  tva real,
  photocopie real,
  transport real
);

CREATE TABLE facture(
  facture INTEGER
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

   

  

      CREATE TABLE adversaires(
      adversaire_id serial PRIMARY KEY,
      dossier_id int,
      nom varchar(255),
      registre varchar(255),
      adresse varchar(255),
      adresse_d varchar(255),
      avocat varchar(255),
      adresse_a varchar(255),
      brouillon varchar(255)
      );

      
      CREATE TABLE demandeurs(
      demandeur_id serial PRIMARY KEY,
      dossier_id int,
      nom varchar(255),
      CIN varchar(255),
      adresse varchar(255),
      adresse_d varchar(255),
      tel varchar(255),
      fax varchar(255),
      brouillon varchar(255)
      );