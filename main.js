document.getElementsByTagName("h1")[0].innerHTML = "Lab Assignment 12";
document.getElementsByTagName("h1")[0].style.color = "blue";

hr = document.createElement("HR");
document.body.appendChild(hr);

let h2 = document.createElement("h2");
h2.innerText = "Task"
h2.style.color = "red";
document.body.appendChild(h2);

let p1 = document.createElement("p");
p1.innerText = "In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p1);

let ul1 = document.createElement("ul");
let li1 = document.createElement("li");
li1.innerText = "find elements in the DOM (<b>5 points</b>);";
li1.style.color = "green";
let li2 = document.createElement("li");
li2.innerText = "create/add/remove elements (<b>5 points</b>);";
li2.style.color = "purple";
let li3 = document.createElement("li");
li3.innerText = "change content of the elements (<b>5 points</b>);";
li3.style.color = "green";
let li4 = document.createElement("li");
li4.innerText = "change styles of the elements (<b>5 points</b>);";
li4.style.color = "purple";
let li5 = document.createElement("li");
li5.innerText = "change attributes of the elements (<b>5 points</b>);";
li5.style.color = "green";
let li6 = document.createElement("li");
li6.innerText = "change classes of the elements (<b>5 points</b>).";
li6.style.color = "purple";

ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(li4);
ul1.appendChild(li5);
ul1.appendChild(li6);

document.body.appendChild(ul1);



let p2 = document.createElement("p");
let a1 = document.createElement("a");
p2.innerText = 'Basic necessary code can be found in the supplementary materials to the Lecture 12 via this ';
p2.style.display ='inline';

a1.innerText = ' link';
a1.href = "https://github.com/yessen/nu_web_programming/tree/main/week12";

document.body.appendChild(p2);
document.body.appendChild(a1);

document.body.appendChild(hr);


let h3 = document.createElement("h2");
h3.innerText = "Submission";
h3.style.color = "red";
document.body.appendChild(h3);

let p3 = document.createElement("p");
p3.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(p3);

let ul2 = document.createElement("ul");
let li21 = document.createElement("li");
li21.innerText = "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>).";
li21.style.color = "green";
let li22 = document.createElement("li");
li22.innerText = "Clone this repository to your local machine and work inside it.";
li22.style.color = "purple";
let li23 = document.createElement("li");
li23.innerText = "Create a new HTML file, called <b>index.html</b>, which has only one <h1> tag with \"Hello, World!\" message (<b>1 point</b>).";
li23.style.color = "green";
let li24 = document.createElement("li");
li24.innerText = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).";
li2.style.color = "purple";
let li25 = document.createElement("li");
li25.innerText = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
li25.style.color = "green";
let li26 = document.createElement("li");
li26.innerText = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
li26.style.color = "purple";
let li27 = document.createElement("li");
li27.innerText = " After you finish your work, submit it to the Github (<b>2 points</b>).";
li27.style.color = "green";






ul2.appendChild(li21);
ul2.appendChild(li22);
ul2.appendChild(li23);
ul2.appendChild(li24);
ul2.appendChild(li25);
ul2.appendChild(li26);
ul2.appendChild(li27);

document.body.appendChild(ul2);

console.log(document);