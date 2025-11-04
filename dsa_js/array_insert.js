let data = [1, 4, 6, 45, 7, 0, 10, 23, 34, 5, 55];

let new_element = 70;
let position = 2;

const array_inserting = (data, new_element, position) => {
  length_arr = data.length - 1;

  for (let i = length_arr; i >= 0; i--) {
    if (i >= position) {
      data[i + 1] = data[i];

      if (i === position) {
        data[i] = new_element;
      }
    }
  }
  console.log(data);
};

array_inserting(data, new_element, position);
