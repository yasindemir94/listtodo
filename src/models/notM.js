import { observable, action, decorate } from 'mobx';

import fbH from '../helper/fbH';
import uyelikM from './uyelikM';

class notM {
    notlar = []; //OTURUM AÇAN KULLANICIYA AİT NOTLAR

    ekleNot = async (baslik, notIcerik, notid) => {
        try {
            const sonuc = await fbH.ekleNot({ baslik, notIcerik }, notid);
            return { sonuc: true };
        }
        catch (e) { return { sonuc: false, hata: e }; }
    }

    eslestirKullaniciNot = async (uid, notid) => {
        try {
            const sonuc = await fbH.eslestirKullaniciNot(uid, notid);

            return { sonuc: true };
        }
        catch (e) { return { sonuc: false, hata: e }; }
    }


    getirNotlar = async () => {
        try {
            const notidArray = Object.values(await this.getirKullaniciNotid(uyelikM.uid));
            const notlar = [];

            for (let i = 0; i < notidArray.length; i++) {
                const notid = notidArray[i].notid;
                const not = await this.getirNot(notid);
                notlar.push({ notid, ...not });
            }

            this.notlar = notlar;

            return notlar;
        }
        catch (e) { }
    }
    getirKullaniciNotid = async (uid) => {
        try {
            const sonuc = await fbH.getirKullaniciNotid(uid);

            return sonuc;
        }
        catch (e) { return { sonuc: false, hata: e }; }
    }
    getirNot = async (notid) => {
        try {
            const sonuc = await fbH.getirNot(notid);

            return sonuc;
        }
        catch (e) { return { sonuc: false, hata: e }; }
    }
}

decorate(
    notM,
    {
        notlar: observable,


        ekleNot: action,

        eslestirKullaniciNot: action,

        getirNotlar: action,
        getirKullaniciNotid: action,
        getirNot: action
    }
);

export default new notM();