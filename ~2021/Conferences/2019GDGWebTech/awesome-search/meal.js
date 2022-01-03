class Meal {
    constructor(mealData) {
      this.mealData = mealData
    }
  
    renderToString() {
      const {
        strArea,
        strCategory,
        strIngredient1,
        strMeasure1,
        strInstructions,
        strMeal,
        strMealThumb,
        strTags,
      } = this.mealData
  
      return `
        <li class="recipe">
          <div>
            <img
              width="130px"
              height="130px"
              src=${strMealThumb}
            >
          </div>
          <div class="recipeColumn">
            <span>${strArea}</span> <span>${strCategory}</span>
            <br />
            <span>${strMeal}</span>
            <br /><br />
            Ingredient List
            <ul>
              <li>${strIngredient1}: ${strMeasure1}</li>
            </ul>
            <br />
            Instruction
            <div class="recipeInstructions">${strInstructions}</div>
            <br /><br />
            <span>${strTags}</span>
          </div>
        </li>
      `
    }
  }
  
  export default Meal;