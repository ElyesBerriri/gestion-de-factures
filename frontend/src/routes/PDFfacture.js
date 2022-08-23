import React from "react";
import Pdf from "react-to-pdf";
import logo from '../logo_facture.png';
import tafqeet from './tafqeet';
const ref = React.createRef();

function PDFfacture() {

  var total = 658.26.toFixed(3);
  const main = () => {
    var fraction = document.getElementById("txt").value.split(".");
    if (fraction.length == 2) {
      document.getElementById("demo").innerHTML = tafqeet(fraction[0]) + " دينار " + "و " + tafqeet(fraction[1]) + " مليم";
    }
    else if (fraction.length == 1) {
      document.getElementById("demo").innerHTML = tafqeet(fraction[0]);
    }
  }
  return (
    <>
      <Pdf targetRef={ref} filename={"Facture"}>
        {({ toPdf }) => <button onClick={() => { main(); toPdf() }} className="mt-5 mb-5">Télécharger le PDF</button>}
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

          <div style={{ margin: 'auto', marginTop: 0, padding:0,width: '20cm', border: '1px solid black' }}>
            <div className="myRow">
              <h6 className="col-12" style={{ border: '1px solid black',paddingRight: 0 }}>مذكرة أتعاب محاماة فاتورة عدد</h6>
            </div>
            <div className="myRow">
              <div className="col-6" style={{ textAlign: 'right', border: '1px solid black' }}></div>
              <div className="col-6" style={{ textAlign: 'right', border: '1px solid black' }}>
                <h6>: الحريف</h6>
                <h6>: المعرف الجبائي</h6>
                <h6>: العنوان</h6>
                <h6>: الهاتف</h6>
                <h6>: الايمايل</h6>
              </div>
            </div>

            <div className="myRow">
              <h6 className="col-2" style={{ border: '1px solid black',paddingRight: 0 }}>المبلغ خارج الضريبة</h6>
              <h6 className="col-4" style={{ border: '1px solid black',paddingRight: 0 }}>المرجع</h6>
              <h6 className="col-5" style={{ border: '1px solid black',paddingRight: 0 }}>الموضوع</h6>
              <h6 className="col-1" style={{ border: '1px solid black',paddingRight: 0 }}>رقم</h6>
            </div>
            <div className="myRow">
              <div className="col-2" style={{ border: '1px solid black' }}>
                <h6 style={{paddingRight: 0}}>400.000</h6>
                <h6 style={{paddingRight: 0}}>200.000</h6>
              </div>
              <div className="col-4" style={{ textAlign: 'right', border: '1px solid black' }}>
                <h6>قضية عدد</h6>
                <h6>قضية عدد</h6>
              </div>
              <div className="col-5" style={{ textAlign: 'right', border: '1px solid black' }}>
                <h6>أتعاب محاماة قضية مخالفة جبائية جزائية</h6>
                <h6>أتعاب محاماة قضية مخالفة جبائية جزائية</h6>
              </div>
              <div className="col-1" style={{ textAlign: 'right', border: '1px solid black' }}>
                <h6>01</h6>
                <h6>02</h6>{/*()?<h6>:<br>*/}
                <br /><br /><br /><br />
              </div>
            </div>
            <div className="myRow">
              <h6 className="col-2" style={{ border: '1px solid black',paddingRight: 0 }}>600.000</h6>
              <h6 className="col-4" style={{ border: '1px solid black',paddingRight: 0 }}>الموضوع</h6>
              <h6 className="col-5" style={{ border: '1px solid black',paddingRight: 0 }}></h6>
              <h6 className="col-1" style={{ border: '1px solid black',paddingRight: 0 }}></h6>
            </div>
            <div className="myRow">
              <div className="col-2" style={{ border: '1px solid black' }}>
                <div className="myRow" style={{display: 'block'}}>
                  <h6 style={{ borderBottom: '1px solid black',paddingRight: 0 }}>78.000</h6>
                </div>
                <div className="myRow" style={{display: 'block'}}>
                  <h6 style={{ borderBottom: '1px solid black',paddingRight: 0 }}>20.340</h6>
                </div>
                <div className="myRow" style={{display: 'block'}}>
                  <h6 style={{ borderBottom: '1px solid black',paddingRight: 0 }}>0.600</h6>
                </div>
              </div>
              <div className="col-4" style={{ border: '1px solid black' }}>
                <div className="myRow" style={{display: 'block'}}>
                  <h6 style={{ textAlign: 'right', borderBottom: '1px solid black' }}>الاداء على القيمة المضافة</h6>
                </div>
                <div className="myRow" style={{display: 'block'}}>
                  <h6 style={{ textAlign: 'right', borderBottom: '1px solid black' }}>الخصم من المورد</h6>
                </div>
                <div className="myRow" style={{display: 'block'}}>
                  <h6 style={{ textAlign: 'right', borderBottom: '1px solid black'}}>الطابع الجبائي</h6>
                </div>
              </div>
              <div className="col-6" style={{ textAlign: 'right', border: '1px solid black' }}>
                <h6>: طريقة التسديد</h6>
                <div className="myRow">
                  <div className="col-9" style={{ paddingRight: 0 }}>شاك</div>
                  <div className="col-1">
                    <input type="checkbox" />
                  </div>
                </div>
                <div className="myRow">
                  <div className="col-9" style={{ paddingRight: 0 }}>كمبيالة</div>
                  <div className="col-1">
                    <input type="checkbox" />
                  </div>
                </div>
                <div className="myRow">
                  <div className="col-9" style={{ paddingRight: 0 }}>إيداع بنكي</div>
                  <div className="col-1">
                    <input type="checkbox" />
                  </div>
                </div>
                <div className="myRow">
                  <div className="col-9" style={{ paddingRight: 0 }}>خلافه</div>
                  <div className="col-1">
                    <input type="checkbox" />
                  </div>
                </div>
              </div>
            </div>

            <div className="myRow">
              <input className="col-2" id="txt" style={{ border: '1px solid black', textAlign: 'center',fontSize: '0.39cm',fontWeight: 500,lineHeight: 1.2 }} value={total} readOnly />
              <h6 className="col-4" style={{ border: '1px solid black',paddingRight: 0 }}>المبلغ الصافي</h6>
              <h6 className="col-5" style={{ border: '1px solid black',paddingRight: 0 }}></h6>
              <h6 className="col-1" style={{ border: '1px solid black',paddingRight: 0 }}></h6>
            </div>
          </div>
          <div className="mt-3" style={{ minHeight: '2.2cm' }}>
            <span>وقفت هذه الفاتورة على مبلغ قدره : </span><span id="demo"></span>
            <div>({total})</div>
          </div>
          <div style={{ textAlign: 'left' }} className="mx-5 mb-5">
            الإمضاء
          </div>
          <div className="pt-5">
            <hr />
          </div>
          <h6>CENTRE ELKHALIL N°124 SLIMANE KAHYA MANOUBA 2010-TUNISIE</h6>
          <h6>Tél:(+216)50409407 / (+216)36442043 Fax:(+216)71601434 Email: lawyer.caat@gmail.com</h6>
        </div>
      </div>
      <div className="mt-5" style={{ color: 'transparent' }}>_</div>
    </>
  );
}

export default PDFfacture;