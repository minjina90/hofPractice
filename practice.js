// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;

  _.each(numbers, function(value, index, collection) {
    if (value % 5 === 0) {
      count++;
    }
  });

  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var result = _.filter(fruits, function (value) {
    return value === targetFruit;
  });
  return result;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var result = _.filter(fruits, function(value) {
    if (value[0] === letter) {
      return value;
    }
  });
  return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var result = _.filter(desserts, function (value) {
    if (value.type === 'cookie') {
      return value;
    }
  });
  return result;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = _.reduce(products, function (initialPrice, priceToAdd) {
    return initialPrice + Number(priceToAdd.price.substring(1));
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var dessertType = _.reduce(desserts, function (accumulator, currentDessert) {
    if (accumulator[currentDessert.type] === undefined) {
      accumulator[currentDessert.type] = 1;
    } else {
      accumulator[currentDessert.type]++;
    }
    return accumulator;
  }, {});
  return dessertType;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var movieArray = _.reduce(movies, function (accumulator, currentMovie) {
    if (currentMovie.releaseYear >= 1990 && currentMovie.releaseYear <= 2000) {
      accumulator.push(currentMovie.title);
    }
    return accumulator;
  }, []);
  return movieArray;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var movieTime = _.reduce(movies, function (accumulator, currentMovie) {
    if (currentMovie.runtime <= timeLimit) {
      accumulator = true;
    }
    return accumulator;
  }, false);
  return movieTime;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var upperCase = _.map(fruits, function (value) {
    return value.toUpperCase();
  });
  return upperCase;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var addProperty = _.map(desserts, function (value, index, list) {
    if (value.ingredients.indexOf('flour') > -1) {
      value.glutenFree = false;
    } else {
      value.glutenFree = true;
    }
    return value;
  });

  return addProperty;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var salePrice = _.map(groceries, function (value) {
    var priceNumb = Number(value.price.substring(1));
    value.salePrice = '$' + (priceNumb * (1 - coupon)).toFixed(2);
    return value;
  });
  return salePrice;
};
