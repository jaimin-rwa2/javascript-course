// Create a new unordered list element
var ul = document.createElement('ul');

// Array of objects
var users = [
    { name: "Jaimin", age: 23, student: false },
    { name: "John", age: 30, student: true },
    { name: "Alice", age: 25, student: true }
];

// Iterate over each object in the array
users.forEach(function(user) {
    // Create a new list item for each object
    var li = document.createElement('li');
    
    // Construct the content of the list item using object properties
    li.textContent = 'Name: ' + user.name + ', Age: ' + user.age + ', Student: ' + user.student;
    
    // Append the list item to the unordered list
    ul.appendChild(li);
});

// Append the unordered list to the div with id 'listContainer'
document.getElementById('listContainer').appendChild(ul);
