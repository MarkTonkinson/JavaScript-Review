/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var first = function(arr, cb){
  cb(arr[0]);
}


first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});






/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var last = function(arr, cb){
  var lastName = arr.length - 1;
  cb(arr[lastName]);
}

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//**********************COME BACK TO THIS ONE!!!!!!!!!!!!!!!!!****************************
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var contains(str, cb){
  var yes;
  if (str === "Colt") {
    var inArr = yes;
    cb(inArr);
  }
}

contains(names, 'Colt', function(yes){
  if(yes){
    alert('Colt is in the array');
  } else {
    alert('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//**************COME BACK TO THIS ONE*******************
var numbers = [1,2,3,4,5];

var map = function (arr, cb) {
    var num = [];
    for (var i = 0; i < arr.length; i++) {
        num.push(arr[i]);
    }
    cb(num);
};
//Produces a new array of values by mapping each value in list through a transformation function
map(, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var uniq = function(arr, cb){
  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j]){
        arr.splice(i,1);
        i--;
      }
    }
  }
  return cb(arr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var each = function(arr, cb){
  for(var i = 0; i < arr.length; i++) {
     cb(arr[i],arr.indexOf(arr[i]));
  }
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

var getUserById = function (id, cb){
  for(var i = 0; i < users.length; i++){
    if(users[i].id === id){
      cb(users[i])
    }
  }
}



getUserById('16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//***********COME BACK TO ME!!!!!*****************

//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];

var find = function(arr, cb){
  for(var i = 0; i < arr.length; i++){
   debugger;
    if(arr[i] % 2 === 0){
      var num = arr[i];
      break;
    }
  }
  cb(num);
}

find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})



