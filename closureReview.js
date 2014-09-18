var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above your given a callFriend function, that returns another function. 
//Do what you need with the code above in order to console.log 'Calling Jake at 435-215-9248'

var callFriend = function(){
  var friend = 'Jake';
  var number = "435-215-9248"
  var callF;
  var callF = function(number){
    return 'Calling ' + friend + ' at ' + number;
    

  }
  return callF(number);
};
console.log(callFriend())

//This works, but how do I hide the number in it?

Some Progress
var callFriend = function(){
  var friend = 'Jake';
  var number;
  var callF = function(number){
    number= "435-215-9248";
    return number;
  }
   return 'Calling ' + friend + ' at ' + number;
};
console.log(callFriend())