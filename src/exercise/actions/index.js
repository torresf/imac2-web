export default {
  logEvent: (value) => state => {
    console.log(value.name, value.event)
    return state
  },
  exampleSet: value => state => ({...state, input: {...state.input, value}}),
  setValue: value => state => ({...state, input: {...state.input, value}}),
  addItem: payload => state => ({
    ...state,
    nextId: state.nextId + 1,
    input: '',
    list: [
      ...state.list,
      {
        id: state.nextId,
        value: payload.value,
        checked: false
      }
    ]
  }),
  removeItem: payload => state => ({
    ...state,
    list: state.list.filter(item => item.id !== payload.id)
  }),
  toggleCheck: payload => state => ({
    ...state,
    list: state.list.map(item => (
      (payload.id === item.id) ? ({...item, checked: !item.checked}) : item
    ))
  })
}
