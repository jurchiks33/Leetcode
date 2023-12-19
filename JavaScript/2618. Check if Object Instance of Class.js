// Write a function that checks if a given value is an instance of a given class
// or superclass. For this problem, an object is considered an instance
//  of a given class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function. 
// For example, the value or the class could be undefined.

 

// Example 1:

// Input: func = () => checkIfInstanceOf(new Date(), Date)
// Output: true
// Explanation: The object returned by the Date constructor is, by definition, 
// an instance of Date.

// Example 2:

// Input: func = () => { class Animal {}; class Dog extends Animal {}; 
// return checkIfInstanceOf(new Dog(), Animal); }
// Output: true
// Explanation:
// class Animal {};
// class Dog extends Animal {};
// checkIfInstanceOf(new Dog(), Animal); // true

// Dog is a subclass of Animal. Therefore, 
// a Dog object is an instance of both Dog and Animal.

// Example 3:

// Input: func = () => checkIfInstanceOf(Date, Date)
// Output: false
// Explanation: A date constructor cannot logically be an instance of itself.

// Example 4:

// Input: func = () => checkIfInstanceOf(5, Number)
// Output: true
// Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. 
// However, it is still considered an instance of Number
// because it accesses the Number methods. For example "toFixed()".

/**
 * Check if the provided value is an instance of the given class or superclass.
 * 
 * @param {*} value - The value to check.
 * @param {*} classFunction - The class (constructor function) to check against.
 * @return {boolean} - Returns true if value is an instance of classFunction or its superclass.
 */
var checkIfInstanceOf = function(value, classFunction) {
    // Check for null or undefined
    if (value == null) {
        return false;
    }

    // Special handling for Object class
    if (classFunction === Object) {
        // All non-null/undefined primitive types and objects are considered instances of Object
        return true;
    }

    // Check if classFunction is a function
    if (typeof classFunction !== 'function') {
        return false;
    }

    // Use instanceof for objects, and compare constructors for primitives
    if (typeof value === 'object' || typeof value === 'function') {
        return value instanceof classFunction;
    } else {
        return value.constructor === classFunction;
    }
};

// Test cases
console.log(checkIfInstanceOf(new Date(), Date)); // true
console.log(checkIfInstanceOf(5, Number)); // true
console.log(checkIfInstanceOf(5n, Object)); // true
console.log(checkIfInstanceOf(undefined, Object)); // false

//Accepted