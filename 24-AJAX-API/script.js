// $(function () {
async function getAllEmployees() {
    
await $.ajax({
type: 'GET',
url: 'https://dummy.restapiexample.com/api/v1/employees',
dataType: 'json',
success: function(response) {
    console.log(response);
    },
error: function(xhr, status, error) {
console.error('Request failed with status:', status);
// console.error(error);
}
});   

}
getAllEmployees();
// });



// $(function () {
async function getSingleEmployees(id) {

    await $.ajax({
    type: 'GET',
    url: `https://dummy.restapiexample.com/api/v1/employees/${id}`,
    dataType: 'json',
    success: function(response) {
        console.log(response);
        },
    error: function(xhr, status, error) {
    console.error('Request failed with status:', status);
    // console.error(error);
    }
    });          
}
getSingleEmployees(1);