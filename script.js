
// const navToggle = document.querySelector(".nav-toggle");
// const navLinks = document.querySelector(".nav-links");

// navToggle.addEventListener("click", () => {
//   navLinks.classList.toggle("show");
// });

document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".category");
  const modal = document.querySelector(".modal");
  const closeModalButton = document.querySelector(".close-modal");
  const categoryTitle = document.getElementById("category-title");
  const foodItemsList = document.getElementById("food-items-list");

  const foodItems = {
    chinese: ["Noodles", "Fried Rice", "Spring Rolls","Fried Rice","Manchurian"],
    indian: ["Butter Chicken", "Paneer Tikka", "Biryani"],
    "fast-food": ["Burger", "Fries", "Pizza"],
    italian: ["Margherita Pizza", "Spaghetti Carbonara", "Lasagna"],
    desserts: ["Chocolate Cake", "Ice Cream", "Brownies"],
    beverages: ["Coffee", "Smoothie", "Lemonade"]
  };

  categories.forEach(category => {
    category.addEventListener("click", () => {
      const categoryKey = category.getAttribute("data-category");
      const items = foodItems[categoryKey];
      
      categoryTitle.textContent = category.querySelector("h2").textContent;
      foodItemsList.innerHTML = items.map(item => `<li>${item}</li>`).join("");

      modal.style.display = "flex"; // Show the modal
    });
  });

  closeModalButton.addEventListener("click", () => {
    modal.style.display = "none"; // Hide the modal
  });

  // Close modal when clicking outside of the modal content
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
