const baseUrl = 'http://localhost:8080/todos'

const loadTodos = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
}

export default loadTodos;
