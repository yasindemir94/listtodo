import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';

import C from '../controllers/AnasayfaC';

import Resim from './Components/Resim';

import telefonH from '../helper/telefonH';

import {anasayfaS as S} from './stil';

class Anasayfa extends React.Component {
  componentDidMount = C.cDMount;
  componentDidUpdate = C.cDUpdate;
  componentWillUnmount = C.cWUnmount;

  ustBolge() {
    return (
      <View
        style={[
          S.ustBolgeK,
          {display: C.splashAktif ? 'none' : 'flex'},
        ]}></View>
    );
  }

  render() {
    const sa = C.splashAktif;
    return (
      <View style={[S.K, sa && S.K2]}>
        <View style={!sa && S.logoK}>
          <Resim
            source={require('../../assets/logo.png')}
            width={telefonH.W(C.splashAktif ? 60 : 20)}
          />
        </View>
        {this.ustBolge()}
      </View>
    );
  }
}

export default observer(Anasayfa);
