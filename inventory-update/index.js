function updateInventory(arr1, arr2) {
  let inventory = [];

  arr1.map(x => {
    // update quatity when match with new invetory
    if (arr2.map(x => x[1]).includes(x[1])) {
      const quantity =
        parseFloat(x[0]) + parseFloat(arr2.find(y => y[1] === x[1])[0]);

      const item = [quantity, x[1]];
      inventory.push(item);
    } else {
      inventory.push(x);
    }
  });

  arr2.map(x => {
    // just those new items to invetory
    if (!inventory.map(x => x[1]).includes(x[1])) {
      inventory.push(x);
    }
  });

  // new solution to sort alphbetically using localeCompare in ES6
  return inventory.sort((a, b) => a[1].localeCompare(b[1]));

  // old solution
  //   return inventory.sort((a, b) => {
  //     if (a[1] < b[1]) {
  //       return -1;
  //     }
  //     if (a[1] > b[1]) {
  //       return 1;
  //     }
  //     return 0;
  //   });
}

module.exports = { updateInventory };
