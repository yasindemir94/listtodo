import {observable, action, decorate} from 'mobx';
import {LayoutAnimation} from 'react-native';

class splashC {
  cDMount = () => {
    //AÇILIŞTAN HEMEN SONRA
    setTimeout(() => (this.splashAktif = false), 2000);
  };
  cDUpdate = () => {
    //UPDATE'DEN HEMEN SONRA
    LayoutAnimation.easeInEaseOut();
  };
  cWUnmount = () => {
    //KAPANIŞTAN HEMEN NÖCE
  };
  splashAktif = true; //true: splash göster, false: asnasayfa goster

  set = (k, v) => (this[k] = v);
}

decorate(splashC, {
  cDMount: action,
  cDUpdate: action,
  cWUnmount: action,

  splashAktif: observable,

  set: action,
});

export default new splashC();
