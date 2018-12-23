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
        // if we're logged in:
        //    check local storage for sync file id  
        //    if exists:
        //      try to read/parse file
        //    if not, create it with the current local storage

        // use local storage data

        gDrive.sync(content).then(syncFile => {
          if (syncFile) 
            commit('updateSyncFileId', { id: syncFile.id })
        })
    }
}
