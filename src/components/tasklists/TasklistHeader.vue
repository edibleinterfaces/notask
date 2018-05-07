<style lang="scss">
    @import "../../../style/themes.scss";
    @import "~Common/style/themify.scss";
    .tasklist-header {
        @include themify($themes) {
            background: themed('tasklist-header-bg');
            ::selection {
                background: themed('tasklist-font-selection-bg');
            }
            &.is-new {
                background: themed('tasklist-header-bg-init');
            }
        }
        right: 0%;
        -webkit-transition: background 0.1s ease;
        -webkit-transition: right 0.2s ease, background 0.4s ease;
        position: relative;
        display: flex;
        border-bottom: 1px solid lightgray;
        @include themify($themes) {
            &.edit-mode {
                background: themed('tasklist-header-bg-dark');
            }
        }
        &.sortable-chosen:not(.sortable-ghost) {
            & .sort-handle > .handle-icon:before {
                content: "\f255";
                color: salmon;
            }
            @include themify($themes) {
                background: themed('tasklist-header-bg-drag');
            }
            div.slideout-controls {
                visibility: hidden !important;
            }
        }
        .nav-handle {
            text-decoration: none;
        }
        @include themify($themes) {
            .handle-icon {
                color: themed('tasklist-sort-handle');
            }
        }
        button.sort-handle {
            background-color: transparent;
            @include themify($themes) {
                .handle-icon {
                    color: themed('tasklist-sort-handle');
                }
            }
        }
        .nav-handle,
        .sort-handle,
        .title-container {
            cursor: pointer;
            height: 100%;
        }
        .title-container {
            position: relative;
        }
        @include themify($themes) {
            .swipe-handle {
                display: flex;
                align-items: center;
                justify-content: center;
                .swipe-icon {
                    color: themed('tasklist-swipe-handle');
                    font-size: 4vh;
                }
            }
        }
        @include themify($themes) {
            .nav-handle,
            .sort-handle {
                transition: background 0.2s ease-in-out;
                display: flex;
                align-items: center;
                justify-content: center;
                color: themed('tasklist-sort-handle');
                height: 100%;
                .handle-icon {
                    font-size: 5vh;
                    width: 100%;
                    text-align: center;
                }
            }
        }
        .title-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;
            @include themify($themes) {
                .tasklist-title-input {

                    overflow-x: scroll;
                    background: transparent;
                    color: themed('tasklist-header-font');
                    width: 100%;
                    height: 100%;
                    margin:0;
                    padding:0;
                    flex: 1;
                    text-align: center;
                    font-size: 2em;
                    border: none;
                    outline: none;
                }
                .tasklist-title-input[readonly] {
                    -webkit-user-select: none;
                    user-select: none;
                    opacity: 1; /* required disabled input style to take effect on ios */
                    color: themed('tasklist-header-font') !important;
                }
            }
        }
        .slideout-controls {
            cursor: pointer;
            @include themify($themes) {
                background: themed('tasklist-delete-handle-bg');
                color: themed('tasklist-delete-handle');
            }
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            .delete-tasklist-icon,
            .delete-tasklist-icon-confirm {
                font-size: 5vh;
                @include themify($themes) {
                    color: themed('tasklist-delete-handle');
                }
            }
            .delete-tasklist-icon-confirm {
            }
        }
    }
    @media(max-height: 400px) {
        .tasklist-header {
            height: 50%;
            .sort-handle,
            .nav-handle {
                .handle-icon {
                    font-size: 15vh;
                }
            }
        }
    }
    @media (min-height: 400px) {
        .tasklist-header {
            height: 20%;
        }
    }
    @media(max-width: 750px) {
        .tasklist-header {
            width: 120%;
        }
        .title-container {
            width: 60%;
        }
        .sort-handle,
        .nav-handle,
        .swipe-handle,
        .slideout-controls {
            width: 20%;
        }
        .tasklist-header.delete-mode {
            right: 20%;
        }
    }
    @media(min-width: 750px) {
        .tasklist-header {
            width: 115%;
        }
        .title-container {
            width: 80%;
        }
        .sort-handle,
        .swipe-handle,
        .nav-handle,
        .slideout-controls {
            width: 15%;
        }
        .tasklist-header.delete-mode {
            right: 15%;
        }
    }
</style>

<template>
    <div
        v-bind:class="headerStyleObj"
        v-on:click="delegatedClick($event.target)"
        class="tasklist-header">
        <div 
            v-on:tap="navigate" 
            v-if="Number.isInteger(listId)" 
            class="sort-handle">
            <i class="fas fa-hand-paper handle-icon"></i>
        </div>
        <router-link 
            v-else
            to="/tasklists"
            class="nav-handle">
            <i class="fas fa-arrow-left handle-icon"></i>
        </router-link>
        <v-touch 
            v-on:swipeleft="enableDeleteMode"
            v-on:swiperight="disableDeleteMode"
            class="title-container">
            <input 
                :value="listTitle" 
                :readonly="this.$route.name === 'ListsView'"
                v-on:click="navigateOrEnableInput($event.target)"
                v-on:change="updateTasklistTitle"
                v-on:blur="disableInput"
                v-on:keydown.enter="triggerBlur($event.target)"
                class="tasklist-title-input"> 
            </input>
        </v-touch>
        <div 
            v-on:click="deleteMode ? disableDeleteMode() : enableDeleteMode()"
            class="swipe-handle">
            <i class="fas fa-ellipsis-v swipe-icon"></i>
        </div>
        <div class="slideout-controls"> 
            <i 
                v-if="deleteMode && !deleteConfirmed" 
                v-on:click="deleteConfirmed = true"
                class="fas fa-trash delete-tasklist-icon"></i>
            <i 
                v-if="deleteMode && deleteConfirmed" 
                v-on:click="deleteTasklist(listId)" 
                class="fas fa-times-circle delete-tasklist-icon-confirm"></i>
        </div>
    </div>

</template>

<script>
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    import store from '../../store';

    Vue.use(VueTouch);
    VueTouch.config.swipe = { 
        direction: 'horizontal', // fixes scroll bug
        velocity: 0.1,
        threshold: 0
    }; 

    export default {
        name: 'tasklist-header',
        props: ['listId'],
        data: function() {
            return {
                trashcanVisible: false,
                editingTitle: false,
                deleteMode: false,
                deleteConfirmed: false
            };
        },
        computed: {
            headerStyleObj() {
                return {
                    'delete-mode': this.deleteMode,
                    'edit-mode': this.editingTitle,
                    'is-new': this.isNew,
                };
            },
            tasklists: function() {
                return store.getters.tasklists;
            },
            listTitle: function() {
                return store.getters.tasklists[ this.listId ].title;
            },
            isNew() {
                return store.getters.tasklists[ this.listId ].isNew;
            }

        },
        created() {
            const self = this;
            setTimeout(function() { 
                store.commit('markTasklistOld', self.listId);
            }, 200);
        },
        methods: {
            disableInput() {
                this.editingTitle = false;
            },
            enableInput(element) {
                this.editingTitle = true;
                element.focus();
                element.setSelectionRange(0,9999);
            },
            navigateOrEnableInput(element) {
                if (this.$route.name === 'ListsView')
                    this.delegatedClick(element);
                else 
                    this.enableInput(element);
            },
            triggerBlur(element) {
                element.blur();
            },
            updateTasklistTitle(e) {
                const payload = {
                    listId: this.listId,
                    title: e.target.value, 
                };
                store.commit('updateTasklistTitle', payload);
            },
            delegatedClick(element) {
                const allowed = [
                    'sort-handle',
                    'handle-icon',
                    'title-container',
                    'tasklist-title-input'
                ];
                const catchTheClick = allowed.some(c => element.classList.contains(c));

                if (catchTheClick) {
                    this.navigate();
                }
            },
            navigate() {
                this.$emit('navigate', `/tasklist/${ this.listId }`);
            },
            enableDeleteMode() {
                this.deleteMode = true;
                this.deleteConfirmed = false;
            },
            disableDeleteMode() {
                this.deleteMode = false;
                this.deleteConfirmed = false;
            },
            deleteTasklist(listId) {
                const CSS_FADEOUT_INTERVAL = 200;
                this.deleteMode = false;
                this.deleteConfirmed = false;
                setTimeout(function() {
                    store.commit('removeTasklist', listId);
                }, CSS_FADEOUT_INTERVAL);
            }
        }
    };
</script>
