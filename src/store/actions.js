import LocalStorage from 'Common/storage/LocalStorage'
import cloudProviders from 'Common/services/cloudStorage'

let storage = new LocalStorage()

export default {
    authenticate({ commit }, { cloudProvider }) {
        cloudProvider.authenticate(({ signedIn, error }) => { 
            commit('updateSigninState', signedIn) 
        })
    },
    signIn({ commit }, { cloudProvider}) {
        cloudProvider.signIn()
            .then(() => commit('updateSigninState', true),
                  () => commit('updateSigninState', false))

    },
    signOut({ commit }, { cloudProvider }) {
        cloudProvider.gDrive.signOut()
            .then(() => commit('updateSigninState', false),
                  () => commit('updateSigninState', true))
    },
    syncToCloud({ commit }, { content, cloudProvider, syncFileId }) {
        cloudProvider.sync(content, syncFileId)
          .then(({ content, id }) => {
            commit('syncCloudData', { content, id }) 
          })
    }
}
