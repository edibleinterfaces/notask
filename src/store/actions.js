import GoogleDrive from 'Common/services/GoogleDrive';

let gDrive = new GoogleDrive();

export default {
    authenticate({ commit }) {
        gDrive.authenticate(({signedIn, error }) => { 
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

    }
}
