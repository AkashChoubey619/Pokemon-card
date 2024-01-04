import React, { useEffect, useState } from "react";
import PokemonThumbnail from "./PokemonThumbnail.js";
import './Style.css';
import Loading from "./Loading.js";

const PokemonContainer = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [url, setUrl] = useState("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1");
  const [isLoading, setIsLoading] = useState(false);
//   const [selectedPokemon, setSelectedPokemon] = useState(null);

  async function getList() {
    const pokemon = await fetch(url);
    // const pokemon = await pokemons.json();
    const data = await pokemon.json();
    const pokemonData = data[0];
    setUrl(pokemonData.next);
    // console.log(pokemonData.results)
   

    async function createPokemonData(pokemonList) {
        setIsLoading(true)
      let pokemonDataList = [];

      for (let pokemon of pokemonList) {
        const res = await fetch(pokemon.url);
        const data = (await res.json())[0];
        pokemonDataList.push(data);
        // console.log(data)
      }
      setAllPokemon([...allPokemon, ...pokemonDataList])
    //   console.log(pokemonDataList)

    }
    await createPokemonData(pokemonData.results)
    
    setIsLoading(false)
  }
  useEffect(() => {
    getList();
  }, []);
        


  return (
    <div className='App'>

      <div>
        <div className='parent'>
          <div id='section'>
            <div className='content'>
              <h2>Pokemon</h2>
              <h2>Pokemon</h2>
            </div>
            <div className='content2'>
              <h2>KingDom</h2>
              <h2>KingDom</h2>
            </div>
          </div>
        </div>
        <div className='app-container'>
          <div className='pokemon-container'>
            <div className='all-container'>
              {
                allPokemon&&allPokemon.map((pokemon,index) => (
                  <PokemonThumbnail key={index} Pokemon={pokemon}
                  />)
                )
              }
            </div>
            {
              isLoading?<Loading/>:<button className={'load-more'} onClick={() => getList()}>More Pokemons</button>
              }
          </div>

        </div>
      </div>
    </div>
  )
}

export default PokemonContainer;
