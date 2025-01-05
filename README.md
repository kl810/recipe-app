# Food Waste Warrior Recipe App
A recipe app allowing users to search for recipes based on ingredients they have.

![Screenshot of recipe app](public/recipe-app-home.png)

Click this link for a live demo: [Food-Waste-Warrior-Recipe-App](https://main.d3nfd799s6mstg.amplifyapp.com/)

## Overview
**Tech Used:** React.js, Javascript, HTML, CSS, Bootstrap

The Food Waste Warrior App helps users to reduce food waste by searching for recipes based on the ingredients they have in their pantry or fridge. The user can input one or more ingredients (which are displayed as tags below the input element). The search result is responsive to the addition and/or deletion of these ingredient inputs. When no ingredients are inputted, the search page features random recipes for inspiration. 

## Lessons Learned
- Use `useContext()` hook to manage state globally and avoid prop drilling. This was particularly useful when working out how to keep the previous search result page when clicking the back button from the recipe instructions page.
- `useParams()` hook to access parameters of the current route. Used to retrieve recipe instructions based on the selected Recipe ID.

## API Usage
This Foor Waste Warrior App uses the Spoonacular API to get recipes based on search ingredients. It also provides recipe information such as servings, preparation time, ingredients lists, recipe steps and many other features. Spoonacular API is free to use for smaller-scale applications. The free tier allows for 150 points/day. When your daily quota is used up, the API will respond with the error code 402 and no more calls can be made until your quota resets.