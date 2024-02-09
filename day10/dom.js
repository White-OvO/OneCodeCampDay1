// dom is a programming interface for web doc. it represents HTML OR xml structure of a web page as a tree-like 


// accessing, traversing,and modifying dom elements

/* 

targeting elements: 

get elements by id 
*/
let Elemet = document.getElementById("Heaading");
console.log(Element); // <h1 id="Heading">Hello World!</h


// getElementsByClassName
let textElements = document.getElementsByClassName('text');
console.log(textElements);
console.log(textElements[0]); // first one
console.log(textElements[1]); // second one


// getElementsByTagName
let listItems = document.getElementsByTagName('li');
console.log(listItems);
console.log(listItems[0]); // first one
console.log(listItems[1]); // second one
console.log(listItems[2]); // third one
// querySelector (only gets the first applicable element)
let containerElement = document.querySelector("#container");
console.log("Query selector: ", containerElement);

// in context of multiple elements, only gets the first one
let queryListItems = document.querySelector('li')
console.log(queryListItems);



// get the parent element
let listParent = document.getElementById("list").parentNode;
console.log(listParent);

// get the children
let containerChildren = document.getElementById("container").children;
console.log(containerChildren);

// get the siblings
let secondListItem = document.querySelectorAll("p");
let previousSibling = secondListItem.previousSibling;
console.log(previousSibling);


// next sibling
let nextSibling = secondListItem.
nextElementSibling
console.log(nextSibling);

// Modify elements

// innerHTML (edit the content of an element) - renders HTML
headingElement.innerHTML = "<i>heading!</i>"

// textContent (edit the TEXT of an element) - doesn't render HTML
textElements[0].textContent = "<i>New paragraph!</i>";


// Setting attributes
headingElement.setAttribute("id", "newHeading");
headingElement.setAttribute("name", "coolHeading")
// Modify Styles
let btnElement = document.getElementById('btn');
btnElement.style.backgroundColor = "blue";
btnElement.style.color = "white";
/* Create Elements and Appending */
let newParagraph = document.createElement('p')
newParagraph.textContent = "This is a brand new paragraph!";
document.getElementById('container').appendChild(newParagraph)
/* Removing Elements */
let elementToRemove = document.querySelector('li');
elementToRemove.remove();
console.log(elementToRemove);