// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths.
// Can you help him to find out, how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and
// returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.
// Examples:
// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
/*
    let recipe = {flour: 500, sugar: 200, eggs: 1};
    let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
    assert.equal(cakes(recipe, available), 2);
    
    recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
    available = {sugar: 500, flour: 2000, milk: 2000};
    assert.equal(cakes(recipe, available), 0);
*/

// my solution
function cakes(recipe, available) {
  let min;
  const recipeKey = Object.keys(recipe);
  const availableKey = Object.keys(available);

  recipeKey.forEach((el) => {
    if (availableKey.includes(el)) {
      let tmp = Math.floor(available[el] / recipe[el]);
      min = min === undefined ? tmp : tmp < min ? tmp : min;
    } else {
      min = 0;
    }
  });

  return min;
}

// others
function cakes2(recipe, available) {
  var numCakes = [];

  for (var key in recipe) {
    if (recipe.hasOwnProperty(key)) {
      if (key in available) {
        numCakes.push(Math.floor(available[key] / recipe[key]));
      } else {
        return 0;
      }
    }
  }

  return Math.min.apply(null, numCakes);
}
