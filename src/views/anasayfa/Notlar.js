import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {observer} from 'mobx-react';
import {View as ViewA} from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';

import C from '../../controllers/anasayfa/NotlarC';

import Resim from '../Components/Resim';

import telefonH from '../../helper/telefonH';

import {anasayfaS as S} from '../stil';
import temaH from '../../helper/temaH';

class Notlar extends React.Component {
  componentDidMount = C.cDMount;
  componentDidUpdate = C.cDUpdate;
  componentWillUnmount = C.cWUnmount;

  not(d, i) {
    return (
      <ViewA style={[S.notK, {backgroundColor: temaH.notRenkleri[d.renk]}]}>
        <View style={S.AK}>
          <Resim
            style={S.notResim}
            source={{
              uri:
                'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
            }}
          />

          <Text style={S.notAciklamaY}>{d.aciklama}</Text>
        </View>
        {this.notButonlar(d, i)}
      </ViewA>
    );
  }

  notButonlar(d, i) {
    return (
      <View
        style={[S.notButonlarK, {backgroundColor: temaH.notRenkleri[d.renk]}]}>
        <TouchableOpacity
          style={S.notIkon}
          onPress={() => alert('test')}
          activeOpacity={0.2}>
          <AntDesign
            name={'delete'}
            color={temaH.renkler.r2}
            size={telefonH.W(5.5)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={S.notIkon}
          onPress={() => alert('test')}
          activeOpacity={0.2}>
          <AntDesign
            name={'delete'}
            color={temaH.renkler.r2}
            size={telefonH.W(5.5)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={S.notIkon}
          onPress={() => alert('test')}
          activeOpacity={0.2}>
          <AntDesign
            name={'delete'}
            color={temaH.renkler.r2}
            size={telefonH.W(5.5)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={S.notIkon}
          onPress={() => alert('test')}
          activeOpacity={0.2}>
          <AntDesign
            name={'delete'}
            color={temaH.renkler.r2}
            size={telefonH.W(5.5)}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const notlar = [
      //SUNUCUDAN GELECEK
      {
        aciklama:
          'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.sdfsdfsdf',
        gorseller: [
          'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
        ],
        renk: 'r3',
      },
      {
        aciklama:
          'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
        gorseller: [
          'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
          'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
          'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
          'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
        ],
        renk: 'r2',
      },
      {
        aciklama:
          'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
        renk: 'r8',
      },
      {
        aciklama:
          'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
        renk: 'r7',
      },
      {
        aciklama:
          'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
        renk: 'r5',
      },
      {
        aciklama:
          'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
        renk: 'r6',
      },
      {
        aciklama:
          'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
        renk: 'r4',
      },
      {
        aciklama:
          'Irure dolore voluptate voluptate dolor amet anim aliquip fugiat est Lorem in aliqua dolor.',
        renk: 'r1',
      },
    ];

    return (
      <View style={S.notlarK}>
        <FlatList
          data={notlar}
          extraData={notlar}
          renderItem={(d) => this.not(d.item, d.index)}
          //initialNumToRender={30}
          //keyExtractor={(d, i) => i.toString()}
          //initialScrollIndex={5}
          //ItemSeparatorComponent={() => <View style={{ backgroundColor: 'black', width: '75%', height: 2, alignSelf: 'center' }} />}
        />
      </View>
    );
  }
}

export default observer(Notlar);
