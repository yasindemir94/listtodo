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

  splashAktif = true;
}

decorate(AnasayfaC, {
  cDMount: action,
  cDUpdate: action,
  cWUnmount: action,

  splashAktif: observable,
});

export default new AnasayfaC();
