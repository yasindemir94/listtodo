import { observable, action, decorate } from 'mobx';
import fbH from '../helper/fbH';
import oturumC from '../controllers/oturumC';
import splashC from '../controllers/splashC';


class uyelikM {
    uid = '';

    isim = '';
    email = '';


    uyeOl = async () => {
        const { email, sifre, isim, kullaniciAdi } = oturumC;

        try {
            const sonuc = await fbH.uyeOl(email, sifre);
            this.uid = sonuc.user.uid;

            const veri = { isim, email, kullaniciAdi, sifre };
            await fbH.guncelleKullaniciBilgi(this.uid, veri);
            await fbH.eslestirKAUID(kullaniciAdi, this.uid);

            oturumC.uyelikKapat();
            return { sonuc: true };
        }
        catch (e) { return { sonuc: false, hata: e }; }
    }


    oturumAc = async () => {
        const email = oturumC.email.indexOf('@') === -1 ? `${oturumC.email}@todolist.com` : oturumC.email;
        const sifre = oturumC.sifre;

        try {
            const sonuc = await fbH.oturumAc(email, sifre);
            this.uid = sonuc.user.uid;

            const kullaniciBilgiler = await fbH.getirKullaniciBilgi(this.uid);
            this.isim = kullaniciBilgiler.isim;
            this.email = kullaniciBilgiler.email;

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