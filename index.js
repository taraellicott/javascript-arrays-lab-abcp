const app = "I don't do much."


kittens = ["Milo", "Otis", "Garfield"]; 


function destructivelyAppendKitten(name) {
  kittens.push(name);
}


function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}


function destructivelyRemoveLastKitten() {
  kittens.pop();
}


function destructivelyRemoveFirstKitten() {
  kittens.shift();
}


function appendKitten(name) {
  
}

function prependKitten(name) {
  
}

function removeLastKitten() {
  return kittens.slice(0, -1);
}

function removeFirstKitten() {
 return kittens.slice(1, -1);
}