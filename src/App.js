import './App.css';
import TopNav from './components/top-nav/top-nav';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import RecipePage from './pages/recipe';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.search} element={<SearchPage />} />
          <Route path="/recipes/:recipeId" element={<RecipePage />} />
      </Routes>
     
    </div>
  );
}

export default App;
