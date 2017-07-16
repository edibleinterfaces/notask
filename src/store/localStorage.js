import Tasklist from '../models/Tasklist'; 
import Task from '../models/Task'; 
import testData from './testData';

const testing = Boolean(window.location.origin.match('localhost'));
const defaultData = testing ? testData : { tasklists: [ Tasklist({ title: '', tasks: [new Task()] }) ] };

function LocalStorage() {
    const STORAGE_KEY = 'no-task-v2';
    const ls = window.localStorage;
    const init = function() {
        if (!ls.getItem(STORAGE_KEY))
            ls.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    };
    const restoreDefaultSettings = function() {
        ls.setItem(STORAGE_KEY, JSON.stringify(defaultData));
    };
    const deleteStore = function() {
        ls.removeItem(STORAGE_KEY);
    }
    const saveTasklists = function(tasklists) {
        const appData = JSON.parse(ls.getItem(STORAGE_KEY));
        appData.tasklists = tasklists;
        ls.setItems(STORAGE_KEY, JSON.stringify(appData));
    }
    const getTasklists = function() {
        const stringData = ls.getItem(STORAGE_KEY);
        return JSON.parse(stringData).tasklists;
    }
    const clearTasklists = function() {
        const appData = JSON.parse(ls.getItem(STORAGE_KEY));
        appData.tasklists = defaultData.tasklists;
        ls.setItems(STORAGE_KEY, JSON.stringify(appData));
    }

    init();

    return {
        init, 
        restoreDefaultSettings,
        deleteStore,
        saveTasklists,
        getTasklists,
        clearTasklists
    };
};

const localStorage = new LocalStorage();

export default localStorage;
