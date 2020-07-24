import { observable, action, decorate } from 'mobx';
import auth_ from '@react-native-firebase/auth';

const auth = auth_();

class fbH {
    uyeOl = (ka, sifre) => new Promise((resolve, reject) => {
        auth.createUserWithEmailAndPassword(ka, sifre)
            .then(d => resolve(d))
            .catch(e => reject(e));
    });

    oturumAc = (ka, sifre) => new Promise((resolve, reject) => {
        auth.signInWithEmailAndPassword(ka, sifre)
            .then(d => resolve(d))
            .catch(e => reject(e));
    });
}

decorate(
    fbH,
    {
        uyeOl: action,

        oturumAc: action,
    }
);

export default new fbH();