function duplicates(arr) {
	var result = [];
  var numbers = {};
  var strings = {};
  
  for (var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number'){
      if(!numbers[arr[i]]) {
        numbers[arr[i]] = 1;
      } else {
        numbers[arr[i]]++;
      }
    } else {
        if(!strings[arr[i]]) {
          strings[arr[i]] = 1;
        } else {
          strings[arr[i]]++;
        }
    }
  }

  for(var key in numbers) {
    if (numbers[key] !== 1) {
      result.push(+key);
    }
  }

  for (var str in strings) {
    if(strings[str] !== 1) {
      result.push(str);
    }
  }
  
return result;
}

duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '1', '1']);



var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

Object.prototype.hash = function(string) {
  var result = this;
  var path = string.split('.');
  for (var i = 0; i < path.length; i++) {
    result = result[path[i]];
  }
  return result ? result : undefined;
}

obj.hash('person.history.bio');


var a = +prompt('Pls enter A?', '');
switch(a) {
  case 0:
    alert(0);
    break;
  case 1:
     alert(1);
    break;
  case 2:
  case 3:
    alert('2, 3');
    break;
}

var i;
for (i = 0; i <= 10; i++){
  if (i % 2 == 0){
      console.log(i);
  }
}

var i, j='', bar = 7;
for (i = 0; i< bar; i++){
  console.log(i);
}

var i = 0;
while (i < 3){
  alert ("number" + i + "!");
  i++;
}


function happyBirthday(user) {
  for(var i = 0; i < 2; i++) {
    console.log('Happy bithday to you!');
  }
  console.log('Happy birthday dear' + ' ' + user + '!');
  console.log('Satan will bless you)!');
}

happyBirthday('Dimon');


var result = '';
var x = 1;
for(var i = 1; i <= 7; i++) {
  for (var j = 1; j <= x; j++) {
    result += '#';
  }
  result += '\n';
  x++;
}

console.log(result);


function sumTo(n) {
  if (!n) {
    return 0;
  }
  else if (n === 1) {
    return 1;
  } else {
    return sumTo(n - 1) + n;
  }
}

sumTo(0);


function sumTo(n) {
  var result = 0;
  if (!n) {
    return 0;
  }
  
  else if (n === 1) {
    result += 1;
  } else {
    for (var i = 1; i <= n; i++) {
      result += i;
    }
    return result;
  }
}

sumTo(3);



function sumTo(n) {
  return (1 + n) / 2 * n;
}
sumTo(3);


function fact(n) {
  return n <= 0 ? 'Only integer more or equals 1' : n === 1 ? 1 : n * fact(n - 1);
}

fact(3);


var user = {};
user.name = 'Sergey';
user.surname = 'Petrov';
user.name = 'Andrey';
user.age = 30;
delete user.name;
console.log(user);

/*--------------------------*/

function isEmpty(obj) {
  for(var key in obj) {
    if(obj[key]) {
      return false;
    }
  }
  return true;
}

var todoList = {};
console.log(isEmpty(todoList));

/*--------------------------*/
var salaries = {
  'junior': 1000,
  'middle': 2500,
  'senior': 3500,
  'lead': 5000
}

function salariesSum(obj) {
  var result = 0;
  for(var key in obj) {
    result += obj[key];
  }
  return result;
}
salariesSum.toString();

salariesSum(salaries);
/*--------------------------*/
function sum() {
  var args = Array.prototype.slice.apply(arguments);
  return args.reduce(function(a, b) {return a + b;});
}

function spread(f) {
    return f.apply(null, arguments[1]);
}

spread(sum, [1, 2, 3]);

/*--------------------------*/
solution(1, 2, 3) // returns false
solution(1, 2, 3, 2) // returns true
solution('1', '2', '3', '2') // returns true

function solution() {
  var args = Array.prototype.slice.apply(arguments);
  for (var i = 0; i < args.length; i++) {
    for (var j = i + 1; j < args.length; j++) {
      if(args[i] === args[j]) {
        return true;
      }
    }
  }
  return false;
}

solution(1, 2, 3);

/*--------------------------*/


function returnLastOne(arr) {
  return arr[arr.length - 1];
}

/*--------------------------*/

function pushArgument(arr, arg) {
  var result = arr;
  result.push(arg);
  return result;
}
/*--------------------------*/

var fruits = ['apple', 'orange'];
fruits.push('kiwi');
fruits[fruits.length - 2] = 'pear';
console.log(fruits.shift());
fruits.splice(0, 0, 'apricot', 'peach');
console.log(fruits);

/*--------------------------*/
function getRandom(arr) {
  var prepared = arr;
  var randomFigure = Math.floor(Math.random() * prepared.length);
  return prepared[randomFigure];
}

z = [1, 2, 3, 4, 5, 6, 7];

getRandom(z);

/*--------------------------*/
z = [1, 2, 3, 4, 5, 6, 7];
function find(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === value) {
      return i;
    }
  }
  return -1;
}

find(z, 1);

/*--------------------------*/
z = [1, 2, 3, 4, 5, 6, 7];
function find(arr, value) {
  return arr.indexOf(value);
}

find(z, 1);

/*--------------------------*/

function filterRange(arr, a, b) {
   return arr.filter(function(value) {
    return (value >= a) && (value <= b);
  });
}

z = [1, 2, 3, 4, 5, 6, 7];

filterRange(z, 3, 6);

/*--------------------------*/

var obj = {
  className: 'open menu'
};

function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];
  for (var i = 0; i < classes.length; i++) {
    if(classes[i] == cls) return;
  }
  classes.push(cls);
  obj.className = classes.join(' ');
}

addClass(obj, 'view');
console.log(obj.className);

/*--------------------------*/

var calculator = {};

calculator.read = function() {
  this.first = +prompt('First number?');
  this.second = +prompt('Second number?');
};

calculator.sum = function() {
  return this.first + this.second;
}

calculator.mul = function() {
  return this.first * this.second;
}

calculator.read();
console.log(calculator);

/*--------------------------*/
var a = new Boolean(false);
console.log(a);

/*-----------------------------------*/

function work(a) {

}

function makeLogging(f, log) {
  function wrapper(a) {
    log.push(a);
    return f.call(this, a);
 }
  return wrapper;
}

var log = [];
work = makeLogging(work, log);

//------------------------------------

function User() {
  
  this.setFirstName = function(newFirstName) {
    firstName = newFirstName;
  }

  this.setSurname = function(newSurname) {
    surname = newSurname;
  }

  this.getFullName = function() {
    return firstName + ' ' + surname;
  }
}

var user = new User();
user.setFirstName('Петя');
user.setSurname('Иванов');
alert(user.getFullName());
