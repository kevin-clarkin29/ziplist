function zipList<T, U>(list1: T[], list2: U[]): (T | U)[] {
  const result: (T | U)[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

// Test zipList
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]

function zipListTheFunctionalWay(list: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];
  list.forEach((element, index) => {
    result.push(element, list2[index]);
  });
  return result;
}

console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
