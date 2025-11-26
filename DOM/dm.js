
// accessing the elements 
let todoApp=document.querySelector(".todo")
console.log(todoApp)

// creating the Li ELEMENt 
let liELe=document.createElement("li")
console.log(liELe)
// adding the content to it
liELe.textContent="item☺😻"

// methods to add element to the parent or document

// adding to last 
// todoApp.appendChild(liELe) 
// todoApp.appendChild("last element") //Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
// todoApp.append(liELe)
// todoApp.append("lastElement")

// adding to the first
// todoApp.prepend(liELe)

// removing the Element
// todoApp.removeChild(liELe)

// other methods to add
// todoApp.insertAdjacentHTML("afterbegin","<li>hello</li>")
// todoApp.insertAdjacentHTML("beforebegin","<li>hello</li>")
// todoApp.insertAdjacentHTML("beforeend","<li>hello</li>")
// todoApp.insertAdjacentHTML("afterend","<li>hello</li>")

// todoApp.insertBefore(liELe,todoApp.lastElementChild.previousElementSibling)