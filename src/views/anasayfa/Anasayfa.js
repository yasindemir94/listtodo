import React from 'react';
import {View, Text, StatusBar, TouchableOpacity, FlatList} from 'react-native';
import {observer} from 'mobx-react';
import {View as ViewA} from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';

import C from '../../controllers/anasayfa/AnasayfaC';

import Resim from '../Components/Resim';

import telefonH from '../../helper/telefonH';

import {anasayfaS as S} from '../stil';
import temaH from '../../helper/temaH';
import Splash from '../Splash';
import UstBolge from './UstBolge';
import Notlar from './Notlar';

class Anasayfa extends React.Component {
  componentDidMount = C.cDMount;
  componentDidUpdate = C.cDUpdate;
  componentWillUnmount = C.cWUnmount;

  render() {
    return (
      <View style={[S.K, C.splashAktif && S.K2]}>
        <StatusBar
          backgroundColor={C.splashAktif ? 'transparent' : temaH.renkler.r1}
          barStyle={'dark-content'}
        />

        <UstBolge />

        {!C.splashAktif && <Notlar />}

        <Splash />
      </View>
    );
  }
}

export default observer(Anasayfa);
