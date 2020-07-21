import {observable, decorate, action} from 'mobx';
import {LayoutAnimation} from 'react-native';

class AnasayfaC {
  cDMount = async () => {
    setTimeout(() => (this.splashAktif = false), 1000);

    console.log('bir');
    await this.Bekle(1500);
    console.log('iki');
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

  Bekle = (delay = 1000) =>
    new Promise((resolve) => {
      setTimeout(() => resolve('ticari bekleme yapma'), delay);
    });

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
