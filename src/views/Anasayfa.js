import React from 'react';
import {View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import {observer} from 'mobx-react';
import {View as ViewA} from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
      <View
        style={(
          S.notlarK,
          //{ display: C.splashAktif ? 'none' : 'flex' }
        )}>
        {this.not()}
        {this.not()}
        {this.not()}
        {this.not()}
      </View>
    );
  }

  not() {

    const resimler = [
            'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
            'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
            'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
            'https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg',
        ];

    const tekResim = resimler.length === 1;

    return (
      <ViewA animation={'bounceInRight'} delay={250} style={[S.notK, /*{ paddingBottom: C.notButonlarKH }*/]}>
        
        <View>
            <Resim
                    style={S.notResim}
                    source={{ uri: resimler[0] }}
            />
            
            <Text style={S.notAciklamaY}>Lorem ipsum dolar sit amet Lorem ipsum dolar sit amet Lorem ipsum dolar sit amet Lorem</Text>
        </View>
        
            <View
                    style={S.notButonlarK}
                //onLayout={d => C.notButonlarKH === 0 && C.set('notButonlarKH', d.nativeEvent.layout.height / 2.2)}
                >
                    <TouchableOpacity style={S.notIkon} onPress={() => alert('test')} activeOpacity={0.2}>
                        <AntDesign name={'delete'} color={temaH.renkler.r2} size={tlfnH.W(5.5)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={S.notIkon}>
                        <AntDesign name={'delete'} color={temaH.renkler.r2} size={tlfnH.W(5.5)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={S.notIkon}>
                        <AntDesign name={'delete'} color={temaH.renkler.r2} size={tlfnH.W(5.5)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={S.notIkon}>
                        <AntDesign name={'delete'} color={temaH.renkler.r2} size={tlfnH.W(5.5)} />
                    </TouchableOpacity>
                </View>
            
      </ViewA>
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

        {!C.splashAktif && this.notlar()}

        {this.splash()}
      </View>
    );
  }
}

export default observer(Anasayfa);
