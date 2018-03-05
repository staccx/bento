import {observable, action} from 'mobx'

class UIStore {

  @observable selectedInstrument = 0

  @action setInstrument = (instrument) => this.selectedInstrument = instrument === this.selectedInstrument ? null : instrument
}

export default UIStore