import { observable, action, decorate } from 'mobx';
import fbH from '../helper/fbH';


class uyelikM {
    uyeOl = async () => {
        const ka = 'gungorn@outlook.com'; //controller dan çekilecek
        const sifre = '12345678';

        try {
            const sonuc = await fbH.uyeOl(ka, sifre);
            console.log(sonuc)

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