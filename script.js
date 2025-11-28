
// Q1: Empty Multidimensional Array

var data = [[], []]; // empty arrays inside big array

// Q2: Matrix Multidimensional Array

var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

// Q3: Counting 1 to 10

for (var i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

// Q4: Multiplication Table (User Input)

var num = +prompt("Enter table number:");
var len = +prompt("Enter table length:");

for (var i = 1; i <= len; i++) {
  document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

// Q5: Print Fruits Array

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}

// Q6a: Counting

for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

// Q6b: Reverse Counting

for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

// Q6c: Even Numbers
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

// Q6d: Odd Numbers
for (var i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}
// Q6e: Series (k numbers)

for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}
// Q7: Search Item in Array

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var user = prompt("Enter item to search:");

var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i] === user) {
    found = true;
    break;
  }
}

if (found) {
  alert(user + " is available.");
} else {
  alert(user + " is NOT available.");
}

// Q8: Largest Number

var nums1 = [24, 53, 78, 91, 12];
var max = nums1[0];

for (var i = 1; i < nums1.length; i++) {
  if (nums1[i] > max) {
    max = nums1[i];
  }
}

document.write("Largest number: " + max + "<br>");

// Q9: Smallest Number

var nums2 = [24, 53, 78, 91, 12];
var min = nums2[0];

for (var i = 1; i < nums2.length; i++) {
  if (nums2[i] < min) {
    min = nums2[i];
  }
}

document.write("Smallest number: " + min + "<br>");

// Q10: Multiples of 5 (1 to 100)

for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(i + ", ");
  }
}
