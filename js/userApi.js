fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(err => console.log(err))


const mostrarData = (data) =>{
  let body = document.getElementById('list-usuarios')
  for (let index = 0; index < data.length; index++) {
    body.innerHTML += usuarioView(data[index])  
  }
}