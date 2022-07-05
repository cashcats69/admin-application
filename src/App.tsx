import React, { useEffect } from 'react';
import { RoutesNavigation } from './pages';
import { checkAuth } from './store/AuthStore';


function App() {
  checkAuth()
  return (
    <RoutesNavigation/>
  );
}

export default App;
