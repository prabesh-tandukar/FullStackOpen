//In functional programming languages Functions are values
//Higher order funtion
//In javascript we can assign a function to a variable and then assign it to another variable as well

//Higher order function
function square(x) {
  return x * x;
}

const sqr = function (x) {
  return x * x;
};

console.log(sqr(2));

const copy = sqr;

console.log(copy(4));

const animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];

const dogs = animals.filter(function (animal) {
  return animal.species === "dog";
});

console.log(dogs);
