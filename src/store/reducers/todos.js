const INITIAL_STATE = [
  { id: 1, text: 'Fazer Café' },
  { id: 2, text: 'Estudar React' },
  { id: 3, text: 'Entrar para o grupo' },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
