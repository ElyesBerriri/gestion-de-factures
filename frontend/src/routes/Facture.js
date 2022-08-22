import React from "react";
import Pdf from "react-to-pdf";
import logo from '../logo_facture.png';
const ref = React.createRef();

function Facture() {
  return (
    <>
      <Pdf targetRef={ref} filename={"Facture"}>
        {({ toPdf }) => <button onClick={toPdf} className="mt-5 mb-5">Télécharger le PDF</button>}
      </Pdf>
      <div style={{
        height: '29.7cm',
        width: '21cm',
        margin: 'auto',
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

          <div className="row">
            <div className="col-6">
              <h6>Email: lawyer.caat@gmail.com</h6>
            </div>
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
                <h6>: الحريف</h6>
                <h6>: المعرف الجبائي</h6>
                <h6>: العنوان</h6>
                <h6>: الهاتف</h6>
                <h6>: الايمايل</h6>
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
      <div className="mt-5" style={{ color: 'transparent' }}>_</div>
    </>
  );
}

export default Facture;
