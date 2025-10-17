import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterInfo from "../components/CharacterInfo";

const Character = () => {

    const params = useParams();

    const { id } = params;

    const [character, setCharacter] = useState([]);
    
    useEffect(() => {

        const filterCharacterById = () => {

            try {
                const url = `https://rickandmortyapi.com/api/character/${id}`;

                fetch(url)
                    .then(response => response.json())
                    .then(character => setCharacter(character))
            } catch (error) {
                console.log(error);
            }

        }

        filterCharacterById();

    }, []);

  return (
    <div className="flex items-center justify-center mt-10">
        <CharacterInfo 
            key={character.id}
            character={character}
        />
    </div>
  )
}

export default Character
