import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerElement: {
    height: 50,
    width: 320,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 2,
    marginVertical: 5,
    borderColor: '#C2BFBF',
    backgroundColor: '#35858B',
    paddingLeft: 5,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 200,
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: '#3d405b',
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 2,
    elevation: 2,
  },
  textElement: {
    color: '#3d405b',
  },
  textButton: {
    color: '#f4f1de',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    marginTop: '30%',
    marginHorizontal: '10%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    flexDirection: 'row',
    marginTop: 15,
  },
});
