import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerList: {
    width: 400,
    height: '44%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 3,
    elevation: 1,
  },
  containerElementInProgress: {
    height: 50,
    width: 320,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 2,
    marginVertical: 15,
    paddingLeft: 5,
    elevation: 2,
    backgroundColor: '#f2cc8f',
  },
  containerElement: {
    height: 50,
    width: 320,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 2,
    marginVertical: 15,
    elevation: 2,
    backgroundColor: '#81b29a',
    paddingHorizontal: 15,
  },
  text: {
    color: 'black',
  },
});
