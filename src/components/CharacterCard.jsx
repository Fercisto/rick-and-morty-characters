import { Link } from "react-router-dom";

export const CharacterCard = ({ character }) => {

  return (
    <div className="relative shadow bg-white flex flex-col items-start justify-center rounded-2xl overflow-hidden">
      
      {/* Status Badge */}
      <span
        className={`absolute top-3 right-5 px-2 py-1 rounded text-white font-bold 
          ${character.status === "Alive" ? "bg-green-500" :
            character.status === "Dead" ? "bg-red-500" :
            "bg-gray-500"}`}
      >
        {character.status}
      </span>

      {/* Character Image */}
      <img
        className="w-full"
        src={character.image}
        alt={`Imagen - ${character.name}`}
      />

      {/* Character Info */}
      <div className="px-5 mt-5 flex flex-col gap-2">
        <p className="font-bold text-2xl">{character.name}</p>

        <div>
            <p className="font-bold">Species: <span className="font-normal">{character.species}</span></p>
            <p className="font-bold">Gender: <span className="font-normal">{character.gender}</span></p>
        </div>  
      </div>

      <div className="flex items-centers justify-center w-full p-5">
        <Link
        to={`/character/${character.id}`}
        className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full transition-colors text-center"
        >
            See Details
        </Link>
      </div>    
      
    </div>
  );
};
