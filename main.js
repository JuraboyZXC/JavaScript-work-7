// 1--
let array1 = [
  {},
  {},
  {
    a: [[], [], ["salom", "da"], [], [[], [24]]],
  },
  [],
  [
    {
      b: [[], ["mening"]],
    },
    {
      s: [[], [{ s: "ismim" }]],
    },
    [[{ l: "Davlatshoh" }, { o: "yoshim" }]],
  ],
];
console.log(
  array1[2].a[2][0],
  array1[4][0].b[1][0],
  array1[4][1].s[1][0].s,
  array1[4][2][0][0].l,
  array1[4][2][0][1].o,
  array1[2].a[4][1][0],
  array1[2].a[2][1]
);


// 2--
let array2 = ['Maestro', '2Pac', 'Mellstroy', 'Batusai', 'Bit']
let deleted = +prompt('Delete index number!')
// if (deleted == 1) {
//   console.log(array2.splice(0,1));
// } if (deleted == 2) {
//   console.log(array2.splice(1,1));
// } if (deleted == 3) {
//   console.log(array2.splice(2,1));
// } if (deleted == 4) {
//   console.log(array2.splice(3,1));
// } if (deleted == 5) {
//   console.log(array2.splice(4,1));
// } else {
//   console.log('Не найдено!');
// } 

if (deleted == 1) {
  console.log(array2.splice(0,1));
} else if (deleted == 2) {
  console.log(array2.splice(1,1));
} else if (deleted == 3) {
  console.log(array2.splice(2,1));
} else if (deleted == 4) {
  console.log(array2.splice(3,1));
} else if (deleted == 5) {
  console.log(array2.splice(4,1));
} else {
  console.log('Не найдено');
}

console.log(array2);


// 3--
let array3 = [
    [{ a: { price: 20 } }],
    [{ a: { price: 35 } }],
    [{ a: { price: 44 } }]
];

console.log(
    array3[0][0].a.price + array3[1][0].a.price + array3[2][0].a.price
);