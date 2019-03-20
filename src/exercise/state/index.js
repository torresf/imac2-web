export default {
  teachers: [
    {
      id: 'teacher1',
      firstName: 'Jean-Christophe',
      lastName: 'Novelli',
      photo: '../../assets/images/novelli.jpg',
      subject: 'subject1'
    },
    {
      id: 'teacher2',
      firstName: 'Frédéric',
      lastName: 'Michea',
      photo: '../../assets/images/michea.jpg',
      subject: 'subject2'
    },
    {
      id: 'teacher3',
      firstName: 'Venceslas',
      lastName: 'Biri',
      photo: '../../assets/images/biri.jpg',
      subject: 'subject3'
    },
    {
      id: 'teacher4',
      firstName: 'Lucas',
      lastName: 'Dussouchaud',
      photo: '../../assets/images/lucas.jpg',
      subject: 'subject4'
    },
    {
      id: 'teacher5',
      firstName: 'Sylvain',
      lastName: 'Cherrier',
      photo: '../../assets/images/cherrier.jpg',
      subject: 'subject5'
    },
    {
      id: 'teacher6',
      firstName: 'Gaëtan',
      lastName: 'Robillard',
      photo: '../../assets/images/robillard.jpg',
      subject: 'subject6'
    }
  ],
  subjects: [
    {
      id: 'subject1',
      title: 'Mathématiques 1',
      hoursCount: 21350,
      year: 1,
      description: 'Ce cours de mathématiques parle d\'analyse et d\'algèbre',
      teacher: 'teacher1'
    },
    {
      id: 'subject2',
      title: 'Communication 1',
      hoursCount: 1,
      year: 1,
      description: 'Vous aimez les blagues lourdes et écouter un breton raconter sa vie ? Ce cours est fait pour vous',
      teacher: 'teacher2'
    },
    {
      id: 'subject3',
      title: 'Synthèse d\'image I',
      hoursCount: 50,
      year: 1,
      description: 'Cours de Synthèse d\'image',
      teacher: 'teacher3'
    },
    {
      id: 'subject4',
      title: 'Web',
      hoursCount: 40,
      year: 1,
      description: 'Cours de web HTML/CSS/JS',
      teacher: 'teacher4'
    },
    {
      id: 'subject5',
      title: 'Architecture logicielle',
      hoursCount: 35,
      year: 2,
      description: 'Apprentissage des design pattern',
      teacher: 'teacher5'
    },
    {
      id: 'subject6',
      title: 'Création 3D',
      hoursCount: 35,
      year: 2,
      description: 'Cours dans lequel on apprend à modéliser le parking de Copernic en 3D',
      teacher: 'teacher6'
    },
    {
      id: 'subject7',
      title: 'Synthèse d\'image II',
      hoursCount: 45,
      year: 2,
      description: 'Cours de Synthèse d\'image en 2ème année',
      teacher: 'teacher3'
    }
  ],
  categories: [
    {
      id: 'cat1',
      title: 'Informatique',
      subjects: ['subject4', 'subject5']
    },
    {
      id: 'cat2',
      title: 'Communication',
      subjects: ['subject2']
    },
    {
      id: 'cat3',
      title: 'Sciences de l\'ingénieur',
      subjects: ['subject1', 'subject3', 'subject7']
    }
  ]
}
