import { h } from 'hyperapp'

export default (props) =>
  <li className='card teacherCard' key={props.id}>
    <div className='imgContainer'>
      <img src={props.photo} alt={props.lastName} />
    </div>
    <div className='about'>
      <p className='name'>{props.firstName} {props.lastName}</p>
      {
        props.subjects.map(subject =>
          <p>{subject.title}</p>
        )
      }
    </div>
  </li>
