// Only change code below this line
function myMutation(arr) {
    return arr[1].toLowerCase()
        .split('')
        .every(function(slovo) {
            return arr[0].toLowerCase()
                .indexOf(slovo) != -1;
        });
}
// Only change code above this line
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tigar", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;