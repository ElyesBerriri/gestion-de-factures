import React, { useState, useEffect } from "react";
import logo from '../logo_facture.png';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Tabfac from "../components/Tabfacture";

const ref = React.createRef();

function Facture() {

  //li fehom commentaire houma les variables li bch test'ha9hom

  const [emailavocat, setemailavocat] = useState("--");//email de l'avocat
  const [clients, setClients] = useState([]);
  const [query, setQuery] = useState("");
  const [client, setClient] = useState({});//objet fih les données mta3 lclient. Tow tel9a esemi les données louta fel code
  const [email, setemail] = useState("--");//email lclient
  const [payment, setpayment] = useState("--");//mode de payment mta3 lclient. Tow tel9a les valeurs louta
  const [tabe3, setetabe3] = useState(0);//الطابع الجبائي
  const [kima, setkima] = useState(0);//الاداء على القيمة المضافة
  const [khasm, setkhasm] = useState(0);//الخصم من المورد
  const [enquetes, setenquetes] = useState([]);/*hedhi liste feha des objets fehom les données mta3 أتعاب محاماة. 
  Kol objet fih : رقم,الموضوع etc .. Tow tel9a esemhom bedhabt fel Tabfacture */

  const getClient = async (query) => {
    try {
      const response = await fetch(`/clients/list/creation/?q=${query}`);
      const jsonData = await response.json();
      setClients(jsonData);
      console.log(clients);
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
      } catch (err) {
        console.error(err.message);
      }
    } else {
      setClient({});
    }
  };


  useEffect(() => {
    getClient(query);
  }, [query]);

  
  return (
    <>
     
      <div style={{
        width: '21cm',
        margin: 'auto',
        marginTop:'5vh',
        border: '2px solid black'
      }}>

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
              <h6>2022/02/03 تونس في</h6>
            </div>
          </div>

          <div style={{ margin: 'auto', marginTop: 0, padding: 0, width: '20cm', border: '0.1mm solid black' }}>
            
            <div className="myRow">
              <h6 className="col-12" style={{ border: '0.1mm solid black', paddingRight: 0 }}>مذكرة أتعاب محاماة فاتورة عدد</h6>
            </div>

            <div className="myRow">

              <div style={{ textAlign: 'right', border: '0.1mm solid black',width: '9.96cm' }}></div>

              <div style={{ textAlign: 'right', border: '0.1mm solid black',width: '9.99cm' }}>

                <div className="rechercheajoutcreation">
                  <Search setQuery={(e) => setQuery(e)} />
                  <div className="mycontainercreation">
                    <select className="myselectcreation" onChange={(e) => specificClient(e.target.value)}>
                      <option>: الحريف</option>
                      {clients.map(client => (
                        <option key={client.client_id} value={client.client_id}>{client.raison} {client.code_client}</option>
                      ))}
                    </select>
                  </div>
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
                    value={email}
                    onChange={e => setemail(e.target.value)}
                  />
                  <span className="input-group-text">: الايمايل</span>
                </div>
</div>
              </div>
            </div>

            <div className="mt-1" style={{ color: 'transparent' }}>_</div>

            <Tabfac enquetes={enquetes} setenquetes={setenquetes}/>

            <div className="mt-4" style={{ color: 'transparent' }}>_</div>

        

            <div className="myRow" style={{ backgroundColor: '#BBA14A'}} >
              <h6 style={{ border: '0.1mm solid black',backgroundColor: '#BBA14A', paddingRight: 0,width: '3.56cm' }}>0</h6>
              <h6 style={{ border: '0.1mm solid black', backgroundColor: '#BBA14A',paddingRight: 0,width: '6.4cm' }}>المجموع</h6>
              <h6 style={{ border: '0.1mm solid black', paddingRight: 0,width: '9.99cm' }}></h6>
            </div>

            <div className="myRow">

              <div style={{ border: '0.1mm solid black',width: '3.56cm' }}>      
                <div className="myRow" style={{ display: 'block', borderBottom: '0.1mm solid black'}}>
                <div className="container"> 

                <h6 style={{ paddingRight: 0,height:'1.3cm' }}> 
                  <input type="number" className="form-control"
                    value={kima}
                    onChange={e => setkima(e.target.value)}
                  /></h6>
                </div>
                </div>

                <div className="myRow" style={{ display: 'block',borderBottom: '0.1mm solid black' }}>
                <div className="container"> 
                  <h6 style={{ paddingRight: 0,height:'1.3cm' }}> 
                  <input type="number" className="form-control"
                    value={khasm}
                    onChange={e => setkhasm(e.target.value)}
                  /></h6>
                </div>
                </div>

                <div className="myRow" style={{ display: 'block' }}>
                  <div className="container"> 
                 <h6 style={{ paddingRight: 0,height:'1.3cm' }}> 
                  <input type="number" className="form-control"
                    value={tabe3}
                    onChange={e => setetabe3(e.target.value)}
                  /></h6>
                  </div>
                </div>

              </div>

              <div style={{ border: '0.1mm solid black',width: '6.4cm' }}>
                <div className="myRow" style={{ display: 'block' }}>
                  <h6 style={{ textAlign: 'right', borderBottom: '0.1mm solid black',width: '6.4cm',height:'1.3cm' }}>الاداء على القيمة المضافة</h6>
                </div>
                <div className="myRow" style={{ display: 'block' }}>
                  <h6 style={{ textAlign: 'right', borderBottom: '0.1mm solid black',width: '6.4cm',height:'1.3cm' }}>الخصم من المورد</h6>
                </div>
                <div className="myRow" style={{ display: 'block' }}>
                  <h6 style={{ textAlign: 'right',width: '6.4cm',height:'1.3cm' }}>الطابع الجبائي</h6>
                </div>
              </div>

              <div style={{ textAlign: 'right', border: '0.1mm solid black',width: '9.99cm' }}>
                <h6>: طريقة التسديد</h6>
                <div className="myRow">
                  <div className="col-9" style={{ paddingRight: 0 }}>شاك</div>
                  <div className="col-1">
                  <input type="checkbox" value="chek"
                    onChange={e => {
                    if(e.target.checked)
                      setpayment(e.target.value);
                }} />
                  </div>
                </div>
                <div className="myRow">
                  <div className="col-9" style={{ paddingRight: 0 }}>كمبيالة</div>
                  <div className="col-1">
                  <input type="checkbox" value="kembyela"
                    onChange={e => {
                    if(e.target.checked)
                      setpayment(e.target.value);
                }} />
                  </div>
                </div>
                <div className="myRow">
                  <div className="col-9" style={{ paddingRight: 0 }}>إيداع بنكي</div>
                  <div className="col-1">
                    <input type="checkbox" value="virement"
                    onChange={e => {
                    if(e.target.checked)
                      setpayment(e.target.value);
                }} />
                  </div>
                </div>
                <div className="myRow">
                  <div className="col-9" style={{ paddingRight: 0 }}>خلافه</div>
                  <div className="col-1">
                    <input type="checkbox" value="khlefa"
                    onChange={e => {
                    if(e.target.checked)
                      setpayment(e.target.value);
                }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="myRow" style={{ backgroundColor: '#BBA14A' }}>
              <input id="txt" style={{ border: '0.1mm solid black', textAlign: 'center', fontSize: '0.39cm', fontWeight: 500, lineHeight: 1.2, backgroundColor: '#BBA14A',width: '3.56cm' }} value={0} readOnly />
              <h6 style={{ border: '0.1mm solid black', paddingRight: 0,width: '6.4cm' }}>المبلغ الصافي</h6>
              <h6 style={{ border: '0.1mm solid black', paddingRight: 0,width: '9.99cm' }}></h6>
            </div>
          </div>
          
          <div className="mt-3" style={{ minHeight: '2.2cm' }}>
            <span>وقفت هذه الفاتورة على مبلغ قدره : </span><span id="demo"></span>
          </div>
          <div style={{ textAlign: 'left' }} className="mx-5 mb-5">
            الإمضاء
          </div>
          <div className="pt-5">
            <hr style={{height:'2',color:'black',backgroundColor:'black',opacity: '1',height: '0.5mm'}} />
          </div>
          <h6>CENTRE ELKHALIL N°124 SLIMANE KAHYA MANOUBA 2010-TUNISIE</h6>
          <h6>Tél:(+216)50409407 / (+216)36442043 Fax:(+216)71601434 Email: lawyer.caat@gmail.com</h6>
        </div>
      </div>
      <div className="mt-5" style={{ color: 'transparent' }}>_</div>

      <div className="mb-5">
        <Link to="/PDFfacture">
          <Button variant="dark" >Générer la facture</Button>
        </Link>
      </div>

      {console.log(payment)}
    </>
  );
}

export default Facture;