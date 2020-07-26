import { observable, action, decorate } from 'mobx';
import fbH from '../helper/fbH';
import oturumC from '../controllers/oturumC';
import splashC from '../controllers/splashC';


class uyelikM {
    uid = '';

    isim = '';
    kullaniciGiris = '';


    uyeOl = async () => {
        const kullaniciGiris = oturumC.kullaniciGiris.indexOf('@') === -1 ? `${oturumC.kullaniciGiris}@todolist.com` : oturumC.kullaniciGiris;
        const sifre = oturumC.sifre;

        try {
            const sonuc = await fbH.uyeOl(kullaniciGiris, sifre);
            this.uid = sonuc.user.uid;

            const veri = {
                isim: oturumC.isim,
                kullaniciGiris: oturumC.kullaniciGiris,
                nick: oturumC.kullaniciGiris.split('@')[0],
                sifre: oturumC.sifre,
            };
            await fbH.guncelleKullaniciBilgi(this.uid, veri);

            oturumC.uyelikKapat();
            return { sonuc: true };
        }
        catch (e) { return { sonuc: false, hata: e }; }
    }


    oturumAc = async () => {
        const kullaniciGiris = oturumC.kullaniciGiris.indexOf('@') === -1 ? `${oturumC.kullaniciGiris}@todolist.com` : oturumC.kullaniciGiris;
        const sifre = oturumC.sifre;

        try {
            const sonuc = await fbH.oturumAc(kullaniciGiris, sifre);
            this.uid = sonuc.user.uid;

            const kullaniciBilgiler = await fbH.getirKullaniciBilgi(this.uid);
            this.isim = kullaniciBilgiler.isim;
            this.kullaniciGiris = kullaniciBilgiler.kullaniciGiris;

            return { sonuc: true };
        }
        catch (e) {
            return { sonuc: false, hata: e };
        }
    }
}

decorate(
    uyelikM,
    {
        uyeOl: action,

        oturumAc: action
    }
);

export default new uyelikM();