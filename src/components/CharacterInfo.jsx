const CharacterInfo = ({character}) => {
  return (
    <div className="bg-white rounded-2xl md:w-5xl overflow-hidden flex flex-col md:flex-row">
       <img
        className="w-full md:w-2/5"
        src={character.image}
        alt={`Imagen - ${character.name}`}
      />

        <div className="px-10 py-5 w-full md:w-3/5">
            <p className="font-bold text-4xl">{character.name}</p>
            <div className="flex items-center justify-start gap-2 mt-5">
                <div className={` 
                    w-5 h-5 rounded-full
                    ${character.status === "Alive" ? "bg-green-500" :
                    character.status === "Dead" ? "bg-red-500" :
                    "bg-gray-500"}`}
                >
                </div>
                <p className="text-xl text-gray-800 font-semibold">{character.status} - {character.species}</p>
            </div>

            <div>
                <div className="bg-gray-50 border-l-4 border-l-green-400 p-5 rounded text-gray-800 mt-5 text-lg">
                    <p className="font-bold uppercase">Gender</p>
                    <p>{character.gender}</p>
                </div>
            </div>

            <div>
                <div className="bg-gray-50 border-l-4 border-l-green-400 p-5 rounded text-gray-800 mt-5 text-lg">
                    <p className="font-bold uppercase">Origin</p>
                    <p>{character.origin?.name}</p>
                </div>
            </div>

            <div>
                <div className="bg-gray-50 border-l-4 border-l-green-400 p-5 rounded text-gray-800 mt-5 text-lg">
                    <p className="font-bold uppercase">Last known location</p>
                    <p>{character.location?.name}</p>
                </div>
            </div>

            <button 
                type="button"
                className="bg-green-400 text-white p-2 font-bold text-xl w-full mt-5 rounded hover:bg-green-500 cursor-pointer transition-colors"
            >Add to Favorites</button>
            
        </div>

    </div>
  )
}

export default CharacterInfo
