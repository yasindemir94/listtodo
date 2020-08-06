import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';
import notM from '../../models/notM';
import sid from 'shortid';
import uyelikM from '../../models/uyelikM';

class anasayfaC {
    cDMount = () => { //AÇILIŞTAN HEMEN SONRA
    }
    cDUpdate = () => { //UPDATE'DEN HEMEN SONRA
        //LayoutAnimation.easeInEaseOut();
    }
    cWUnmount = () => { //KAPANIŞTAN HEMEN NÖCE

    }

    notekleModal = false;

    baslik = '';
    notIcerik = '';


    olustur = async () => {
        console.time('NOTEKLE');

        const notid = `${sid()}${sid()}`;

        await notM.ekleNot(this.baslik, this.notIcerik, notid);
        await notM.eslestirKullaniciNot(uyelikM.uid, notid);
        console.timeEnd('NOTEKLE');

        console.count('NOTEKLE');
    }

    set = (k, v) => this[k] = v;
}

decorate(
    anasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        notekleModal: observable,
        baslik: observable,
        notIcerik: observable,

        olustur: action,

        set: action,
    }
);


export default new anasayfaC();