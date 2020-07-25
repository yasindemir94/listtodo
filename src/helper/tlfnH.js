import { observable, action, decorate } from 'mobx';
import { Dimensions, Platform } from 'react-native';

class tlfnH {
    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;

    //W(d) { return this.w * d / 100;  }
    W = d => this.w * d / 100;
    H = d => this.h * d / 100;


    klavye = { durum: false, h: 0 };
    klavyeAcildi = d => this.klavye = { durum: true, h: d.endCoordinates.height };
    klavyeKapandi = d => this.klavye = { durum: false, h: 0 };


    sleep = (d = 1000) => new Promise(resolve => setTimeout(() => resolve(), d));


    android = Platform.OS === 'android';
    ios = Platform.OS === 'ios';
}

decorate(
    tlfnH,
    {
        w: observable,
        h: observable,

        W: action,
        H: action,


        klavye: observable,
        klavyeAcildi: action,
        klavyeKapandi: action,


        sleep: action,

        android: observable,
        ios: observable,
    }
);


export default new tlfnH();