import { observable, action, decorate } from 'mobx';
import { Dimensions, Platform } from 'react-native';

class tlfnH {
    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;

    //W(d) { return this.w * d / 100;  }
    W = d => this.w * d / 100;
    H = d => this.h * d / 100;



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

        android: observable,
        ios: observable,
    }
);


export default new tlfnH();