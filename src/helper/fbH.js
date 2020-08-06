import { observable, action, decorate } from 'mobx';
import auth_ from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import sid from 'shortid';

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
    eslestirKullaniciNot = (uid, notid) => new Promise(resolve => {
        db.ref(`/KULLANICI-NOT/${sid()}${sid()}`)
            .set({ uid, notid })
            .then(() => resolve(true))
            .catch(() => resolve(false));
    });


    ekleNot = (notVeri, notid) => new Promise(resolve => {
        db.ref(`/NOTLAR/${notid}`)
            .set(notVeri)
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
    getirKullaniciNotid = (uid) => new Promise(resolve => {
        db.ref(`/KULLANICI-NOT/`)
            .orderByChild('uid')
            .equalTo(uid)
            .once('value')
            .then(data => resolve(data.val()))
            .catch(() => resolve(false));
    });
    getirNot = (notid) => new Promise(resolve => {
        db.ref(`/NOTLAR/${notid}`)
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
        eslestirKullaniciNot: action,


        ekleNot: action,


        guncelleKullaniciBilgi: action,


        getirKullaniciBilgi: action,
        getirKullaniciNotid: action,
        getirNot: action,
    }
);

export default new fbH();