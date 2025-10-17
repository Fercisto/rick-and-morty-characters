import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Characters } from './pages/Characters';
import Character from './pages/Character';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}> 
            <Route index element={ <Characters /> } />
            <Route path='/character/:id' element={ <Character /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App