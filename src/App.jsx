import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Characters } from './pages/Characters';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}></Route>
          <Route index element={ <Characters /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App