import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Alta from '../pages/Alta'
import Baja from '../pages/Baja'
import Consulta from '../pages/Consulta'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/consulta" element={<Consulta/>} />
      <Route path="/alta" element={<Alta/>} />
      <Route path="/baja" element={<Baja/>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
</BrowserRouter>
);

export default Router;