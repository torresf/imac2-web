import { h } from 'hyperapp'
import TeachersListEntry from './TeachersListEntry.jsx'

export default (props) =>
  <div className='teachers'>
    <h2>Professeurs</h2>
    <ul>
      {props.teachers.map(teacher =>
        <TeachersListEntry
          id={teacher.id}
          photo={teacher.photo}
          firstName={teacher.firstName}
          lastName={teacher.lastName}
          subjects={props.subjects.filter(s => s.teacher === teacher.id)}
        />
      )}
    </ul>
  </div>
