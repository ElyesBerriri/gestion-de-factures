import React from "react";
import Pdf from "react-to-pdf";
import logo from '../logo_facture.png';
const ref = React.createRef();

function PDFfacture() {
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
                <h6>200.000</h6>
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
                <br/><br/><br/><br/>
              </div>
            </div>
            <div class="row">
              <div className="col-2" style={{ border: '1px solid black' }}>600.000</div>
              <div className="col-4" style={{ border: '1px solid black' }}>الموضوع</div>
              <div className="col-5" style={{ border: '1px solid black' }}></div>
              <div className="col-1" style={{ border: '1px solid black' }}></div>
            </div>
            <div class="row">
              <div class="col-2" style={{ border: '1px solid black' }}>
                <div class="row">
                  <div style={{ borderBottom: '1px solid black' }}>78.000</div>
                </div>
                <div class="row">
                  <div style={{ borderBottom: '1px solid black' }}>20.340</div>
                </div>
                <div class="row">
                  <div style={{ borderBottom: '1px solid black' }}>0.600</div>
                </div>
              </div>
              <div class="col-4" style={{ border: '1px solid black' }}>
                <div class="row">
                  <div style={{ textAlign: 'right', borderBottom: '1px solid black' }}>الاداء على القيمة المضافة</div>
                </div>
                <div class="row">
                  <div style={{ textAlign: 'right', borderBottom: '1px solid black' }}>الخصم من المورد</div>
                </div>
                <div class="row">
                  <div style={{ textAlign: 'right', borderBottom: '1px solid black' }}>الطابع الجبائي</div>
                </div>
              </div>
              <div className="col-6" style={{ textAlign: 'right', border: '1px solid black' }}>
                : طريقة التسديد
                <div class="row">
                  <div className="col-9" style={{ paddingRight: 0 }}>شاك</div>
                  <div className="col-1">
                    <input type="checkbox" />
                  </div>
                </div>
                <div class="row">
                  <div className="col-9" style={{ paddingRight: 0 }}>كمبيالة</div>
                  <div className="col-1">
                    <input type="checkbox" />
                  </div>
                </div>
                <div class="row">
                  <div className="col-9" style={{ paddingRight: 0 }}>إيداع بنكي</div>
                  <div className="col-1">
                    <input type="checkbox" />
                  </div>
                </div>
                <div class="row">
                  <div className="col-9" style={{ paddingRight: 0 }}>خلافه</div>
                  <div className="col-1">
                    <input type="checkbox" />
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div className="col-2" style={{ border: '1px solid black' }}>658.260</div>
              <div className="col-4" style={{ border: '1px solid black' }}>المبلغ الصافي</div>
              <div className="col-5" style={{ border: '1px solid black' }}></div>
              <div className="col-1" style={{ border: '1px solid black' }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5" style={{ color: 'transparent' }}>_</div>
    </>
  );
}

export default PDFfacture;