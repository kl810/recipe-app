import './App.css';
import RecipeApp from './components/recipe-app/recipe-app';
import TopNav from './components/top-nav/top-nav';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import RecipePage from './pages/recipe';
import routes from './routes'

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={`/recipe-app`} element={<RecipeApp />} />
          <Route path={routes.recipe} element={<RecipePage />} />
      </Routes>
     
    </div>
  );
}

export default App;
