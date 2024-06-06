document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("itemForm");
    const formStatus = document.getElementById("form-status");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const itemName = form.elements.itemName.value;
      const itemPrice = form.elements.itemPrice.value;
      const itemDescription = form.elements.itemDescription.value;
      // const itemImage = form.elements.itemImage.files[0]; // Get the uploaded file


      // Create an object to represent the item
      const newItem = {
        name: itemName,
        price: itemPrice,
        description: itemDescription,
        // image: itemImage
      };
  
      // Get existing items from local storage or initialize an empty array
      let items = JSON.parse(localStorage.getItem("items")) || [];
  
      // Add the new item to the array
      items.push(newItem);
  
      // Save the updated array back to local storage
      localStorage.setItem("items", JSON.stringify(items));
  
      // Reset the form after submission
      form.reset();
  
      // Optional: Display a message or update UI to indicate success
      formStatus.innerText = "form submite";
    });
  });