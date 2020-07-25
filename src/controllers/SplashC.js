import { observable, action, decorate } from 'mobx';
import { LayoutAnimation, Keyboard } from 'react-native';
import uyelikM from '../models/uyelikM';
import tlfnH from '../helper/tlfnH';

class splashC {
    cDMount = async () => {
        Keyboard.addListener('keyboardDidShow', tlfnH.klavyeAcildi);
        Keyboard.addListener('keyboardDidHide', tlfnH.klavyeKapandi);

        setTimeout(() => this.durum = 1, 2000);

        //const x = (a) => { alert(a) }
        //x('test');


        //const sonuc = await uyelikM.oturumAc();
        //console.log(sonuc);
    }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => { }



    durum = 1; //0: splash, 1: oturumaç, 2: üyeol, 3:anasayfa


    set = (k, v) => this[k] = v;
}

decorate(
    splashC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        durum: observable,

        set: action,
    }
);


export default new splashC();