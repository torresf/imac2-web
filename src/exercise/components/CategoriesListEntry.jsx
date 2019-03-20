import { h } from 'hyperapp'
import SubjectCard from './SubjectCard.jsx'

export default (props) =>
  <li className='catRow' key={props.category.id}>
    <h3 className='catTitle'>{props.category.title}</h3>
    <ul>
      {props.category.subjects.map(subject =>
        <SubjectCard
          subject={props.subjects.find((s) => s.id === subject)}
          teacher={props.teachers.find((t) => t.id === props.subjects.find((s) => s.id === subject).teacher)}
        />
      )}
    </ul>
  </li>
