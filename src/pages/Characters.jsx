import { useEffect, useState } from "react"
import { CharacterCard } from "../components/CharacterCard";
import { SearchBar } from "../components/SearchBar";

export const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
       const consultarApi = async () => {
        try {
            const url = "https://rickandmortyapi.com/api/character";
            fetch(url)
                .then(respuesta => respuesta.json())
                .then(resultados => setCharacters(resultados.results))
                return;
        } catch (error) {
            console.log(error);
        }
       }
       consultarApi();
    }, []);

    const displayedCharacters = characters.filter(character => character.name.toLowerCase().includes(searchTerm.toLocaleLowerCase().trim()));
    
  return (

    <div className="p-20">
        
        <SearchBar 
            searchTerm={searchTerm || ''}
            setSearchTerm={setSearchTerm}
        />

        <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
            {displayedCharacters.map(character => (
                <CharacterCard 
                    key={character.id} 
                    character={character}
                />
            ))}
        </div> 

    </div>
  )
}
