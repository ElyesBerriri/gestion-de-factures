import React from "react";
import TabReg from "./TabReg";

const Reglement = (props) => {

    return (
        <section className='container client' id="reglement">
            <TabReg dossier_id={props.idd}
                changereglements={props.changereglements} />
        </section>
    )
};

export default Reglement;