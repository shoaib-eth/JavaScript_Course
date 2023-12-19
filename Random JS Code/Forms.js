// Create a form element
const form = document.createElement("form");

// Set form attributes
form.setAttribute("method", "POST");
form.setAttribute("action", "/submit-form");

// Create form fields
const inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("name", "name");
inputName.setAttribute("placeholder", "Enter your name : ");

const inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("name", "email");
inputEmail.setAttribute("placeholder", "Enter your email : ");

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";

// Append form fields to the form element
form.appendChild(inputName);
form.appendChild(inputEmail);
form.appendChild(submitButton);

// Append the form element to the document body
document.body.appendChild(form);
