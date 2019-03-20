import { h } from 'hyperapp'
import CategoriesListEntry from './CategoriesListEntry.jsx'

export default (props) =>
  <div>
    <h2>Matières</h2>
    <ul className='catList subjects'>
      {props.categories.map(cat =>
        <CategoriesListEntry
          category={cat}
          subjects={props.subjects}
          teachers={props.teachers}
        />
      )}
    </ul>
  </div>
