import { h } from 'hyperapp'
import TeachersList from '../TeachersList.jsx'
import CategoriesList from '../CategoriesList.jsx'

/*
 * Obligé de mettre une div englobante
 * car hyperapp ne supporte apparement pas
 * la syntaxe <></>
 */
export default (state) =>
  <div className="container">
    <header>
      <h1>Les cours à l'IMAC</h1>
    </header>
    <main>
      <TeachersList
        teachers={state.teachers}
        subjects={state.subjects}
      />
      <CategoriesList
        categories={state.categories}
        subjects={state.subjects}
        teachers={state.teachers}
      />
    </main>
  </div>
