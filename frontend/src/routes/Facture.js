import React, { useState, useEffect } from "react";
import logo from '../logo_facture.png';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Tabfac from "../components/Tabfac";
import { set } from "date-fns";

const ref = React.createRef();

function Facture() {
  const [facture, setfacture] = useState();
  const current = new Date();
  const date = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;

  //li fehom commentaire houma les variables li bch test'ha9hom
  const [emailavocat, setemailavocat] = useState("lawyer.caat@gmail.com");//email de l'avocat
  const [clients, setClients] = useState([]);
  const [query, setQuery] = useState("");
  const [client, setClient] = useState({
    "collaborateur": "",
    "code_client": "",
    "raison": "",
    "situation_fiscale": "",
    "type_client": "",
    "matricule": "",
    "ville": "",
    "rue": "",
    "num": 0,
    "code_postale": 0,
    "adresse": "",
    "activite": "",
    "tel": "",
    "fax": "",
    "email": ""
  });//objet fih les données mta3 lclient. Tow tel9a esemi les données louta fel code
  const [email, setemail] = useState("");//email lclient
  const [payment, setpayment] = useState("-");//mode de payment mta3 lclient. Tow tel9a les valeurs louta
  const [tabe3, setetabe3] = useState(0);//الطابع الجبائي
  const [kima, setkima] = useState(0);//الاداء على القيمة المضافة
  const [khasm, setkhasm] = useState(0);//الخصم من المورد
  const [enquetes, setenquetes] = useState([]);/*hedhi liste feha des objets fehom les données mta3 أتعاب محاماة. 
  Kol objet fih : رقم,الموضوع etc .. Tow tel9a esemhom bedhabt fel Tabfacture */


  const getfacture = async () => {
    try {
      const response = await fetch("/facture");
      const jsonData = await response.json();

      if(jsonData[0].datee<current.getFullYear()){
        setfacture(1);}
      else{
        setfacture(jsonData[0].facture);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const getClient = async (query) => {
    try {
      const response = await fetch(`/clients/list/creation/?q=${query}`);
      const jsonData = await response.json();
      setClients(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const specificClient = async (id) => {
    if (id != 0) {
      try {
        const response = await fetch(`/clients/list/${id}`);
        const jsonData = await response.json();
        setClient(jsonData);
        setemail(jsonData.email);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      setClient({});
    }
  };

  useEffect((e) => {
    getfacture();
  }, []);


  useEffect(() => {
    getClient(query);
  }, [query]);

  return (
    <>
      <div className="pdf">
        <div className="border border-2 m-3" style={{ width: '21cm', minHeight: '29.7cm' }} >
          <div ref={ref} style={{ padding: '0.5cm' }}>
            <div className="row" style={{ textAlign: 'left' }}>
              <div className="col-6" style={{ display: 'flex' }}><img src={logo} alt="Logo" width="220" style={{ margin: 'auto' }} /></div>
              <div className="col">
                <h6>STE BELHASSEN ET CIE D'Avocats / S.U.A.R.L</h6>
                <h6>CAAT(Consortium des avocats d'affaires tunisiens)</h6>
                <h6>MF N°: 1645590/B/A/M</h6>
                <h6>CENTRE ELKHALIL N°124 SLIMANE KAHYA MANOUBA 2010-TUNISIE</h6>
                <h6>Domiciliation Bancaire : BNA -Agence Manouba-</h6>
                <h6>RIB N°: 03034 1640115004181 58</h6>
                <h6>IBAN N° TN9 0303 4164 0115 0041 8158</h6>
              </div>
            </div>{/*style={{border: '2px solid black'}}*/}
            <div className="input-group mb-3">
              <span className="input-group-text ">Email :</span>
              <input type="text" className="form-control "
                value={emailavocat}
                onChange={e => setemailavocat(e.target.value)} />
              <div className="col" style={{ textAlign: 'right' }}>
                <h6>{date} تونس في</h6>
              </div>
            </div>
            <div style={{ margin: 'auto', marginTop: 0, padding: 0, width: '20cm', border: '0.1mm solid black' }}>
              <div className="myRow">
                <h6 className="col-12" style={{ border: '0.1mm solid black', paddingRight: 0 }}>مذكرة أتعاب محاماة فاتورة عدد {facture} / {current.getFullYear()}  </h6>
              </div>
              <div className="myRow">
                <div style={{ textAlign: 'right', border: '0.1mm solid black', width: '9.96cm' }}></div>
                <div style={{ textAlign: 'right', border: '0.1mm solid black', width: '9.99cm' }}>
                  <div className="rechercheajoutcreation" style={{ display:'flex',justifyContent:'space-around'}}>
                    <Search setQuery={(e) => setQuery(e)} />
                      <select className="myselectcreation col-9" onChange={(e) => specificClient(e.target.value)}>
                        <option>: الحريف</option>
                        {clients.map(client => (
                          <option key={client.client_id} value={client.client_id}>{client.raison} {client.code_client}</option>
                        ))}
                      </select>
                  </div>

                  <div className="container">
                    <div className="input-group mb-4">
                      <input type="text" className="form-control"
                        disabled={true}
                        placeholder={client.matricule}
                        defaultValue={client.matricule}
                      />
                      <span className="input-group-text">: المعرف الجبائي</span>
                    </div>

                    <div className="input-group  mb-4">
                      <input type="text" className="form-control"
                        disabled={true}
                        placeholder={client.adresse}
                        defaultValue={client.adresse}
                      />
                      <span className="input-group-text">: العنوان</span>
                    </div>

                    <div className="input-group  mb-4">
                      <input type="text" className="form-control"
                        disabled={true}
                        placeholder={client.tel}
                        defaultValue={client.tel}
                      />
                      <span className="input-group-text">: الهاتف</span>
                    </div>

                    <div className="input-group  mb-4">
                      <input type="text" className="form-control"
                        defaultValue={client.email}
                        placeholder="email"
                        onChange={e => setemail(e.target.value||"-")}
                      />
                      <span className="input-group-text">: الايمايل</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-1" style={{ color: 'transparent' }}>_</div>

              <Tabfac enquetes={enquetes} setenquetes={setenquetes} />

              <div className="mt-4" style={{ color: 'transparent' }}>_</div>

              <div className="myRow" style={{ backgroundColor: '#BBA14A' }} >
                <h6 style={{ border: '0.1mm solid black', backgroundColor: '#BBA14A', paddingRight: 0, width: '3.56cm' }}>0</h6>
                <h6 style={{ border: '0.1mm solid black', backgroundColor: '#BBA14A', paddingRight: 0, width: '6.4cm' }}>المجموع</h6>
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '9.99cm', color: 'transparent' }}>-</h6>
              </div>

              <div className="myRow">

                <div style={{ border: '0.1mm solid black', width: '3.56cm' }}>
                  <div className="myRow" style={{ display: 'block', borderBottom: '0.1mm solid black' }}>
                    <div className="container">

                      <h6 style={{ paddingRight: 0, height: '1.3cm' }}>
                        <input type="number" className="form-control"
                          placeholder="0"
                          onChange={e => setkima(e.target.value||0)}
                        /></h6>
                    </div>
                  </div>

                  <div className="myRow" style={{ display: 'block', borderBottom: '0.1mm solid black' }}>
                    <div className="container">
                      <h6 style={{ paddingRight: 0, height: '1.3cm' }}>
                        <input type="number" className="form-control"
                          placeholder="0"
                          onChange={e => setkhasm(e.target.value||0)}
                        /></h6>
                    </div>
                  </div>

                  <div className="myRow" style={{ display: 'block' }}>
                    <div className="container">
                      <h6 style={{ paddingRight: 0, height: '1.3cm' }}>
                        <input type="number" className="form-control"
                          placeholder="0"
                          onChange={e => setetabe3(e.target.value||0)}
                        /></h6>
                    </div>
                  </div>

                </div>

                <div style={{ border: '0.1mm solid black', width: '6.4cm' }}>
                  <div className="myRow" style={{ display: 'block' }}>
                    <h6 style={{ textAlign: 'right', borderBottom: '0.1mm solid black', width: '6.4cm', height: '1.3cm' }}>الاداء على القيمة المضافة</h6>
                  </div>
                  <div className="myRow" style={{ display: 'block' }}>
                    <h6 style={{ textAlign: 'right', borderBottom: '0.1mm solid black', width: '6.4cm', height: '1.3cm' }}>الخصم من المورد</h6>
                  </div>
                  <div className="myRow" style={{ display: 'block' }}>
                    <h6 style={{ textAlign: 'right', width: '6.4cm', height: '1.3cm' }}>الطابع الجبائي</h6>
                  </div>
                </div>

                <div style={{ textAlign: 'right', border: '0.1mm solid black', width: '9.99cm' }}>
                  <h6>: طريقة التسديد</h6>
                  <div className="myRow">
                    <div className="col-9" style={{ paddingRight: 0 }}>شاك</div>
                    <div className="col-1">
                      <input type="radio" value="chek" name="mdp"
                        onChange={e => {
                          if (e.target.checked)
                            setpayment(e.target.value);

                        }} />
                    </div>
                  </div>
                  <div className="myRow">
                    <div className="col-9" style={{ paddingRight: 0 }}>كمبيالة</div>
                    <div className="col-1">
                      <input type="radio" value="kembyela" name="mdp"
                        onChange={e => {
                          if (e.target.checked)
                            setpayment(e.target.value);
                        }} />
                    </div>
                  </div>
                  <div className="myRow">
                    <div className="col-9" style={{ paddingRight: 0 }}>إيداع بنكي</div>
                    <div className="col-1">
                      <input type="radio" value="virement" name="mdp"
                        onChange={e => {
                          if (e.target.checked)
                            setpayment(e.target.value);
                        }} />
                    </div>
                  </div>
                  <div className="myRow">
                    <div className="col-9" style={{ paddingRight: 0 }}>خلافه</div>
                    <div className="col-1">
                      <input type="radio" value="khlefa" name="mdp"
                        onChange={e => {
                          if (e.target.checked)
                            setpayment(e.target.value);
                        }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="myRow" style={{ backgroundColor: '#BBA14A' }}>
                <input id="txt" style={{ border: '0.1mm solid black', textAlign: 'center', fontSize: '0.39cm', fontWeight: 500, lineHeight: 1.2, backgroundColor: '#BBA14A', width: '3.56cm' }} value={
                  (-parseFloat(khasm || 0).toFixed(3) - (-parseFloat(kima || 0).toFixed(3) - parseFloat(tabe3 || 0).toFixed(3))).toFixed(3)
                } readOnly />
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '6.4cm' }}>المبلغ الصافي</h6>
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '9.99cm', color: 'transparent' }}>-</h6>
              </div>
            </div>

            <div className="mt-3" style={{ minHeight: '2.2cm' }}>
              <span>وقفت هذه الفاتورة على مبلغ قدره : </span><span id="demo"></span>
            </div>
            <div style={{ textAlign: 'left' }} className="mx-5 mb-5">
              الإمضاء
            </div>
            <div className="pt-5">
              <hr style={{ color: 'black', backgroundColor: 'black', opacity: '1', height: '0.5mm' }} />
            </div>
            <h6>CENTRE ELKHALIL N°124 SLIMANE KAHYA MANOUBA 2010-TUNISIE</h6>
            <h6>Tél:(+216)50409407 / (+216)36442043 Fax:(+216)71601434 Email: lawyer.caat@gmail.com</h6>
          </div>
        </div>
      </div>
      <div className="mt-5" style={{ color: 'transparent' }}>_</div>

      <div className="mb-5">
        <Link to="/PDFfacture" state={{ date: date, facture: facture + 1, facturenow: facture, datee: current.getFullYear(), ea: emailavocat, cl: client, em: email, pa: payment, ta: tabe3, ki: kima, kh: khasm, en: enquetes }}>
          <Button variant="dark">Générer la facture</Button>
        </Link>
      </div>
    </>
  );
}

export default Facture;