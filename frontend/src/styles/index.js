import { StyleSheet,Font } from '@react-pdf/renderer';
import font from './Tajawal-Regular.ttf';
import f1 from './Tajawal-Bold.ttf';
Font.register({
  family: 'Tajawal',
  fonts: [
    {src: font},
    {
      src: f1,
      fontStyle: 'bold'
    }
  ]});
export default StyleSheet.create({
  
  page: {
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    width: '86%',
    height: '88%',
    marginTop: '9%',
    marginLeft: '7%',
    border: '2 solid black'
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingLeft: 20
  },
  h: {
    fontSize: 15,
    textDecoration: 'underline',
    paddingBottom: 3,
    fontFamily: "Tajawal",
    fontStyle: 'bold'
  },
  p: {
    fontSize: 12,
    paddingLeft: 5,
    fontFamily: "Tajawal",
    width: '13cm'
  },
  viewt: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 60,
    paddingTop: 30,
    justifyContent: 'center'
  },
  ht: {
    fontSize: 30
  },
  pt: {
    fontSize: 28,
    paddingLeft: 10
  }
})