import {observable, decorate, action} from 'mobx';

class temaH {
  renkler = {
    r1: '#e89d43',
    r2: '#0d1030',
  };
  set = (k, v) => (this[k] = v);
}

decorate(temaH, {
  set: action,
});

export default new temaH();
