"use strict";
function render(result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
        // value.id++
    });
}
const result = {
    'data': [
        { 'id': 1, 'name': 'A', 'sex': 'male' },
        { 'id': 2, 'name': 'B', 'age': 10 }
    ]
};
render(result);
let chars = ['A', 'B'];
// render(<Result>{
//     'data': [
//         { 'id': 1, 'name': 'A', 'sex': 'male' },
//         { 'id': 2, 'name': 'B' }
//     ]
// } as Result);
// render(<Result>{
//   'data': [
//     { 'id': 1, 'name': 'A', 'sex': 'male' },
//     { 'id': 2, 'name': 'B' }
//   ]
// });
