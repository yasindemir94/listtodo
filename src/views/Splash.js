import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';

import C from '../controllers/splashC';

import Resim from './Components/Resim';

import telefonH from '../helper/telefonH';

import {splashS as S} from './stil';

class Splash extends React.Component {
  componentDidMount = C.cDMount;
  componentDidUpdate = C.cDUpdate;
  componentWillUnmount = C.cWUnmount;

  render() {
    return (
      <View style={!C.splashAktif && S.K}>
        <Resim
          source={require('../../assets/logo.png')}
          width={telefonH.W(C.splashAktif ? 60 : 20)}
        />
      </View>
    );
  }
}

export default observer(Splash);
