import { observable, action, decorate } from 'mobx';
import { LayoutAnimation, Alert } from 'react-native';
import splashC from './splashC';
import uyelikM from '../models/uyelikM';
import tlfnH from '../helper/tlfnH';

class oturumC {
    cDMount = async () => { }
    cDUpdate = () => { LayoutAnimation.easeInEaseOut(); }
    cWUnmount = () => { }

    uyeOlButon = () => { splashC.set('durum', splashC.durum === 1 ? 2 : 1); }


    kullanicigiris = '';
    isim = '';
    sifre = '';
    sifreTekrar = '';


    loading = false;
    OTURUM = async () => {
        this.loading = true;

        await tlfnH.sleep();

        if (splashC.durum === 1) await this.oturumAc();
        else if (splashC.durum === 2) {
            const eslesme = this.sifre === this.sifreTekrar;
            const boyut = this.sifre.length === 8;

            if (!eslesme || !boyut) {
                Alert.alert(
                    'Hata',
                    `Şifrenizi kontrol ediniz.${!eslesme ? ' Girdiğiniz şifreler eşleşmiyor' : ''}${!boyut ? ' Şifreniz 8 karakterli olmalıdır' : ''}`
                );

                return;
            }
            await this.uyeOl();
        }

        this.loading = false;
    }
    uyeOl = async () => {
        const sonuc = await uyelikM.uyeOl();

        if (sonuc) {
            alert('OKEY');
        }
        else {
            alert('HATA');
        }
    }
    oturumAc = () => {

    }


    set = (k, v) => this[k] = v;
}

decorate(
    oturumC,
    {
        cDMount: action,
        cDUpdate: action,
        cWUnmount: action,

        uyeOlButon: action,

        kullanicigiris: observable,
        isim: observable,
        sifre: observable,
        sifreTekrar: observable,


        loading: observable,
        OTURUM: action,
        oturumAc: action,
        uyeOl: action,

        set: action,
    }
);


export default new oturumC();