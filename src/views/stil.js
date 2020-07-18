import {StyleSheet} from 'react-native';
import telefonH from '../helper/telefonH';

//K:container
//AK:subcontainer
//B:button
//BY:buttontext

export const anasayfaS = StyleSheet.create({
  K: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
  K2: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoK: {
    position: 'absolute',
    left: telefonH.W(2),
    top: telefonH.H(2),
  },

  ustBolgeK: {
    borderWidth: 1,
    height: 100,
    width: telefonH.w,
  },
});
