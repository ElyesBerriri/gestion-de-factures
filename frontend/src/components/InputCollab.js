import React  from "react";
import { Link } from "react-router-dom";


const InputCollab = () => {
 
  return (

        <div className="container ">
    <form>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Nom et Prénom </label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Nom et Prénom"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Cin</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Cin"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Ville</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Ville"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Rue</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Rue"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Numéro</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Numéro"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Code Postale</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Code Postale"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Activité</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Activité"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Téléphone</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Téléphone"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Fax</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Fax"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Email"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Matricule</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Matricule"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Methode de paiement</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Methode de paiement"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Montant</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Montant"/>
    </div>
    </div>

    <div class="row mb-3">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Nombre_dossier</label>
    <div class="col-sm-10">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Nombre_dossier"/>
    </div>
    </div>

    
    <Link to={"/"}><button type="submit" class="btn btn-primary">Ajouter</button>
                    
                  </Link> 

    </form>
    </div>
  );
};

export default InputCollab;