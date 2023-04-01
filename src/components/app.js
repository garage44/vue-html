import {html} from 'lit'
import {
    defineComponent,     
    onMounted,
    onUpdated,
    onUnmounted
} from '../lib/component'
import {reactive} from '@vue/reactivity'

defineComponent('c-app', () => {
    const state = reactive({
        text: 'hello',
        show: true
    })
    
    const toggle = () => {
        state.show = !state.show
    }
    const onInput = e => {
        state.text = e.target.value
    }

    return () => html`
        <button @click=${toggle}>toggle child</button>
        <p>
        ${state.text} <input value=${state.text} @input=${onInput}>
        </p>
        ${state.show ? html`<c-counter msg=${state.text}></c-counter>` : ``}
    `
})