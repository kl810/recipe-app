import './App.css';
import { useState, createContext, useEffect } from 'react'
import TopNav from './components/top-nav/top-nav';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import RecipePage from './pages/recipe';
import routes from './routes';
import spoonacularApi from './api/spoonacular-api';

export const AppContext = createContext(null); //createContext for props, avoid prop drilling

function App() {
  const [ingredientsList, setIngredientsList] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const addIngredient = (ingredient) => {
    const submitIngredients = [...ingredientsList, ingredient]
    setIngredientsList(submitIngredients)
  }

  const deleteIngredient = (ingredient) => {
      //Create shallow copy
      const listCopy = [...ingredientsList]

      //use filter to remove tag from list
      const filteredList = listCopy.filter((tag) => tag !== ingredient)

      //set new list
      setIngredientsList(filteredList)
  }

    //Search results from input

  const loadSearchResults = async() => {
    const results = await spoonacularApi.getIngredientRecipes(ingredientsList)
    setSearchResults(results)
  }

    //Random recipes as placeholder when no ingredient/s is inputted

  const loadRandomRecipes = async() => {
    const results = await spoonacularApi.getRandomRecipes()
    setSearchResults(results)
  }

  useEffect(() => {
    if (ingredientsList.length >= 1) {
        loadSearchResults()    
    }

    if (ingredientsList.length === 0) {  //load random recipes if no input or all tags/ingredient input is deleted
        loadRandomRecipes()
    }

  }, [ingredientsList])


  return (
    <div className="App">
      <AppContext.Provider value={{   //props
        ingredientsList, 
        searchResults, 
        addIngredient,
        deleteIngredient,
        loadSearchResults,
        loadRandomRecipes
      }}>
        <TopNav />
        <Routes>
              {/* if path == '/home' then print(<HomePage />) */}
            <Route path={routes.home} element={<HomePage />} />
              {/* if path == '/search' then print(<SearchPage />) */}
            <Route path={routes.search} element={<SearchPage />}/>
            <Route path="/recipes/:recipeId" element={<RecipePage />} />
          
        </Routes>
      </AppContext.Provider>
    
    </div>
  );
}

export default App;
