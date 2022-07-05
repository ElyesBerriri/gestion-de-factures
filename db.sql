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
