const splice = function (array, start, deleteCount, ...items) {
  // Copy the original array to prevent modifying it directly.
  const result = [...array];

  // Normalize negative start value.
  if (start < 0) {
    start = Math.max(result.length + start, 0);
  }

  // Normalize deleteCount to the number of elements that can be deleted.
  if (deleteCount < 0) {
    deleteCount = 0;
  } else if (deleteCount > result.length - start) {
    deleteCount = result.length - start;
  }

  // Step 1: Delete elements from the array.
  const deleted = result.slice(start, start + deleteCount);
  result.splice(start, deleteCount);

  // Step 2: Insert the new items at the specified position.
  result.splice(start, 0, ...items);

  // Update the original array.
  array.length = 0;
  array.push(...result);

  return deleted;
};

// Tests
let arr = [1, 2, 3];

// Test 1: remove 1 element
splice(arr, 0, 1);
console.log(arr); // should be [2, 3]

// Test 2: add 1 element
arr = [1, 2, 3];
splice(arr, 0, 0, 0);
console.log(arr); // should be [0, 1, 2, 3]

// Test 3: add 2 elements
arr = [1, 2, 3];
splice(arr, 0, 0, -1, 0);
console.log(arr); // should be [-1, 0, 1, 2, 3]

// Test 4: replace 1 element
arr = [1, 2, 3];
splice(arr, 1, 1, 55);
console.log(arr); // should be [1, 55, 3]

// Test 5: delete all elements from index to end
arr = [1, 2, 3, 4, 5];
splice(arr, 1);
console.log(arr); // should be [1]

// Test 6: returns array of deleted elements
arr = [1, 2, 3];
let deleted = splice(arr, 1);
console.log(deleted); // should be [2, 3]

// Test 7: returns an array of the deleted element (1 element)
arr = [1, 2, 3];
deleted = splice(arr, 1, 1);
console.log(deleted); // should be [2]

// Test 8: returns an empty array when no elements are deleted
arr = [1, 2, 3];
deleted = splice(arr, 1, 0, 5);
console.log(deleted); // should be []
