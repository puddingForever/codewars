// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// my solution : selection sort
function descendingOrder(n) {
  n = n + '';
  let nums = n.split('');

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (parseInt(nums[i]) < parseInt(nums[j])) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return Number(nums.join(''));
}

// best practice
function descendingOrder2(n) {
  return parseInt(String(n).split('').sort().reverse().join(''));
}
