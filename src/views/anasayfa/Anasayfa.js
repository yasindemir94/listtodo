import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import Arkaplan from '../../components/Arkaplan';
import Footer from '../../components/Footer';

import C from '../../controllers/anasayfa/anasayfaC';
import splashC from '../../controllers/splashC';

import { anasayfaS as S } from '../stil';

import UstBolge from './UstBolge';
import Notlar from './Notlar';
import Splash from '../Splash';
import EkleNot from './EkleNot';


class Anasayfa extends React.Component {
    componentDidMount = C.cDMount;
    componentDidUpdate = C.cDUpdate;
    componentWillUnmount = C.cWUnmount;


    render() {
        console.count('Anasayfa');

        const durum = splashC.durum;

        return (
            <View style={[S.K, durum && S.K2]}>
                <Arkaplan source={require('../../../assets/back2.jpg')} opacity={durum === 0 ? 0 : 0.8} />

                <EkleNot />

                {
                    durum === 3 &&
                    <>
                        <UstBolge />
                        <Notlar />
                    </>
                }

                <Splash />

                {(splashC.durum !== 0 && splashC.durum !== 1 && splashC.durum !== 2) && <Footer />}
            </View>
        );
    }
}

export default observer(Anasayfa);