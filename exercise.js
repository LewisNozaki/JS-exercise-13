"use strict";

// Solution 1
const dirReduc = arr => {  
  let newArr = arr;
  
  const removePairs = (arr1) => {
    let count = 0;
    
    arr1.forEach((direction, index) => {
      if (direction === "NORTH" && arr1[index + 1] === "SOUTH") {
        arr1[index] = 0;
        arr1[index + 1] = 0;
        count++;
      } else if (direction === "SOUTH" && arr1[index + 1] === "NORTH") { 
        arr1[index] = 0;
        arr1[index + 1] = 0;
        count++;
      } else if (direction === "WEST" && arr1[index + 1] === "EAST") { 
        arr1[index] = 0;
        arr1[index + 1] = 0;
        count++;
      } else if (direction === "EAST" && arr1[index + 1] === "WEST") { 
        arr1[index] = 0;
        arr1[index + 1] = 0;
        count++;
      }
    });
    
    newArr = arr1.filter(e => e !== 0);
    
    if (count > 0) {
      removePairs(newArr);
    }
    
    return newArr;
  }
  
  return removePairs(newArr);
}

// Solution 2
function isOppo(dir1,dir2) {
    if (dir1 + dir2 === 'SOUTHNORTH') return true;
    if (dir1 + dir2 === 'NORTHSOUTH') return true;
    if (dir1 + dir2 === 'EASTWEST') return true;
    if (dir1 + dir2 === 'WESTEAST') return true;
    return false;
}
  
function dirReduc(arr){
  var len = arr.length
  for (var i = 0; i < len - 1; i++) {
    if (isOppo(arr[i], arr[i+1])) {
      arr.splice(i,2);
      return dirReduc(arr);
    }
  }
  return arr;
}

// Solution 3
function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}

// This is O(n^2), which is not great. Every time it runs replace it has to read in the entire string, and it has to do this an amount of times that is in worst-case proportionate to the entire string. For example, if my string is ['NORTH', 'WEST', 'NORTH', 'SOUTH', 'EAST', 'SOUTH'] or a similar construction, I can only remove one pair at a time. So for a string with N pairs, I have to read N times, and the lengths each time are (N), (N-1), (N-2), etc.
