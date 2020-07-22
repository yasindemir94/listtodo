import { observable, action, decorate } from 'mobx';
import { LayoutAnimation } from 'react-native';

class ustBolgeC {
    cDMount = () => { }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => { }


    set = (k, v) => this[k] = v;
}

decorate(
    ustBolgeC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        set: action,
    }
);


export default new ustBolgeC();