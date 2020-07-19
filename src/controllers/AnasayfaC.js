import {observable, decorate, action} from 'mobx';
import {LayoutAnimation} from 'react-native';

class AnasayfaC {
  cDMount = () => {
    setTimeout(() => (this.splashAktif = false), 1000);
  };
  cDUpdate = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        1000,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.scaleXY,
      ),
    );
  };
  cWUnmount = () => {};

  notButonlarKH = 0;

  splashAktif = true;

  set = (k, v) => (this[k] = v);
}

decorate(AnasayfaC, {
  cDMount: action,
  cDUpdate: action,
  cWUnmount: action,

  notButonlarKH: observable,

  splashAktif: observable,

  set: action,
});

export default new AnasayfaC();
