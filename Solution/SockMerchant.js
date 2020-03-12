// Solution 1 //
function sockMerchant(n, arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let pairs = 0;

  for (let i = 0; i < n - 1; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      pairs++;
      i += 1;
    }
  }

  return pairs;
}

sockMerchant(9, [10, 20, 20, 10, 30, 50, 10, 20]);
// Output =  2

// Solution 2 //

function sockMerchant(n, arr) {
  let pairs = 0;
  const colors = arr.reduce((acc, val) => {
    !!acc[val] ? (acc[val] += 1) : (acc[val] = 1);
    return acc;
  }, {});

  Object.keys(colors).forEach(n => {
    let _pair = parseInt(colors[n] / 2);
    if (_pair >= 1) pairs += _pair;
  });

  return pairs;
}

sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);
// Output = 2
