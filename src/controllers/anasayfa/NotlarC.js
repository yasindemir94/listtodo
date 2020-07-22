import {observable, action, decorate} from 'mobx';
import {LayoutAnimation} from 'react-native';

class notlarC {
  cDMount = async () => {};
  cDUpdate = () => {
    LayoutAnimation.easeInEaseOut();
  };
  cWUnmount = () => {};

  set = (k, v) => (this[k] = v);
}

decorate(notlarC, {
  set: action,
});

export default new notlarC();
