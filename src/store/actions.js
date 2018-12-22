import GoogleDrive from 'Common/services/GoogleDrive';
import LocalStorage from 'Common/storage/LocalStorage';

let storage = new LocalStorage()
let gDrive = new GoogleDrive();

export default {
    authenticate({ commit }) {
        gDrive.authenticate(({ signedIn, error }) => { 
            commit('updateSigninState', signedIn); 
        });
    },
    signIn({ commit }) {
        gDrive.signIn()
            .then(() => commit('updateSigninState', true),
                  () => commit('updateSigninState', false))

    },
    signOut({ commit }) {
        gDrive.signOut()
            .then(() => commit('updateSigninState', false),
                  () => commit('updateSigninState', true))
    },
    syncWithDrive({ commit }, { content }) {
        gDrive.sync(content).then(fileId => {
          const appData = storage.get('notask')
          appData.googleDrive.syncFile.id = fileId
          storage.set('notask', appData)
        })
    }
}
