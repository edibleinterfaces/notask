import store from '../store';
import creds from './creds.js';


function googleDrive() {

    
    const apiKey = creds.drive.apiKey;
    const clientId = creds.oauth.clientId;

    const scopes = 'https://www.googleapis.com/auth/drive';
    let auth2;

    /* AUTHENTICATION FUNCTIONS */

    function authenticate() {

        try {

            gapi.load('client:auth2', initAuth);

        } catch(e) {

            if (e.name === 'ReferenceError') {
                store.dispatch('UPDATE_SIGNIN_STATUS', false);
            }

        }

    }
    function initAuth() {

        gapi.client.setApiKey(apiKey);

        gapi.auth2.init({

            client_id: clientId,
            scope: scopes

        }).then(function () {

            auth2 = gapi.auth2.getAuthInstance();

            // Listen for sign-in state changes.
            auth2.isSignedIn.listen(updateSigninStatus);

            // Handle the initial sign-in state.
            updateSigninStatus(auth2.isSignedIn.get());

        });

    }
    function updateSigninStatus(isSignedIn) {

        store.dispatch('UPDATE_SIGNIN_STATUS', isSignedIn);

    }
    function handleAuthClick(event) {

        auth2.signIn();

    }
    function handleSignoutClick(event) {

        auth2.signOut();

    }

    /* FILE SYNC */

    function saveFile(file) {

        gapi.client.load('drive', 'v2', function() {

            _saveFile(file);

        });

    } 

    function _saveFile(fileData, callback) {

        const boundary = '-------314159265358979323846';
        const delimiter = "\r\n--" + boundary + "\r\n";
        const close_delim = "\r\n--" + boundary + "--";

        const reader = new FileReader();
        reader.readAsBinaryString(fileData);
        reader.onload = function(e) {

            const contentType = fileData.type || 'application/octet-stream';
            const metadata = {
                'title': fileData.name,
                'mimeType': contentType
            };

            const base64Data = btoa(reader.result);
            const multipartRequestBody =
                  delimiter +
                  'Content-Type: application/json\r\n\r\n' +
                  JSON.stringify(metadata) +
                  delimiter +
                  'Content-Type: ' + contentType + '\r\n' +
                  'Content-Transfer-Encoding: base64\r\n' +
                  '\r\n' +
                  base64Data +
                  close_delim;

            const request = gapi.client.request({

                'path': '/upload/drive/v2/files',
                'method': 'POST',
                'params': {'uploadType': 'multipart'},
                'headers': {
                    'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
                },
                'body': multipartRequestBody

            });

            if (!callback) {

                callback = function(err) {
                    if (err) {
                        console.warn(err);
                    } 
                };
                
            }

            request.execute(callback);
        };
    }

    return {
        authenticate,
        handleAuthClick,
        handleSignoutClick,
        saveFile
    };
}

export default new googleDrive();
