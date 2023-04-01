import {html} from 'lit'
import {
    defineComponent,     
    onMounted,
    onUpdated,
    onUnmounted
} from '../../lib/component'
import {reactive} from '@vue/reactivity'

defineComponent('c-counter', ['msg'], (props) => {
    const state = reactive({ count: 0 })
    const increase = () => {
      state.count++
    }

    onMounted(() => {
      console.log('child mounted')
    })

    onUpdated(() => {
      console.log('child updated')
    })

    onUnmounted(() => {
      console.log('child unmounted')
    })

    return () => html`
        <div className="c-counter">
            <p>${props.msg}</p>
            <p>${state.count}</p>
            <button @click=${increase}>increase</button>
        </div>
    `
})