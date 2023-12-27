import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
