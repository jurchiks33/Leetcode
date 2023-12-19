// Write code that enhances all arrays such that you can call the array.last()
// method on any array and it will return the last element. 
// If there are no elements in the array, it should return -1.
// You may assume the array is the output of JSON.parse.

 

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

 

// Constraints:

//     arr is a valid JSON array
//     0 <= arr.length <= 1000

Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};

// Examples
const arr1 = [null, {}, 3];
console.log(arr1.last()); // Output: 3

const arr2 = [];
console.log(arr2.last()); // Output: -1