import {observable, decorate, action} from 'mobx';

class temaH {
  renkler = {
    r1: '#e89d43',
    r2: '#0d1030',
  };

  notRenkleri = {
    r1: '#eb4034',
    r2: '#ff7e75',
    r3: '#ffbc75',
    r4: '#ffff75',
    r5: '#d4edbb',
    r6: '#b9fa78',
    r7: '#4bebd3',
    r8: '#9b4beb',
  };

  set = (k, v) => (this[k] = v);
}

decorate(temaH, {
  renkler: observable,
  notRenkleri: observable,
  set: action,
});

export default new temaH();
