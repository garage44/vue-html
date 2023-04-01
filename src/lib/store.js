import {mergeDeep} from './utils.js'
import {reactive} from 'vue'

const persistantState = reactive({
    counter: {
        count: 0,
    },
})

/**
 * State is always overwritten by these properties.
 */
const volatileState = {
    page: {
        title: 'Vue-html demo'
    }
}

export default class Store {

    load() {
        let restoredState
        try {
            restoredState = JSON.parse(localStorage.getItem('store'))
        } catch (err) {
            restoredState = {}
        }

        return mergeDeep(mergeDeep(persistantState, restoredState), volatileState)
    }

    save() {
        localStorage.setItem('store', JSON.stringify(persistantState))
    }
}
