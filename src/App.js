import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
     
      useEffect(()=>{
          axios.get("https://pokeapi.co/api/v2/pokemon?limit=898")
              .then(res=>{setPokemon(res.data.results);})
              .catch(err=>console.log(err))
      }, [])
      

      const onClickHandler =(event)=>{
        event.preventDefault();
      }

      return(
              <div className="App">
      <h1>Poke-Fetch</h1>
      <button onClick={onClickHandler} >Fetch Pokemon</button>
      <ul>
        {
          pokemon.map((pokemon, i ) => {
            return <li key= {i}>{pokemon.name}</li>
          })
        }
      </ul>
    </div>
      )
  }


//without using axios Code HERE
// function App() {
//   const [pokemon, setPokemon] = useState([]);

//   const onClickHandler = () => {
//     fetch ("https://pokeapi.co/api/v2/pokemon?limit=898")
//     .then(res => res.json())
//     .then(res => {
//       console.log(res);
//       setPokemon(res.results);
//     })
//     .catch(err => console.log(err)) 
//   }


//   return (
//     <div className="App">
//       <h1>Poke-Fetch</h1>
//       <button onClick={onClickHandler} >Fetch Pokemon</button>
//       <ul>
//         {
//           pokemon.map((pokemon, i ) => {
//             return <li key= {i}>{pokemon.name}</li>
//           })
//         }
//       </ul>
//     </div>
//   );
// }

export default App;