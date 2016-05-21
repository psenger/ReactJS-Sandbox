/**
 * Created by psenger on 5/21/16.
 */
"use strict";

/**
 * We see
 *      undefined
 *
 * because the variable is hoisted to the global scope
 */
console.log(productId);
var productId = 12;


/**
 * We see
 *    ReferenceError: nameId is not defined
 *
 * because the variable is not
 * hoisted to global.
 */
console.log(nameId);
let nameId = 12;

/**
 * We see
 *      undefined
 *
 * because the variable is not hoisted but is undefined
 */
let phoneId;
console.log(phoneId);