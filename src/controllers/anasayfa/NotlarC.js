import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class notlarC {
    cDMount = () => { }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => { }



    notButonlarAcik = -1; //butonların aktif olduüu notun indeksi (diğer indeksli notlar butonlar pasif)
    setNotButonlarAcik = i => {
        this.notButonlarAcik = this.notButonlarAcik === i ? -1 : i;
    }


    set = (k, v) => this[k] = v;
}

decorate(
    notlarC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        notButonlarAcik: observable,
        setNotButonlarAcik: action,


        set: action,
    }
);


export default new notlarC();