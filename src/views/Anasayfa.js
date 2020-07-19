import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {observer} from 'mobx-react';

import C from '../controllers/AnasayfaC';

import Resim from './Components/Resim';

import telefonH from '../helper/telefonH';

import {anasayfaS as S} from './stil';
import temaH from '../helper/temaH';

class Anasayfa extends React.Component {
  componentDidMount = C.cDMount;
  componentDidUpdate = C.cDUpdate;
  componentWillUnmount = C.cWUnmount;

  ustBolge() {
    return (
      <View style={[S.ustBolgeK, {display: C.splashAktif ? 'none' : 'flex'}]}>
        <Text style={S.bilgiY}>asdsdasdasdasd</Text>
        <Text style={S.bilgiY}>asdsdasdasdasd</Text>
        <Text style={S.bilgiY}>asdsdasdasdasd</Text>
      </View>
    );
  }

  notlar() {
    return (
      <View style={(S.notlarK, {display: C.splashAktif ? 'none' : 'flex'})}>
        {this.not()}
        {this.not()}
        {this.not()}
        {this.not()}
      </View>
    );
  }

  not() {
    return (
      <View style={S.notK}>
        <Text>NOT</Text>
      </View>
    );
  }

  splash() {
    return (
      <View style={!C.splashAktif && S.logoK}>
        <Resim
          source={require('../../assets/logo.png')}
          width={telefonH.W(C.splashAktif ? 60 : 20)}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={[S.K, C.splashAktif && S.K2]}>
        <StatusBar
          backgroundColor={C.splashAktif ? 'transparent' : temaH.renkler.r1}
          barStyle={'dark-content'}
        />

        {this.ustBolge()}

        {this.notlar()}

        {this.splash()}
      </View>
    );
  }
}

export default observer(Anasayfa);
