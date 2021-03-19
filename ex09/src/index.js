// Only change code below this line
function myBouncer(arr) {
    return arr.filter(Boolean);
}
// Only change code above this line

console.log(myBouncer([7, "ate", "", false, 9])); // Change this line
console.log(myBouncer(["a", "b", "c"])); // Change this line
console.log(myBouncer([false, null, 0, NaN, undefined, ""])); // Change this line
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBouncer;