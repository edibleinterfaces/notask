import makeDefaults from '../data/defaults'
import LocalStorage from 'Common/storage/LocalStorage'

const STORE_NAMESPACE = 'notask'  

class NoTaskLocalStorage extends LocalStorage {

  constructor() {
      super('notask', makeDefaults())
  }

  get data() {
      return super.data.apps[STORE_NAMESPACE]
  }

  set data(newStore) {
    const eiData = super.data
    eiData.apps[STORE_NAMESPACE] = newStore
    super.data = eiData
  }

  get stats() {
    return {
      characters: JSON.stringify(super.data).length
    }
  }

}

export default NoTaskLocalStorage
