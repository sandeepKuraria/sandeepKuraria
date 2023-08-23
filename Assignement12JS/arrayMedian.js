//declared a function
function sortedArray(m, n) {
  //created 2 empty array nums1 and nums2
  let nums1 = [];
  let nums2 = [];
  //using for loop to push elements in array
  for (let i = 1; i <= m; i++) {
    nums1.push(i);
  }
  //using for loop to push elements in array
  for (let j = 11; j <= n + 10; j++) {
    nums2.push(j);
  }
  console.log(nums1);
  console.log(nums2);

  //creating another empty array to insert both nums1 and nums2 array in medianArray array
  let medianArray = [];
  medianArray.push(nums1, nums2);
  //joining array elements separated by , to create a string
  let joinedArray = medianArray.join(",");
  console.log(joinedArray);
  //spliting to get each element in a string using index number and creating a combined array
  const characters = joinedArray.split(",");

  console.log(characters);
  //   console.log(characters.length % 2 == 0);
  //declaring variable median
  let median;
  //if number of elements in the array is odd then we execute first if statement otherwise second if statement
  if (characters.length % 2 == 0) {
    median = (characters.length / 2 + (characters.length / 2 + 1)) / 2;
  }
  if (characters.length % 2 != 0) {
    median = (characters.length + 1) / 2;
  }

  //finally printing the median value according to the given inputs for variable lengths for array nums1 and nums2
  //also using Math.floor(median) to get required output for example 10.5 becomes 10.
  console.log(
    `Median for given arrays nums1 and nums2 of length ${m} and ${n} respectively is ${Math.floor(
      median
    )} `
  );
}

const m = 12;
const n = 10;
//calling function with parameters m and n
sortedArray(m, n);
