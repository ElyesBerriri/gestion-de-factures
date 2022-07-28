import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";
import styles from '../styles'

const PDF = ({ doc }) => {
  if (doc.dossier_id !== undefined) {
    return (
      <>
        <Document>
          <Page size='A4' style={styles.page}>
            <View style={styles.container}>
              <View style={styles.viewt}>
                <Text style={styles.ht}>Dossier numéro : </Text><Text style={styles.pt}>{doc.dossier_id}</Text>
              </View>
              <View style={styles.view}>
                <Text style={styles.h}>Numéro d'affaire : </Text><Text style={styles.p}>{doc.numaff}</Text>
              </View>
              <View style={styles.view}>
                <Text style={styles.h}>Emplacement : </Text><Text style={styles.p}>{doc.emplacement}</Text>
              </View>
              <View style={styles.view}>
                <Text style={styles.h}>Client : </Text><Text style={styles.p}>{doc.client}</Text>
              </View>
              <View style={styles.view}>
                <Text style={styles.h}>Téléphone : </Text><Text style={styles.p}>{doc.tel}</Text>
              </View>
              <View style={styles.view}>
                <Text style={styles.h}>Mission : </Text><Text style={styles.p}>{doc.mission}</Text>
              </View>
              <View style={styles.view}>
                <Text style={styles.h}>Adversaires : </Text><Text style={styles.p}>{doc.adversaire}</Text>
              </View>
            </View>
          </Page>
        </Document>
      </>
    );
  } else {
    return (
      <Document>
        <Page size='A4' style={styles.page}>
          <View>
            <Text style={styles.h}>Vous n'avez pas choisi un dossier</Text>
          </View>
        </Page>
      </Document>
    )
  }
}

export default PDF;
