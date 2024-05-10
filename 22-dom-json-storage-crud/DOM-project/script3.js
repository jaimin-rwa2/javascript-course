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
    // Create a new list item for the name
    var li = document.createElement('li');
    li.textContent = user.name;
    
    // Create a nested unordered list for age and student
    var subUl = document.createElement('ul');
    
    // Add age as a sub-item
    var ageLi = document.createElement('li');
    ageLi.textContent = 'Age: ' + user.age;
    subUl.appendChild(ageLi);
    
    // Add student status as a sub-item
    var studentLi = document.createElement('li');
    studentLi.textContent = 'Student: ' + (user.student ? 'Yes' : 'No');
    subUl.appendChild(studentLi);
    
    // Append the nested unordered list to the main list item
    li.appendChild(subUl);
    
    // Append the list item to the unordered list
    ul.appendChild(li);
});

// Append the unordered list to the div with id 'listContainer'
document.getElementById('listContainer').appendChild(ul);
