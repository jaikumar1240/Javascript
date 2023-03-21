// Remove Duplicate characters from String

function removeD(str) {
    let arr = str.split('');
    let set = new Set(arr);
    let res = Array.from(set).join('')
    console.log(res);
    return res;
}
// removeD('jjjaiieooooo3322')



// var x = 23;
// (function () {
//     var x = 43;
//     (function random() {
//         console.log(x);
//         x++;
//         console.log(x);
//         var x = 21;
//         console.log(x);
//     });
// })();
// console.log(x);



function randomFunc() {
    for (var i = 0; i < 2; i++) {
        setTimeout(() => console.log(i), 1000);
    }
}
// randomFunc();


//  Updated Array with r right Rotations
function rightRotation(arr, count) {
    let arr1 = arr.slice(0, arr.length - count);
    let arr2 = arr.slice(arr.length - count);
    console.log(arr2.concat(arr1));
    return arr2.concat(arr1)
}
// rightRotation([1,2,3,4,5,6],7)



//  Remove Duplicate characters from array of element using filter

function removeDupUseFilter(arr) {
    let test = arr.filter((value, index, arr) => {
        return arr.indexOf(value) === index
    })
    console.log(test);
}

// removeDupUseFilter([0, 1, 2, 3, 4, 5, 1, 2, 3, 4]);


// String reverse without reversing of individual words
function reverseStr() {
    str = "India is my country";
    res = str.split('').reverse().join('').split(' ').reverse().join(' ');
    console.log(res);
}
// removeDuplicates();



//  Number of days between 2 dates calculation
date1 = "2020-01-01", date2 = "2020-01-30"
let days = (new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24)
// console.log(days);



// Reverse of a nuber
let x = 1204;
arr = parseInt(x.toString().split('').reverse().join(''));
// console.log(arr);



//Leet code question ********* Not Working correctly need to fix **********

let str = 'abbcdabcdefg';
let checkArr = [];
let maxLen = 0;
for (let i = 0; i < str.length; i++) {
    if (checkArr.includes(str[i])) {
        // console.log(i);
        if (i > maxLen) maxLen = i;
        // console.log(str);
        // console.log('------');
        str = str.slice(i)
        checkArr = [];
        // console.log(str);
        i = 0;
    }
    else {
        checkArr.push(str[i]);
    }
}
// console.log(checkArr)
// console.log('*********************');
//Parenthesis Checker

function paranthesisCheck(string) {
    let arr = []
    obj = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let item of string) {
        if (obj[item]) {
            if (arr[arr.length - 1] == obj[item]) {
                arr.pop();
            }
            else {
                return false;
            }
        } else {
            arr.push(item);
        }
    }
    if (arr.length) return false;
    return true;
}
// console.log(paranthesisCheck('{()}'));



var createTargetArray = function (nums, index) {
    let arr = [];
    arr.length = nums.length;
    for (let i = 0; i < nums.length; i++) {
        startingArr = arr.slice(0, index[i])
        startingArr.push(nums[i]);
        endingArr = arr.slice(index[i], arr.length);
        console.log(startingArr, endingArr);
    }
    return arr;
}

// console.log(
// createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])
// );


var defangIPaddr = function (address) {
    let str = ''
    for (let item of address) {
        if (item != '.') {
            str = str.concat(item)
        }
        else {
            str = str.concat('[.]')
        }
    }
    console.log(str);
};
// defangIPaddr('1.1.22.1');


//palindrome check

var isPalindrome = function (x) {
    x = x.toString();
    for (let i = 0; i < parseInt(x.length / 2); i++) {
        if (x[i] !== x[x.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// console.log(isPalindrome('aba'))

let romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}
var romanToInt = function (s) {
    let arr = s.split('');
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (romanObj[arr[i]] < romanObj[arr[i + 1]]) {
            res += romanObj[arr[i + 1]] - romanObj[arr[i]]
            console.log(i);
            i++;
        } else {

            res += romanObj[arr[i]]
        }
    }
    return res;
};

// console.log(romanToInt("MCMXCIV"))

//common prefix
var longestCommonPrefix = function (strs) {
    let commonSTRArr = strs[0];
    for (let item of strs) {
        for (let i = 0; i < commonSTRArr.length; i++) {
            if (item[i] !== commonSTRArr[i]) {
                commonSTRArr = commonSTRArr.slice(0, i);
                console.log(commonSTRArr);
                break
            }
        }
    }
    return (commonSTRArr)
};
// console.log(longestCommonPrefix(["abb", "abc"]))


var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            if (needle == haystack.slice(i, needle.length + i)) {
                return i
            }
        }
    }
    return -1
};
// console.log(strStr("mississippi", 'issip'));


var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            // console.log(nums.slice(0, i - 1));
            nums = nums.slice(0, i).concat(nums.slice(i + 1));
            // nums.push('_')
            i--;
        }
    }
    console.log(nums);
    return nums;
};
// removeElement([3, 2, 2, 3], 3)

// convertintoObj
/**
 * 
 * @param {string[]} arr 
 * @returns 
 */
function convertToObj(arr) {
    return arr.reduce((prev, curr, index) => {
        prev[curr] = index;
        return prev;
    }, )
}

console.log(convertToObj(['a', 'b', 'c', 'd', 'e']))