/**
 * Created by psenger on 5/22/16.
 */

let A = '1234';
console.log( `The Invoice Number is ${A}` );
console.log( `The Invoice Number is \${A}` );

// ----

let message = `A
B
C
D`;
console.log( message );

// ----

let invoiceNum = '12345';
console.log( `Invoice Number: ${"INV-" + invoiceNum}`);

// ----

function showMessage ( message ){
    let invNum = '99'; // the template is interpolated before it gets here.
    console.log( message );
}
let invNum = `1234`;
showMessage(`The Invoice Number is ${invNum}`);

// ----

function processInvoice ( segments ) {
    console.log( segments );
}
processInvoice `template`; // tagged template literals

// ----

console.log('---------------------');
// processInvoiceA is called a tagged template
function processInvoiceA ( segments, ...values ) {
    console.log( segments ); // the segments of the template are the strings of a sege.
    console.log( values ); // rest values
}
let invoiceNumA = '1350';
let amountA = '2000';
processInvoiceA `invoice: ${invoiceNumA} for ${amountA}`;

