import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
/* -------------------------- */
import axios from 'axios';
/* -------------------------- */
function App() {

  const [users , setUsers] = useState([]) ;

  const [inputed , setInputed] = useState('');

  useEffect(() => {
    getData('deb').then(data => {
      console.log(data);
      setUsers(data);
    }) ;
    
  } , []) ;

  return (
    <div className="App">
      <input onKeyUp={e => getData(inputed).then(data => setUsers(data))} onChange={e => {setInputed(e.currentTarget.value)}} type='text' value={inputed} />
      {
        users.map(elem => <div>{elem.name}</div>)
      }
    </div>
  );
}

export default App;

async function getData (query) {


  const data = await axios.get('http://127.0.0.1:3000', {params:{term:query}})
  .then(response => {
    // Обработка успешного ответа
    // console.log(response.data);
    return response.data ;
  })
  .catch(error => {
    // Обработка ошибки
    console.error(error);
  });

  // console.log(data);

  return data ;

}
