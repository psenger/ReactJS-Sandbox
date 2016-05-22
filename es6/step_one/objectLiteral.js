/**
 * Created by psenger on 5/22/16.
 */

var productView = {
    price: 5.99,
    quantity: 30
};
console.log(productView);

// ----

var price = 5.99, quantity = 30;
var productView = {
    price,
    quantity
};

console.log(productView);

// ----

var priceA = 5.99, quantityA = 10;
var productViewA = {
    priceA,
    quantityA : 1,
    calculateValue() {
        // this refers to the context of the object.
        return this.priceA * this.quantityA;
    }
};

console.log(productViewA.calculateValue());

// ----

var field = 'dynamicField';
var priceA = 5.99;
var productViewB = {
    [field]: priceA
};
console.log( productViewB );

// ----

var ident = 'productId';
var producViewH = {
    get [ident] () { return true; },
    set [ident] ( value ) {  }
};
console.log( producViewH );
console.log( producViewH.productId );
