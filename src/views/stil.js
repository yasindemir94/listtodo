import {StyleSheet} from 'react-native';
import telefonH from '../helper/telefonH';
import temaH from '../helper/temaH';

//K:container
//AK:subcontainer
//B:button
//BY:buttontext

const W = telefonH.W;
const H = telefonH.H;

export const anasayfaS = StyleSheet.create({
  K: {
    flex: 1,
  },
  K2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  AK: {
    flexDirection: 'row',
  },

  ustBolgeK: {
    paddingLeft: W(20) + H(2),
    minHeight: W(20) + H(4),
    justifyContent: 'center',
    backgroundColor: temaH.renkler.r1,
    //margin: W(2),
    //borderRadius: W(2),
  },
  bilgiY: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'right',
    paddingRight: W(3),
    color: temaH.renkler.r2,
  },

  notlarK: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
  notK: {
    backgroundColor: temaH.renkler.r1,
    marginTop: H(1.2),
    marginBottom: H(1.2),
    padding: W(2),
  },
  notAciklamaY: {
    fontWeight: 'bold',
    color: temaH.renkler.r2,
    flex: 1,
    paddingLeft: W(3),
    textAlignVertical: 'center',
  },
  notResim: {borderRadius: 3},
  notButonlarK: {
    borderBottomWidth: 0,
    position: 'absolute',
    bottom: -10,
    right: 10,
    borderRadius: 3,
    backgroundColor: temaH.renkler.r1,
    flexDirection: 'row',
    paddingBottom: 3,
  },
  notIkon: {
    marginLeft: 3,
    marginRight: 3,
  },
});
export const splashS = StyleSheet.create({
  K: {
    position: 'absolute',
    left: W(4),
    top: H(2),
  },
});
