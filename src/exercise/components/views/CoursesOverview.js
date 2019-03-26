import { h } from 'hyperapp'
import List from '../List.jsx'

export default (state, actions) =>
  <main>
    <input
      oninput={ (e) => actions.setValue(e.target.value)}
      value={state.input.value} />
    <button disabled={!state.input.value} onclick={() => actions.addItem({value: state.input.value})}>+</button>
    <List items={state.list} removeItem={actions.removeItem} toggleCheck={actions.toggleCheck}/>
  </main>
