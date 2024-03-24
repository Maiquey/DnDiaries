import "./App.css";
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import CharacterScreen from "./HomeScreen/CharacterCreation";
import ImageCreation from './ImageCreation/ImageCreation';
import HomeScreen from './HomeScreen/HomeScreen';
import JournalEntry from "./HomeScreen/JournalEntry";

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route
                      exact
                      path="/"
                      element={<HomeScreen />}
                  />
                  <Route
                      path="/character"
                      element={<CharacterScreen />}
                  />
                  <Route
                      path="/imageCreation"
                      element={<ImageCreation />}
                  />
                  <Route
                      path="/journalEntry"
                      element={<JournalEntry />}
                  />
                  <Route
                      path="*"
                      element={<Navigate to="/" />}
                  />
              </Routes>
          </Router>
      </>
  );
}

export default App;