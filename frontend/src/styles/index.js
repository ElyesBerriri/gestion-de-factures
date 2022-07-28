import { StyleSheet } from '@react-pdf/renderer'

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
    fontSize: 20,
    borderBottom: '2 solid black',
    paddingBottom: 3
  },
  p: {
    fontSize: 18,
    paddingLeft: 5
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