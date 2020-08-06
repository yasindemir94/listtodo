import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { observer } from 'mobx-react';
import { View as ViewA } from 'react-native-animatable';

import Ikon from '../../components/Ikon';

import tlfnH from '../../helper/tlfnH';

import C from '../../controllers/anasayfa/notlarC';

import { anasayfaNotS as S } from '../stil';

import temaH from '../../helper/temaH';
import notM from '../../models/notM';


class Notlar extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;

    not(d, i) {
        return (
            <ViewA
                key={i}
                animation={'bounceIn'}
                delay={350}
                style={[S.notK, { backgroundColor: temaH.notRenkleri[d.renk || 'r1'] }]}
            >

                <Text style={{ width: '100%' }}>{d.baslik}</Text>
                <Text style={{ width: '100%' }}>{d.notIcerik}</Text>

                {this.notButonlar(d, i)}
                {this.notRenkSec(d, i)}
            </ViewA>
        );
    }


    notButonlar(d, i) {
        const butonlarAcik = C.notButonlarAcik === i;

        return (
            <View style={[S.notButonlarK, { backgroundColor: temaH.notRenkleri[d.renk || 'r1'] }]}>
                <TouchableOpacity style={S.butonlarAcKapaButon} onPress={() => C.setNotButonlarAcik(i)}>
                    <Ikon
                        is={'AntDesign'} //ikonset
                        i={butonlarAcik ? 'right' : 'left'} //ikon name
                        c={'black'} //color
                        s={tlfnH.W(7)} //size
                    />
                </TouchableOpacity>

                <View style={[S.notButonlarAK, { display: butonlarAcik ? 'flex' : 'none' }]}>
                    {this.notButon()}
                    {this.notButon()}
                    {this.notButon()}
                    {this.notButon()}
                </View>
            </View>
        );
    }
    notButon() {
        return (
            <TouchableOpacity style={S.notButonK}>
                <Ikon
                    is={'AntDesign'} //ikonset
                    i={'delete'} //ikon name
                    c={temaH.renkler.r2} //color
                    s={tlfnH.W(7)} //size
                />
            </TouchableOpacity>
        );
    }

    notRenkSec(d, i) {
        const butonlarAcik = C.notButonlarAcik === i;

        const nr = temaH.notRenkleri;
        const nrDizi = Object.keys(nr)

        return (
            <View
                style={[
                    S.notRenkSecK,
                    {
                        width: butonlarAcik ? undefined : 0,
                        marginLeft: butonlarAcik ? undefined : -tlfnH.W(15),
                        backgroundColor: temaH.notRenkleri[d.renk]
                    }
                ]}
            >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {nrDizi.map((x, i) => d.renk === x ? null : <TouchableOpacity key={i} style={[S.notRenk, { backgroundColor: nr[x] }]} />)}
                </ScrollView>
            </View>
        );
    }


    render() {
        const notlar = notM.notlar;
        console.log(notlar);

        /*[ //SUNUCUDAN GELECEK
        {
            aciklama: 'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
            renk: 'r3'
        }
    ]*/

        return (
            <View style={S.notlarK}>
                <ScrollView>
                    <View style={{ height: tlfnH.H(3) }} />

                    {notlar.map((d, i) => this.not(d, i))}

                    <View style={{ height: tlfnH.H(3) }} />
                </ScrollView>
            </View>
        );
    }
}

export default observer(Notlar);