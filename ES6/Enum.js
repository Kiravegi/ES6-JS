enum EyeColor { Brown=1, Black ,Blue };

var myEyeColor = EyeColor;

console.log(myEyeColor);


// Expected Output

// [object Object] {
//   1: "Brown",
//   2: "Black",
//   3: "Blue",
//   Black: 2,
//   Blue: 3,
//   Brown: 1
// }