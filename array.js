// comment

//create an arry
//make it empty

var myarr = []

//create array size
var mybigarry = [1,1,1,1,1]

var array = []
array.length = 8

//gives arrray length
array.length

// possitions of items in array
// index
var superArr=['rock','bird',]
// 0 base

superArr[1]


// insert in the array
var suparr=[8]

suparr.push('end', 'my', 'pain')

//inserts to the beginning of the array 
suparr.unshift('OWO')


//remove 

var sArr = [1,2,3,4,45,6,6]
//removes the last element 
sArr.pop
//rem oves the first element
sArr.shift

// mutable are items that can be change 

//mutable 
delete sArr[2]

//imutable
sArr.slice(2)

//itterate going through an array, loops
var nums=[1,2,3,4,5,6,]

// for each
nums.forEach(function(num, index){
  console.log("index of:"+ index + "values"+ num)

})

//map 
nums.map(function(nums, index){
  console.log(num++)
})

//filter
nums.filter(function(num, index){
  console.log(num % 2 == 0)
})

// for
for (var index =0; inced < nums.length; index++){
  console.log(num,index)
}

// type checking
//checks for what data types is something\
typeof []
typeof 0
typeof 'hi'

//misc functions
var lastArr = ['roc', 'green', 'blue']

//returns a string of what the array looks like
lastArr.toString

// brings two values together
lastArr.join()

//reverses thee array
lastArr.reverse
