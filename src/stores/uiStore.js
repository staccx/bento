import {observable, action} from 'mobx'

class UIStore {

  @observable selectedInstrument = 0

  @action setInstrument = (instrument) => this.selectedInstrument = instrument
}

export default UIStore