/**
 * Created by psenger on 5/22/16.
 */
"use strict";

/**
 * Requires NodeJS version 6+
 * @param productId
 */
var getProduct = function getProduct ( productId = 1000 ) {
    console.log( productId );
};

getProduct();

var getProductA = function getProductA ( productId = 1000, type = 'software' ) {
    console.log( productId + ', ' + type);
};

getProductA( undefined, 'Hardeware');
// fails...
// getProductA( , 'Hardeware');

// -----

var getTotal = function getTotal( price, tax = price * 0.07){
    console.log ( ' total = ' + (  price + tax  ));
};

getTotal( 5.00 );
getTotal(  ); // total = NaN

// -----

var baseTax = 0.07;
var getTotalA = function getTotalA( price, tax = price * baseTax){
    console.log ( ' getTotalA = ' + (  price + tax  ));
};

getTotalA( 5.00 );

// -----

var generateBaseTax = () => 0.07;
var getTotalB = function getTotalB( price, tax = price * generateBaseTax() ){
    console.log( arguments.length ); // still shows what was physically passed not defaulted.
    console.log ( ' getTotalB = ' + (  price + tax  ));
};

getTotalB( 5.00 );

// -----

// first parameter is the default parameters
// second parameter is the inner function
var dynamicFunction = new Function("price = 10", "price = price + 10; return price;");
console.log( dynamicFunction( ) );
console.log( dynamicFunction( 20 ) );

