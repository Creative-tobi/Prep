import LandingPage from './components/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {

  return (
    <>
      <LandingPage />
      <Signup />
      <Login />
      {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
    </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App
