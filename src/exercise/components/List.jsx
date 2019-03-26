import { h } from 'hyperapp'
import ListItem from './ListItem.jsx'

export default (props) =>
  <ul>
    {props.items.map(i =>
      <ListItem
        id={i.id}
        value={i.value}
        checked={i.checked}
        removeItem={props.removeItem}
        toggleCheck={props.toggleCheck}
      />
    )}
  </ul>
