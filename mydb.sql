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




DROP TABLE dossiers;
CREATE TABLE dossiers(
  dossier_id INT,
  typee VARCHAR(255),
  mission VARCHAR(255),
  emplacement VARCHAR(255),
  lieu VARCHAR(255),
  numaff VARCHAR(255),
  servicee VARCHAR(255),
  observation VARCHAR(255),
  calendar VARCHAR(255),
  client VARCHAR(255),
  tel VARCHAR(255),
  adversaire VARCHAR(255),
  honoraire float,
  net float,
  client_id INT,
  collab_id INT,
  parent_id INT
);
INSERT INTO dossiers (dossier_id,typee,mission,emplacement,lieu,numaff,servicee,observation,calendar,client,tel,adversaire,honoraire,net,client_id,collab_id,parent_id) VALUES(20,'type1','m2','*','laba','12','*','*','17/07/2022','me','*','you',5.5,88.3,0,0,0) RETURNING *;
INSERT INTO dossiers (dossier_id,typee,mission,emplacement,lieu,numaff,servicee,observation,calendar,client,tel,adversaire,honoraire,net,client_id,collab_id,parent_id) VALUES(21,'type5','m2','emp1','ladsu','72','*','*','2022','*','*','*',0,8,0,0,0) RETURNING *;





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