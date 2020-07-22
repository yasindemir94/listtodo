import {observable, decorate, action} from 'mobx';
import {LayoutAnimation} from 'react-native';

class AnasayfaC {
  cDMount = async () => {};
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

  set = (k, v) => (this[k] = v);
}

decorate(AnasayfaC, {
  cDMount: action,
  cDUpdate: action,
  cWUnmount: action,

  splashAktif: observable,

  set: action,
});

export default new AnasayfaC();
