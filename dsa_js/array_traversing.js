let data = [1, 4, 6, 45, 7, 0, 10, 23, 34, 5, 55];

const array_traversing = (data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(
      `Array Element index is ${i} and this index value is ${data[i]}`
    );
  }
};

array_traversing(data);
