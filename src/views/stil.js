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

  logoK: {
    position: 'absolute',
    left: W(4),
    top: H(2),
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
    marginTop: H(1),
    marginBottom: H(1),
  },
  notK: {
    backgroundColor: temaH.renkler.r1,
    marginTop: H(0.8),
    marginBottom: H(0.8),
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
  notResimCoklu: {
    borderRadius: 3,
    marginRight: 10,
  },
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
