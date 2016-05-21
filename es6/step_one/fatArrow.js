/**
 * Created by psenger on 5/21/16.
 */
"use strict";

var getPrice = () => 5.99;
console.log( typeof getPrice );
console.log( getPrice() );


var getNewPrice = count => count * 4.00;
console.log( getNewPrice( 2 ) );

var getNewPriceWithTax = ( count, tax ) => count * 4.00 * ( 1 + tax );
console.log( getNewPriceWithTax( 2, .07 ) );

var invoice = {
    number: 123,
    process: function(){
        console.log( "-- returns the object literal as this --" );
        console.log( this );
    }
};
invoice.process();

var invoice2 = {
    number: 123,
    process: () => {
        console.log( "-- returns the scope of the execution as this --" );
        console.log( this );
    }
};
invoice2.process();

var invoice3 = {
    number: 123,
    process: function() {
        console.log( "-- returns 123 because process is a function of the object literal --" );
        return () => console.log( this.number );
    }
};
invoice3.process()();

var invoice4 = {
    number: 123,
    process: () => {
        console.log( "-- returns undefined because number is not in scope of global --" );
        return () => console.log( this.number );
    }
};
invoice4.process()();

console.log( "-- returns 123 because you can not bind / call / apply to an arrow function --" );
var invoice5 = {
    number: 123,
    process: function () {
        return () => console.log( this.number );
    }
};
var newInvoice = {
    number: 456
};
invoice5.process().bind(newInvoice)();
invoice5.process().call(newInvoice);