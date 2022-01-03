import Meal from './meal';
import { debounce } from './node_modules/lodash-es';
 // convention에 따라 meal

const apiEndPoint = 'https://www.themealdb.com/api/json/v1/1/search.php'

const searchInput = document.querySelector('.searchInput')
const recipeList = document.querySelector('.recipeList')

let previousInputValue = '';
// 매번 reassign을 해야하기 때문에 => 이전 value

const inputHandler = debounce(async ({ target : { value : inputValue}}) => {
    // ...
    // console.log(event);

    if(!inputValue || previousInputValue === inputValue ){
        return
    }

    console.log(inputValue);


    // API 호출하기 직전 부터 도착하기 딱 직전 
    recipeList.innerHTML = '<h3>Data is Loading</h3>'


    try {


        const response = await fetch(`${apiEndPoint}?f=${inputValue}`, { method: 'GET'})
        const { meals } = await response.json();
    
    
        recipeList.innerHTML = meals
                    .map((meal)=> new Meal(meal))
                    .map((mealInstance) => mealInstance.renderToString())
                    .join('')
    }
    catch (e1){
        console.log(e1);
        recipeList.innerHTML = '<h3>An error has occured when fetching data.... </h3>'

    }

    previousInputValue = inputValue;


        // .then((response) => response.json())
        // .then(({ meals }) => {
        //     // console.log(response)
        //     recipeList.innerHTML = meals
        //         .map((meal)=> new Meal(meal))
        //         .map((mealInstance) => mealInstance.renderToString())
        //         .join('')


        //     previousInputValue = inputValue;
        // })
        // .catch((error)=>{
        //     console.log(error);
        //     recipeList.innerHTML = '<h3>An error has occured when fetching data.... </h3>'
        // })



}, 1000);

searchInput.addEventListener('input', inputHandler)
