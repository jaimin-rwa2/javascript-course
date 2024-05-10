var ul = document.createElement('ul');

var users = [
    { name: "Jaimin", age: 23, student: false },
    { name: "John", age: 30, student: true },
    { name: "Alice", age: 25, student: true }
];


const listData = []

users.forEach(function(user) {
    listData.push(`
    <li>${user.name}
        <ul>
            <li>age :${user.age}</li>
            <li>is student :${user.student}</li>
        </ul>
    </li>`);
});

ul.innerHTML = listData.join("\n");
document.getElementById('listContainer').appendChild(ul);