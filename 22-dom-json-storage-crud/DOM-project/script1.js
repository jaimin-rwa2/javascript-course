var ul = document.createElement('ul');

// Add some list items to the UL
var fruits = ['Apple', 'Orange', 'Banana', 'Grapes'];
fruits.forEach(function(fruit) {
    var li = document.createElement('li');
    li.textContent = fruit;
    ul.appendChild(li);
});

// Append the UL to the div with id 'listContainer'
document.getElementById('listContainer').appendChild(ul);