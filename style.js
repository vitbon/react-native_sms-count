import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  scrollView: {},
  engine: {
    position: 'absolute',
    right: 0,
  },
  main: {
    fontSize: 20,
  },
  sectionContainer: {
    marginTop: 32,
    marginHorizontal: 20,
    minWidth: '90%',
    backgroundColor: 'white',
  },
  calcButton: {
    paddingHorizontal: 24,
  },
  symbolWrapper: {
    marginVertical: 28,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  textInput: {
    fontSize: 20,
    height: 163,
    padding: 10,
    textAlignVertical: 'top',
    borderColor: 'gray',
    borderWidth: 1,
  },
  charsInput: {
    fontSize: 35,
    backgroundColor: 'white',
    height: 60,
    width: 90,
    padding: 10,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
  symbols: {
    fontSize: 25,
    marginHorizontal: 15,
    marginTop: 5,
  },
  button: {
    height: 67,
    marginHorizontal: 24,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  buttonTxt: {
    fontSize: 21,
    marginTop: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  calcSMS: {
    fontSize: 25,
    marginTop: 25,
    textAlign: 'center',
  },
  bigSMS: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  errorSMS: {
    fontSize: 25,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
