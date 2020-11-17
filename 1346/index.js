var checkIfExist = function (arr) {
  return (
    arr.map((val) => arr.indexOf(val * 2) >= 0 && val !== 0).indexOf(true) >=
      0 || arr.map((val) => val === 0).filter((v) => v).length > 1
  );
};

console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
console.log(checkIfExist([0, 0]));
