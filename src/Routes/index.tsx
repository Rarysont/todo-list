import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Todo from '../screens/Todo';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
