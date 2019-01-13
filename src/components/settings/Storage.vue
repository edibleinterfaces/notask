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
            .modal-close-btn {
              display: flex;
              justify-content: center;
              align-items: center;
              background: white;
              height: 10%;
              width: 100%;
              position: absolute;
              bottom: 0;
              right: 0;
              border-radius: 0px 0px 5px 5px;
            }
            .modal-close-btn:active {
              background: red;
              color: white;
            }
            .modal-container {
              border-radius: 5px 5px 0px 0px;
              position: absolute;
              bottom: 10%;
              right: 0;
              width: 100%;
              background: gray; 
              height: 90%;
              overflow-y: scroll;
              padding: 5%;
              line-height: 1.5em;
              font-size: 1.5em;
              .cloud-sync-option-descriptions {
                li {
                  margin-bottom: 20px;
                }
              }
              .cloud-sync-modal-options-container {
                width: 100%;
                height: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: space-around;

                .cloud-sync-modal-option {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  width: 45%;
                  height: 100%;
                  border-radius: 5px;
                  label {
                    font-size: 3em;
                    margin-bottom: 20px;
                  }
                  & .fa {
                    font-size: 2em;
                  }
                }
                .cloud-sync-modal-option:active {
                  background: red;
                  color: white;
                }

              }
              span.emphasis {
                font-weight: bold;
                text-decoration: underline;
              }
              button {
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
              <li class="storage-option">Import / Export</li>
              <li v-if="signedIntoCloud" v-on:click="signOutOfGoogleDrive" class="storage-option">Sign out of Google Drive</li>
              <li v-else v-on:click="signIntoGoogleDrive" class="storage-option">Sign into Google Drive</li>
            </ul>
            <ei-modal :active="modalActive">
              <div slot="container" class="modal-container">
                <p>You have two choices when switching to cloud sync mode, <span class="emphasis">pull</span> and <span class="emphasis">push</span>:</p>
                <ul class="cloud-sync-option-descriptions">
                  <li>Push will copy your local data into the cloud sync file and use that in cloud sync mode.</li>
                  <li>Pull will use the existing cloud sync file as your data source (note: your local data will be preserved).</li>
                </ul>
                <div class="cloud-sync-modal-options-container">
                  <button @click="syncWithCloud('pull')" class="cloud-sync-modal-option">
                    <label>Pull</label>
                    <div class="icon-group">
                      <i class="fa fa-mobile"></i>
                      <i class="fa fa-arrow-left"></i>
                      <i class="fa fa-cloud"></i>
                    </div>
                  </button>
                  <button @click="syncWithCloud('push')" class="cloud-sync-modal-option">
                    <label>Push</label>
                    <div class="icon-group">
                      <i class="fa fa-mobile"></i>
                      <i class="fa fa-arrow-right"></i>
                      <i class="fa fa-cloud"></i>
                    </div>
                  </button>
                </div>
              </div>
              <button @click="closeModal" slot="close-btn" class="modal-close-btn">CLOSE</button>
            </ei-modal>
        </div>
    </div>
</template>

<script>
    import convert from 'Common/services/converter'
    import SlideSelect from 'Common/components/SlideSelect'
    import Modal from 'Common/components/Modal'
    import store from '../../store'
    
    export default {
        name: "app-storage",
        data: function() {
          return {
            storageMethods: ['local','cloud'],
            modalActive: false
          }
        },
        components: {
          'ei-slide-select': SlideSelect,
          'ei-modal': Modal
        },
        computed: {
            signedIntoCloud() {
                return store.getters.signedIntoCloud
            },
            selectedStorageMethod() {
              return store.getters.cloudStorageMethod
            }
        },
        methods: {
            closeModal() {
              this.modalActive = false
            },
            setCloudStorageMethod(newMethod) {

              if (newMethod === 'local') {
                store.dispatch('signOut', store.getters.cloudProvider)
              }
              if (newMethod === 'cloud') {
                this.modalActive = true
              }
            },
            syncWithCloud(syncDirection) {
              // how to synchronize these actions?
              store.dispatch('signIn', store.getters.cloudProvider, syncDirection)
              store.dispatch('syncToCloud', {
                cloudProvider: store.getters.cloudProvider,
                content: convert(store.state, 'json'),
                syncFileId: store.getters.syncFileId
              })
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
