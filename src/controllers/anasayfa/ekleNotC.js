import { observable, action, decorate } from 'mobx';
import notM from '../../models/notM';
import sid from 'shortid';
import ImagePicker from 'react-native-image-picker';
import { Alert } from 'react-native';

import uyelikM from '../../models/uyelikM';
import fbH from '../../helper/fbH';

class ekleNotC {
    notekleModal = false;

    baslik = '';
    notIcerik = '';
    resimler = [];

    notEkleModalKapat = () => {
        const kapat = () => {
            this.notekleModal = false;
            this.baslik = '';
            this.notIcerik = '';
            this.resimler = [];
        }
        if (this.baslik || this.notIcerik || this.resimler.length > 0) {
            Alert.alert(
                'Dikkat',
                'Yaptığınız değişiklikler kaybolacak emin misiniz?',
                [{ text: 'Hayır', onPress: null }, { text: 'Evet', onPress: kapat }]
            );
        }
        else kapat();
    }


    olustur = async () => {
        console.time('NOTEKLE');

        const notid = `${sid()}${sid()}`;

        await notM.ekleNot(this.baslik, this.notIcerik, notid);
        await notM.eslestirKullaniciNot(uyelikM.uid, notid);
        console.timeEnd('NOTEKLE');

        console.count('NOTEKLE');
    }


    ImagePicker = async () => {
        const options = {
            title: 'Bir görsel seçin...',
            cancelButtonTitle: 'İptal',
            takePhotoButtonTitle: 'Bir fotoğraf çek',
            chooseFromLibraryButtonTitle: 'Galeriden seç',
            chooseWhichLibraryTitle: 'Galeriden seç',
            mediaType: 'photo',
            storageOptions: { skipBackup: true, path: 'images' },

        };

        ImagePicker.showImagePicker(
            options,
            async res => {
                console.log('Response = ', res);

                if (res.didCancel) { console.log('User cancelled image picker'); }
                else if (res.error) { console.log('ImagePicker Error: ', res.error); }
                else if (res.customButton) { console.log('User tapped custom button: '); }
                else {
                    const x = await fbH.yukleDosya(`${sid()}_${res.fileName}`, res.path);

                    const tmp = this.resimler;
                    tmp.push(x);
                    this.resimler = tmp;
                }
            }
        );
    }


    set = (k, v) => this[k] = v;
}

decorate(
    ekleNotC,
    {
        notekleModal: observable,
        baslik: observable,
        notIcerik: observable,
        resimler: observable,

        notEkleModalKapat: action,

        olustur: action,

        ImagePicker: action,

        set: action,
    }
);


export default new ekleNotC();