import { observable, action, decorate } from 'mobx';
import auth_ from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import oturumC from '../controllers/oturumC';

const auth = auth_();
const db = database();

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


    eslestirKAUID = (ka, uid) => new Promise(resolve => {
        db.ref(`/KA-UID/${ka}`)
            .set(uid)
            .then(() => resolve(true))
            .catch(() => resolve(false));
    });


    guncelleKullaniciBilgi = (uid, veri) => new Promise(resolve => {
        if (!uid) { resolve(false); return; }

        db.ref(`/KULLANICILAR/${uid}`)
            .set(veri)
            .then(() => resolve(true))
            .catch(() => resolve(false));
    });

    getirKullaniciBilgi = (uid) => new Promise(resolve => {
        db.ref(`/KULLANICILAR/${uid}`)
            .once('value')
            .then(data => resolve(data.val()))
            .catch(() => resolve(false));
    });
}

decorate(
    fbH,
    {
        uyeOl: action,

        oturumAc: action,

        eslestirKAUID: action,
        guncelleKullaniciBilgi: action,
        getirKullaniciBilgi: action,
    }
);

export default new fbH();