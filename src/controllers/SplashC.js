import { observable, action, decorate } from 'mobx';
import { LayoutAnimation, Keyboard } from 'react-native';
import uyelikM from '../models/uyelikM';
import tlfnH from '../helper/tlfnH';
import strgH from '../helper/strgH';
import oturumC from './oturumC';

class splashC {
    cDMount = async () => {
        Keyboard.addListener('keyboardDidShow', tlfnH.klavyeAcildi);
        Keyboard.addListener('keyboardDidHide', tlfnH.klavyeKapandi);


        const oturumBilgi = await strgH.getirOturumBilgileri();

        let otomatikOturum = false;

        if (oturumBilgi && oturumBilgi.oturumDurumu === 'acik') {
            oturumC.set('email', oturumBilgi.email);
            oturumC.set('sifre', oturumBilgi.sifre);

            otomatikOturum = await oturumC.oturumAc();
        }

        if (!otomatikOturum) {
            setTimeout(() => this.durum = 1, 1000);
        }
    }
    cDUpdate = () => {
        LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { }



    durum = 0; //0: splash, 1: oturumaç, 2: üyeol, 3:anasayfa


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