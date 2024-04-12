let nums = [4, 6, 8];

// Arrays in JavaScript are mutable, we can add elements to it
nums[4] = 10;
console.log(nums)

// JavaScrit has an inbuilt method to add at the end.
// Suppose we do not know the number of elements inside the array
nums.push(20)
console.log(nums)

// We can use another JavaScript function to add at the begining
nums.unshift(2);
console.log(nums);

// We can delete a number at the end of an array using the pop() function
// The return of the function is the number removed
let last_num = nums.pop();
console.log(last_num);
console.log(nums);

// We can delete a number at the start of an array using the shift method()
// Just like the pop() method, the return of the function is the removed element
let first_num = nums.shift()
console.log(first_num)
console.log(nums)