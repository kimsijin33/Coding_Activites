import { fromEvent } from 'rxjs';
// import { debounce } from 'lodash-es';
import { ajax } from 'rxjs/ajax';
import{
    map,
    distinctUntilChanged,
    debounceTime,
    switchMap,
    tap
} from 'rxjs/operators';
 // convention에 따라 meal

import Meal from './meal';

const apiEndPoint = 'https://www.themealdb.com/api/json/v1/1/search.php';

const searchInput = document.querySelector('.searchInput')
const recipeList = document.querySelector('.recipeList')

const inputStream = fromEvent(searchInput, 'input')
  .pipe(
    map((event) => event.target.value),
    debounceTime(1000),
    distinctUntilChanged(),
    tap(() => recipeList.innerHTML = '<h3>Loading...</h3>'),
    switchMap((inputValue) =>
      ajax(`${apiEndPoint}?f=${inputValue}`, { method: 'GET' })
        .pipe(
          map(({ response }) => response ? response.meals : []),
        ),
    ),
  );

  inputStream.subscribe({
    next: (meals) => {
      recipeList.innerHTML = meals
        .map((meal) => new Meal(meal))
        .map((mealInstance) => mealInstance.renderToString())
        .join('')
    },
    error: () => {
      recipeList.innerHTML = '<h3>An error has occurred when fetching data...</h3>'
    },
  })