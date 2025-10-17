export const SearchBar = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="flex flex-col items-center justify-self-center mb-10 w-full gap-5">

        <h2 className="text-center text-4xl font-bold">Characters</h2>

        <input 
            type="text" 
            className="bg-white w-3/5 border border-green-400 rounded py-2 px-3 focus:border-green-600 focus:ring-2 focus:ring-green-300 outline-none" 
            placeholder="Search a Character"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
        />

    </div>
  ) 
}
