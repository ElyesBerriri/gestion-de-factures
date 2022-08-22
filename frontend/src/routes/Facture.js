import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import logo from '../logo_facture.png';
const ref = React.createRef();

function Facture(props) {
  const [emailavocat, setemailavocat] = useState("--");
  const [clients, setClients] = useState([]);
  const [query, setQuery] = useState("");
  const [client, setClient] = useState({});
  const [email, setemail] = useState("--");


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
    if(id!=0){
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
        height: '29.7cm',
        width: '21cm',
        margin: 'auto',
        marginTop: '7vh',
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
              onChange={e => setemailavocat(e.target.value)}/>
         
            <div className="col" style={{ textAlign: 'right' }}>
              <h6>2022/02/03 تونس في</h6>
            </div>
          </div>

          <div className="container">
            <div class="row">
              <div className="col-12" style={{ border: '1px solid black' }}>مذكرة أتعاب محاماة فاتورة عدد</div>
            </div>
            
            <div class="row">
              <div className="col-6" style={{ textAlign: 'right', border: '1px solid black' }}></div>
              <div className="col-6" style={{ textAlign: 'right', border: '1px solid black' }}>


            <div className="rechercheajoutcreation">
              <Search setQuery={(e) => setQuery(e)} />

              <div className="mycontainercreation">
                  <select className="myselectcreation" onChange={(e)=>specificClient(e.target.value)}>
                      <option>: الحريف</option>
                      {clients.map(client => (
                          <option key={client.client_id}  value={client.client_id}>{client.raison} {client.code_client}</option>
                  ))}
                  </select>
              </div>
            </div>

            <div className="input-group mb-4">
                  <input type="text" className="form-control" 
                    disabled={true}
                    placeholder={client.matricule}
                    defaultValue={client.matricule}
                  />
                  <span  className="input-group-text">: المعرف الجبائي</span>
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

            <div class="row">
              <div className="col-2" style={{ border: '1px solid black' }}>المبلغ خارج الضريبة</div>
              <div className="col-4" style={{ border: '1px solid black' }}>المرجع</div>
              <div className="col-5" style={{ border: '1px solid black' }}>الموضوع</div>
              <div className="col-1" style={{ border: '1px solid black' }}>رقم</div>
            </div>
            <div class="row">
              <div className="col-2" style={{ border: '1px solid black' }}>
                <h6>400.000</h6>
              </div>
              <div className="col-4" style={{ textAlign: 'right', border: '1px solid black' }}>
                <h6>قضية عدد</h6>
              </div>
              <div className="col-5" style={{ textAlign: 'right', border: '1px solid black' }}>
                <h6>أتعاب محاماة قضية مخالفة جبائية جزائية</h6>
              </div>
              <div className="col-1" style={{ textAlign: 'right', border: '1px solid black' }}>
                <h6>01</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/PDFfacture" className="mt-5 mb-3">
          <Button variant="dark" >Générer le PDF</Button>
      </Link>
    </>
  );
}

export default Facture;
