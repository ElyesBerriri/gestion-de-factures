import React, { Fragment, useState,useEffect } from "react";
import TabReg from "./TabReg";

const Reglement =(props)=>{
   
    return(

        <section className='section1' id="reglement">

    <TabReg dossier_id={props.idd}             
    changereglements={props.changereglements} />
    </section>
    )

};

export default Reglement;