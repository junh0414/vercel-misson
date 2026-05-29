import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Stores from './Stores';
import Store from './Store';
import Cart from './Cart';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Stores />} />
        <Route path="/store/:storeId" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
