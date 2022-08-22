import React from "react";

import { Col, Row, Table } from 'antd';
import 'antd/dist/antd.css';
import Pdf from "react-to-pdf";
import { useLocation } from 'react-router-dom'
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
        <div ref={ref}>
          <Row style={{ marginTop: 20, textAlign: 'left' }}>
            <Col span={14} offset={10}>
              <table>
                <tr>
                  <th>STE BELHASSEN ET CIE D'Avocats / S.U.A.R.L</th>
                </tr>
                <tr>
                  <th>CAAT(Consortium des avocats d'affaires tunisiens)</th>
                </tr>
                <tr>
                  <th>MF N°: 1645590/B/A/M</th>
                </tr>
                <tr>
                  <th>CENTRE ELKHALIL N°124 SLIMANE KAHYA MANOUBA 2010-TUNISIE</th>
                </tr>
                <tr>
                  <th>Domiciliation Bancaire : BNA -Agence Manouba-</th>
                </tr>
                <tr>
                  <th>RIB N°: 03034 1640115004181 58</th>
                </tr>
                <tr>
                  <th>IBAN N° TN9 0303 4164 0115 0041 8158</th>
                </tr>
              </table>
            </Col>
          </Row>

          <Row>
            <Col span={8} offset={2}>
              <table>
                <tr>
                  <th>Email: lawyer.caat@gmail.com</th>
                </tr>
              </table>
            </Col>
            <Col span={5} offset={9}>
              <table>
                <tr>
                  <th>2022/02/03 تونس في</th>
                </tr>
              </table>
            </Col>
          </Row>

          <Row style={{ marginTop: 48 }}>    {/*style={{border: '2px solid black'}}*/}
            <Table style={{ width: '100%' }} dataSource={[{
              id: 1,
              name: 'Accommodation (Single Occupancy)',
              description: 'Accommodation',
              price: 1599,
              quantity: 1
            },
            {
              id: 2,
              name: 'Hello World',
              description: 'Facture',
              price: 17,
              quantity: 5
            }]}
              pagination={false}
            >
              <Table.Column title="Items" dataIndex='name' />
              <Table.Column title="Description" dataIndex='description' />
              <Table.Column title="Quantity" dataIndex='quantity' />
              <Table.Column title="Price" dataIndex='price' />
              <Table.Column title="Line Total" />
            </Table>
          </Row>
        </div>
      </div>
      <div className="mt-5" style={{color: 'transparent'}}>_</div>
    </>
  );
}

export default Facture;
