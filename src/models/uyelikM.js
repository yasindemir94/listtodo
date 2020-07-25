import { observable, action, decorate } from 'mobx';
import fbH from '../helper/fbH';
import oturumC from '../controllers/oturumC';


class uyelikM {
    uyeOl = async () => {
        const kullanicigiris = oturumC.kullanicigiris.indexOf('@') === -1 ? `${oturumC.kullanicigiris}@todolist.com` : oturumC.kullanicigiris;
        const sifre = oturumC.sifre;

        try {
            const sonuc = await fbH.uyeOl(kullanicigiris, sifre);
            console.log(sonuc);

            return true;
        }
        catch (e) {
            console.log(e);

            return false;
        }
    }


    oturumAc = async () => {
        const ka = 'gungorn@outlook.com'; //controller dan çekilecek
        const sifre = '12345678';

        try {
            const sonuc = await fbH.oturumAc(ka, sifre);
            console.log(sonuc);

            return true;
        }
        catch (e) {
            console.log(e);

            return false;
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