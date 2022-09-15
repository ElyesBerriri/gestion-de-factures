import React, { useState, useEffect } from "react";
import Pdf from "react-to-pdf";
import { useLocation } from 'react-router-dom';
import logo from '../logo_facture.png';
import tafqeet from './tafqeet';
const ref = React.createRef();

function PDFfacture() {

  const location = useLocation();
  const { date, facture, facturenow, datee, ea, cl, em, pa, ta, ki, kh, en } = location.state;
  var tot = 0;
  var total = (-parseFloat(kh || 0).toFixed(3) - (-parseFloat(ki || 0).toFixed(3) - parseFloat(ta || 0).toFixed(3))).toFixed(3);
  
  const main = () => {
    var fraction = document.getElementById("txt").value.split(".");
    var ch = "";
    if (fraction[0] == "0" && fraction[1] == "000") ch = "صفر";
    else if (fraction[0] == "0") ch = tafqeet(fraction[1]) + " مليم";
    else if (fraction[1] == "000") ch = tafqeet(fraction[0]) + " دينار ";
    else ch = tafqeet(fraction[0]) + " دينار " + "و " + tafqeet(fraction[1]) + " مليم";
    document.getElementById("demo").innerHTML = ch;
  }

  const updatefacture = async e => {
    e.preventDefault();
    try {
      const body = { facture,datee };
      await fetch(
        `/facture/update`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    main();
  }, []);

  return (
    <>
      <Pdf targetRef={ref} filename={`Facture_${facturenow}_${datee}`}>
        {({ toPdf }) => <button onClick={(e) => { toPdf();updatefacture(e) }} className="mt-5 mb-5">Télécharger le PDF</button>}
      </Pdf>
      <div className="pdf">
        <div className="border border-2 m-3" style={{ width: '21cm', height: '29.7cm' }} >
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
            </div>

            <div className="row">
              <div className="col-6">
                <h6>Email: {ea}</h6>
              </div>
              <div className="col" style={{ textAlign: 'right' }}>
                <h6> {date} تونس في</h6>
              </div>
            </div>

            <div style={{ margin: 'auto', marginTop: 0, padding: 0, width: '20cm', border: '0.1mm solid black' }}>
              <div className="myRow">
                <h6 className="col-12" style={{ border: '0.1mm solid black', paddingRight: 0 }}>مذكرة أتعاب محاماة فاتورة عدد {facturenow} / {datee}  </h6>
              </div>
              <div className="myRow">
                <div style={{ textAlign: 'right', border: '0.1mm solid black', width: '9.96cm' }}></div>
                <div style={{ textAlign: 'right', border: '0.1mm solid black', width: '9.99cm', minHeight: '4.5cm' }}>
                  <div className="myRow">
                    <div style={{ width: '7.94cm' }}><h6>{cl.raison}</h6></div>
                    <div style={{ width: '2cm' }}><h6>: الحريف</h6></div>
                  </div>
                  <div className="myRow">
                    <div style={{ width: '6.94cm' }}><h6>{cl.matricule}</h6></div>
                    <div style={{ width: '3cm' }}><h6>: المعرف الجبائي</h6></div>
                  </div>
                  <div className="myRow">
                    <div style={{ width: '7.94cm' }}><h6>{cl.adresse}</h6></div>
                    <div style={{ width: '2cm' }}><h6>: العنوان</h6></div>
                  </div>
                  <div className="myRow">
                    <div style={{ width: '7.94cm' }}><h6>{cl.tel}</h6></div>
                    <div style={{ width: '2cm' }}><h6>: الهاتف</h6></div>
                  </div>
                  <div className="myRow">
                    <div style={{ width: '7.94cm' }}><h6>{em}</h6></div>
                    <div style={{ width: '2cm' }}><h6>: الايمايل</h6></div>
                  </div>
                </div>
              </div>

              <div className="myRow">
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '3.56cm' }}>المبلغ خارج الضريبة</h6>
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '6.4cm' }}>المرجع</h6>
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '8.8cm' }}>الموضوع</h6>
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '1.19cm' }}>رقم</h6>
              </div>
              <div className="myRow" style={{ minHeight: '3.5cm' }}>
                <div style={{ border: '0.1mm solid black', width: '3.56cm' }}>
                  {en.map((en) => { tot -= -parseFloat(en.somme || 0).toFixed(3); return (<h6 style={{ paddingRight: 0 }}>{parseFloat(en.somme || 0).toFixed(3)}</h6>) })}
                </div>
                <div style={{ textAlign: 'right', border: '0.1mm solid black', width: '6.4cm' }}>
                  {en.map(en => (<h6>{en.resource}</h6>))}
                </div>
                <div style={{ textAlign: 'right', border: '0.1mm solid black', width: '8.8cm' }}>
                  {en.map(en => (<h6>{en.sujet}</h6>))}
                </div>
                <div style={{ textAlign: 'right', border: '0.1mm solid black', width: '1.19cm' }}>
                  {en.map(en => (<h6>{en.enquete_id}</h6>))}
                </div>
              </div>
              <div className="myRow" style={{ backgroundColor: '#BBA14A' }}>
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '3.56cm' }}>{parseFloat(tot).toFixed(3)}</h6>
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '6.4cm' }}>المجموع</h6>
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '8.8cm', color: 'transparent' }}>-</h6>
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '1.19cm', color: 'transparent' }}>-</h6>
              </div>
              <div className="myRow">
                <div style={{ border: '0.1mm solid black', width: '3.56cm' }}>
                  {(ki != 0) ?
                    <div className="myRow" style={{ display: 'block' }}>
                      <h6 style={{ borderBottom: '0.1mm solid black', paddingRight: 0 }}>{parseFloat(ki).toFixed(3)}</h6>
                    </div> : <></>}
                  {(kh != 0) ?
                    <div className="myRow" style={{ display: 'block' }}>
                      <h6 style={{ borderBottom: '0.1mm solid black', paddingRight: 0 }}>{parseFloat(kh).toFixed(3)}</h6>
                    </div> : <></>}
                  {(ta != 0) ?
                    <div className="myRow" style={{ display: 'block' }}>
                      <h6 style={{ borderBottom: '0.1mm solid black', paddingRight: 0 }}>{parseFloat(ta).toFixed(3)}</h6>
                    </div> : <></>}
                </div>
                <div style={{ border: '0.1mm solid black', width: '6.4cm' }}>
                  {(ki != 0) ?
                    <div className="myRow" style={{ display: 'block' }}>
                      <h6 style={{ textAlign: 'right', borderBottom: '0.1mm solid black', width: '6.4cm' }}>الاداء على القيمة المضافة</h6>
                    </div> : <></>}
                  {(kh != 0) ?
                    <div className="myRow" style={{ display: 'block' }}>
                      <h6 style={{ textAlign: 'right', borderBottom: '0.1mm solid black', width: '6.4cm' }}>الخصم من المورد</h6>
                    </div> : <></>}
                  {(ta != 0) ?
                    <div className="myRow" style={{ display: 'block' }}>
                      <h6 style={{ textAlign: 'right', borderBottom: '0.1mm solid black', width: '6.4cm' }}>الطابع الجبائي</h6>
                    </div> : <></>}
                </div>
                <div style={{ textAlign: 'right', border: '0.1mm solid black', width: '9.99cm' }}>
                  <h6>: طريقة التسديد</h6>
                  <div className="myRow">
                    <div className="col-9" style={{ paddingRight: 0 }}>شاك</div>
                    <div className="col-1">
                      <input type="checkbox" defaultChecked={(pa === "chek")} disabled />
                    </div>
                  </div>
                  <div className="myRow">
                    <div className="col-9" style={{ paddingRight: 0 }}>كمبيالة</div>
                    <div className="col-1">
                      <input type="checkbox" defaultChecked={(pa === "kembyela")} disabled />
                    </div>
                  </div>
                  <div className="myRow">
                    <div className="col-9" style={{ paddingRight: 0 }}>إيداع بنكي</div>
                    <div className="col-1">
                      <input type="checkbox" defaultChecked={(pa === "virement")} disabled />
                    </div>
                  </div>
                  <div className="myRow">
                    <div className="col-9" style={{ paddingRight: 0 }}>خلافه</div>
                    <div className="col-1">
                      <input type="checkbox" defaultChecked={(pa === "khlefa")} disabled />
                    </div>
                  </div>
                </div>
              </div>
              <div className="myRow" style={{ backgroundColor: '#BBA14A' }}>
                <input id="txt" style={{ border: '0.1mm solid black', textAlign: 'center', fontSize: '0.39cm', fontWeight: 500, lineHeight: 1.2, backgroundColor: '#BBA14A', width: '3.56cm' }} value={(total - (-parseFloat(tot).toFixed(3))).toFixed(3)} readOnly />
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '6.4cm' }}>المبلغ الصافي</h6>
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '8.8cm', color: 'transparent' }}>-</h6>
                <h6 style={{ border: '0.1mm solid black', paddingRight: 0, width: '1.19cm', color: 'transparent' }}>-</h6>
              </div>
            </div>
            <div className="mt-3" style={{ minHeight: '2.2cm' }}>
              <span>وقفت هذه الفاتورة على مبلغ قدره : </span><span id="demo"></span>
              <div>({(total - (-parseFloat(tot).toFixed(3))).toFixed(3)})</div>
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
    </>
  );
}

export default PDFfacture;