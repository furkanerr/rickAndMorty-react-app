import Home from './Pages/Home'
import {
    Routes,
    Route
} from "react-router-dom";
import CharacterDetails from "./Pages/CharacterDetails";

function App() {
  return (
    <>

        <Routes>
            <Route exact path="/" element={ <Home/>} />
            <Route  exact path="/characters/:id"  element={<CharacterDetails />} />

        </Routes>
    </>
  );
}

export default App;
