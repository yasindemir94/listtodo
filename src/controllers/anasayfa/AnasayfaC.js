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
    set = (k, v) => this[k] = v;
}

decorate(
    anasayfaC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        set: action,
    }
);


export default new anasayfaC();