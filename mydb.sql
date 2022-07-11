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










CREATE TABLE honoraire_en_extra(
    gr_id SERIAL PRIMARY KEY,
    lib_arab VARCHAR(255),
    lib_fr VARCHAR(255),
    montant int
);

CREATE TABLE timbre(
    tim_id SERIAL PRIMARY KEY,
    libelle VARCHAR(255),
    montant float
);

CREATE TABLE recette_finance(
    rf_id SERIAL PRIMARY KEY,
    libelle VARCHAR(255),
    montant float
);

CREATE TABLE greffier(
gref_id serial primary key,
nom varchar(255),
prenom varchar(255),
date_nais varchar(255),
adresse varchar(255),
etat_civile varchar(255),
nombre_e int,
type_payement varchar(255),
base int,
cin bigint,
tel bigint,
categorie int,
echelon int,
crss bigint,
contrat varchar(255),
sexe varchar(10),
date_emb varchar(255),
actif varchar(10),
unk1 varchar(10),
unk2 varchar(10)
);