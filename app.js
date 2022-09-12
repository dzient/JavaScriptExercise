// David Zientara
// 9-7-2022
// An exercise in JavaScript and HTML
// An example function, written per the exercise's
// instructions
console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
function example()
{
  const firstName = "David";
  const lastName = "Zientara";
  const age = 52;
  const city = "Franklin Lakes";
  const pasttime = "trainspotting";

  var fullName = firstName + " " + lastName;

  console.log(fullName+"\n");
  // The same, only with a string literal:
  const firstName2 = `David`;
  const lastName2 = `Zientara`;
  var fullName2 = firstName2 + ` ` + lastName2;
  console.log(fullName2+"\n");
  //console.log(fullName+"\n");

  var myStory = `Hello. My name is ${fullName}. I currently live in ${city}. I enjoy ${pasttime} and coding!`

  console.log(myStory+"\n");
}

example();
// Exercise 2

// Exercise 3
