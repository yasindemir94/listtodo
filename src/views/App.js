import React from 'react';
import {View, StatusBar} from 'react-native';

import database from '@react-native-firebase/database';
const reference = database().ref('/users/123');

class App extends React.Component {
  componentDidMount() {
    const db = database();
    const ref = db.ref('/NOTLAR/KULLANICIID/');

    const islem = ref.set({
      test1: 123,
      test2: 'yasin',
      test3: true,
      test4: null,
      test5: false,
      test6: undefined,
    });

    islem
      .then((d) => console.log({sonuc: true, data: d}))
      .catch((e) => console.log({sonuc: true, error: e}));
  }

  render() {
    return <View style={{flex: 1}}></View>;
  }
}
export default App;
