import React from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { observer } from 'mobx-react';
import Modal from 'react-native-modal';

import C from '../../controllers/anasayfa/anasayfaC';
import tlfnH from '../../helper/tlfnH';

import { anasayfaS as S } from '../stil';
import Ikon from '../../components/Ikon';
import temaH from '../../helper/temaH';


class EkleNot extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    render() {
        console.count('EkleNot');

        return (
            <Modal backdropOpacity={0.5} isVisible={C.notekleModal}>
                <View style={[
                    S.notEkleModalK,
                    {
                        flex: tlfnH.klavye.durum ? 1 : undefined,
                        //backgroundColor: tlfnH.klavye.durum ? temaH.renkler.r1 : 'white',
                        margin: tlfnH.klavye.durum ? -22 : null,
                        marginBottom: tlfnH.ios ? tlfnH.klavye.h - tlfnH.sbhi() : undefined,
                        borderRadius: tlfnH.klavye.durum ? 0 : 10,
                    }]}
                >

                    <TouchableOpacity style={S.notEkleModalKapatB} onPress={() => C.set('notekleModal', false)}>
                        <Ikon is={'MaterialCommunityIcons'} i={'close'} c={temaH.renkler.r2} s={24} />
                    </TouchableOpacity>

                    <Text style={S.modalBaslik}>not Oluştur</Text>

                    <TextInput
                        style={S.baslikInput}
                        placeholder={'Başlık'}
                        maxLength={50}
                        value={C.baslik}
                        onChangeText={d => C.set('baslik', d)}
                    />
                    <View style={S.notInputK}>
                        <TextInput
                            style={S.notInput}
                            placeholder={'Notunuz'}
                            multiline
                            value={C.notIcerik}
                            onChangeText={d => C.set('notIcerik', d)}
                        />

                        <View style={S.butonlarK}>
                            <TouchableOpacity style={S.buton}>
                                <Ikon is={'MaterialCommunityIcons'} i={'react'} c={temaH.renkler.r2} s={24} />
                            </TouchableOpacity>

                            <TouchableOpacity style={S.buton}>
                                <Ikon is={'MaterialCommunityIcons'} i={'share-variant'} c={temaH.renkler.r2} s={24} />
                            </TouchableOpacity>

                            <TouchableOpacity style={S.buton}>
                                <Ikon is={'MaterialCommunityIcons'} i={'camera-plus'} c={temaH.renkler.r2} s={24} />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <TouchableOpacity style={S.olusturB} onPress={C.olustur}>
                        <Text style={S.olusturBY}>Oluştur</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

export default observer(EkleNot);