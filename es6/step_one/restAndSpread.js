/**
 * Created by psenger on 5/22/16.
 */


// --- rest

var aNormalFunction = function ( A, B, C ){
};

// "..." is called a "rest", which gathers up the values as an array
var showCategroies = function ( productId, ...categories ){
    console.log( arguments.length, categories instanceof Array );
};
showCategroies(123);
showCategroies(123,'search');
showCategroies(123,'search','advertising');

// rest is ignored as a parameter
console.log( aNormalFunction.length, showCategroies.length );

var dynamicShowCategories = new Function('...categories', 'return categories;');
console.log( dynamicShowCategories('search','advertisement') );

// --- spread
var prices = [12,20,18];
var maxPrice = Math.max(...prices);
console.log( maxPrice );


var prices = [12,20,18];
var newPricesArray = [...prices];
console.log( newPricesArray );


var newPricesArray = new Array(...[,,]);
console.log( newPricesArray );

var maxCode = Math.max(..."469321");
console.log( maxCode );

var codeArray = ["A",..."BCD","E"];
console.log( codeArray );