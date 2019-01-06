<style lang="scss">
    .storage-view-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        .storage-view {
            height: 90%;
            width: 100%;
            background: aquamarine;
            ul.storage-options {
                margin: 0;
                padding: 0;
                height: 100%;
                background: white;
            }
            li.storage-option {
                background: white !important;  /* fixme: insert macro for themed bg color */
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 5%;
                border-bottom: 1px solid lightgray;
                background: white;
                .setting-slide-icon {
                    position: absolute;
                    top: calc(50% - 2vh);
                    right: 5%;
                    font-size: 4vh;
                    color: lightgray;
                } 
                .selected-storage-method {
                  display: inline-flex;
                    height: 100%;
                    width: 100%;
                    align-content: center;
                      justify-content: center;
                }
                .slide-select-container {
                    border: 1px solid black;
                    width: 40%;
                }
            }
        }
    }
</style>

<template>
    <div class="storage-view-container">
        <div class="storage-view">
            <ul class="storage-options">
              <li class="storage-option">
                <ei-slide-select 
                  :options="storageMethods" 
                  :selected="selectedStorageMethod" 
                  v-on:slide-select-updated="setCloudStorageMethod">
                  <span slot="handle">{{ selectedStorageMethod }}</span>
                </ei-slide-select>
              </li>
              <li @click="resetStore" class="storage-option">Reset storage</li>
              <li @click="resetTasklists" class="storage-option">Clear Tasklists</li>
              <li class="storage-option">Import</li>
              <li @click="exportStore" class="storage-option">Export</li>
              <li v-if="signedIntoDrive" v-on:click="signOutOfGoogleDrive" class="storage-option">Sign out of Google Drive</li>
              <li v-else v-on:click="signIntoGoogleDrive" class="storage-option">Sign into Google Drive</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import converter from 'Common/services/converter'
    import SlideSelect from 'Common/components/SlideSelect'
    import store from '../../store'
    
    export default {
        name: "app-storage",
        data: function() {
          return {
            storageMethods: ['local','cloud'],
          }
        },
        components: {
          'ei-slide-select': SlideSelect
        },
        computed: {
            signedIntoDrive() {
                return store.getters.signedIntoDrive
            },
            selectedStorageMethod() {
              return store.getters.cloudStorageMethod
            }
        },
        methods: {
            setCloudStorageMethod(newMethod) {
              if (newMethod === 'local')
                store.dispatch('signOut', store.getters.cloudProvider)
              if (newMethod === 'cloud')
                store.dispatch('signIn', store.getters.cloudProvider)
            },
            resetTasklists() {
                store.commit('resetTasklists')
            },
            resetStore() {
                store.commit('resetStore')
                this.$router.push('/')
            },
            exportStore() {
                const data = converter.convert(
                    store.getters.tasklists, 
                    store.getters.exportFormat
                );
            },
            signIntoGoogleDrive() {
                store.dispatch('signIn', store.getters.cloudProvider);
            },
            signOutOfGoogleDrive() {
                store.dispatch('signOut', store.getters.cloudProvider);
            }

        }
    };
</script>
