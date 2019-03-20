import { h } from 'hyperapp'

export default (props) =>
  <li className='card subjectCard' key={props.subject.id}>
    <p className='title'>{props.subject.title}</p>
    <p className='description'>{props.subject.description}</p>
    <p className='teacher'>Professeur : {props.teacher.firstName} {props.teacher.lastName} </p>
    <div className='bottomInfos'>
      <p>{props.subject.hoursCount}h</p>
      <p>Année : IMAC{props.subject.year}</p>
    </div>
  </li>
