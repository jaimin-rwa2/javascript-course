// 1. How to LOG in JS

console.log("In JS file")

window.console.log("window is global value")


// 2. how to get HTML in JS

// const tag_with_id = document.getElementById("id")
// console.log("tag_with_id :-",tag_with_id);

// const tag_with_class = document.getElementsByClassName("class")
// console.log("tag_with_class :\n\t",tag_with_class);
// console.log("tag_with_class[0] :\n\t",tag_with_class[0]);
// console.log("tag_with_class[1] :\n\t",tag_with_class[1]);
// console.log("tag_with_class[2] :\n\t",tag_with_class[2]);

// const with_tag_name= document.getElementsByTagName("p")
// console.log("with_tag_name :\n\t",with_tag_name);
// console.log("with_tag_name[0] :\n\t",with_tag_name[0]);
// console.log("with_tag_name[1] :\n\t",with_tag_name[1]);
// console.log("with_tag_name[2] :\n\t",with_tag_name[2]);
// console.log("with_tag_name[3] :\n\t",with_tag_name[3]);

// const with_name= document.getElementsByName("jaimin")
// console.log("with_name :\n\t",with_name);
// console.log("with_name[0] :\n\t",with_name[0]);



// 3. how to intrect with HTML
const tag_with_id = document.getElementById("id")
console.log("tag_with_id :-",tag_with_id);
const id_tag_data = tag_with_id.innerText
console.log(id_tag_data);

const div_of_class = document.getElementById("div-of-class")
console.log("div_of_class :\n\t",div_of_class);
const div_of_class_inner_html = div_of_class.innerHTML
console.log("div_of_class_inner_html :\n\t",div_of_class_inner_html);

// attributes of elemets
const pTag2 = document.getElementsByTagName("p")[4]
console.log("pTag Name :\n\t", pTag2.getAttribute('name'))

const pTag = document.getElementsByTagName("p")[5]
console.log("pTag Befor :\n\t", pTag.getAttribute('data-custom'))
pTag.setAttribute('data-custom', 'customData');
console.log("pTag after :\n\t", pTag.getAttribute('data-custom'))


// 3. how to user inputs
function promptFunc(){
    const promptData = prompt()
    console.log(promptData)
}

function confirmFunc(){
    const promptData = confirm()
    console.log(promptData)
}


// 4. global objec in JS
document.getElementById("")
window.document.getElementById("")  // `document object is also come under window object`


window.sayHi = ()=>{
    console.log('hi!');
}