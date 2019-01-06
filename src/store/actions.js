import cloudProviders from 'Common/services/cloudStorage'

export default {
    authenticate({ commit }, cloudProvider) {
      console.log(cloudProvider)
        cloudProviders[cloudProvider].authenticate(({ signedIn, error }) => { 
            commit('updateSigninState', signedIn) 
        })
    },
    signIn({ commit }, cloudProvider) {
        cloudProviders[cloudProvider].signIn()
            .then(() => commit('updateSigninState', true),
                  () => commit('updateSigninState', false))

    },
    signOut({ commit }, cloudProvider) {
        cloudProviders[cloudProvider].signOut()
            .then(() => commit('updateSigninState', false),
                  () => commit('updateSigninState', true))
    },
    syncToCloud({ commit }, { content, cloudProvider, syncFileId }) {
        cloudProviders[cloudProvider].sync(content, syncFileId)
          .then(({ content, id }) => {
            commit('syncCloudData', { content, id }) 
          })
    }
}
