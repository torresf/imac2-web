import { h } from 'hyperapp'

export default (props) =>
  <li key={'item' + props.id}>
    <div class={props.checked ? 'listItem checked' : 'listItem'}>
      <input
        type='checkbox'
        id={props.id}
        name={props.value}
        checked={props.checked}
        onclick={() => props.toggleCheck({id: props.id})} />
      <label for={props.id}>{props.value}</label>
      <button
        class='remove'
        disabled={!props.checked}
        onclick={() => props.removeItem({id: props.id})}>supprimer</button>
    </div>
  </li>
