import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';
import uyelikM from '../models/uyelikM';

class splashC {
    cDMount = async () => {
        //setTimeout(() => this.durum = 3, 2000);

        //const x = (a) => { alert(a) }
        //x('test');


        const sonuc = await uyelikM.oturumAc();
        console.log(sonuc);
    }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
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