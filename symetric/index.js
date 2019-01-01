function sym(params) {
  const args = [...arguments];
  //   let first = args[0];
  //   let comparedDiff;
  //   args.forEach((item, index) => {
  //     if (index < args.length - 1) {
  //       comparedDiff = symDiff(first, args[index + 1]);
  //       first = comparedDiff;
  //     }
  //   });

  //   return comparedDiff;

  return args.reduce(symDiff);
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);

function symDiff(arr1, arr2) {
  const r1 = arr1.filter(function(i) {
    return arr2.indexOf(i) < 0;
  });
  const r2 = arr2.filter(function(i) {
    return arr1.indexOf(i) < 0;
  });

  //   return [...r1, ...r2].sort().reduce((acc, current) => {
  //     const length = acc.length;
  //     if (length === 0 || acc[length - 1] !== current) {
  //       acc.push(current);
  //     }
  //     return acc;
  //   }, []);

  return [...r1, ...r2].filter((item, index, self) => {
    return index === self.indexOf(item);
  }).sort();
}

module.exports = { sym };
