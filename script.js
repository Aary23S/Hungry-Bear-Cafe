
document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".category");
  const modal = document.querySelector(".modal");
  const closeModalButton = document.querySelector(".close-modal");
  const categoryTitle = document.getElementById("category-title");
  const foodItemsList = document.getElementById("food-items-list");

  const foodItems = {
    chinese: ["Noodles", "Fried Rice", "Momos", "Manchurian","Soups"],
    indian: ["Vada Pav", "Idli", "Dosa","Pav Bhaji","Misal"],
    // "fast-food": ["Burger", "Fries", "Pizza"],
    italian: ["Peri Peri Panner Pizza", "Burger", "Pasta","Fries","Nuggets"],
    desserts: ["Chocolate Cake", "Ice Cream", "Brownies"],
    beverages: ["Masala Tea", "Smoothie", "Lemonade"," Orange Juice"," Cold Coffee"," Hot Coffee"," Milkshake"," Iced Tea"," Green Tea"," Black Tea"],
    dinner :["Dinner Faciliy Available On The Monthly Subscription"],
  };

  // Function to filter categories and items based on the search query
  const filterMenu = (searchQuery) => {
    // Convert query to lowercase for case-insensitive search
    searchQuery = searchQuery.toLowerCase();

    // Filter categories
    categories.forEach(category => {
      const categoryTitle = category.querySelector("h2").textContent.toLowerCase();
      const categoryKey = category.getAttribute("data-category");
      const items = foodItems[categoryKey];

      // Filter items in each category
      const filteredItems = items.filter(item => item.toLowerCase().includes(searchQuery));

      // Update the category visibility based on matching items
      if (categoryTitle.includes(searchQuery) || filteredItems.length > 0) {
        category.style.display = "block";  // Show category
        category.querySelectorAll("li").forEach((li, index) => {
          li.style.display = filteredItems.includes(li.textContent) ? "block" : "none";  // Show matching items
        });
      } else {
        category.style.display = "none";  // Hide category if no match
      }
    });
  };

  // Event listener for the search bar
  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("input", () => {
    filterMenu(searchBar.value);  // Call filter function when user types
  });

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

 const themeToggleButton = document.getElementById("theme-toggle");

 // Check if dark mode is enabled from localStorage
 const isDarkMode = localStorage.getItem("darkMode") === "true";

 // Set the initial theme based on saved preference
 if (isDarkMode) {
   document.body.classList.add("dark-mode");
   themeToggleButton.textContent = "☀️";  
 } else {
   document.body.classList.remove("dark-mode");
   themeToggleButton.textContent = "🌙"; // Change button icon to indicate dark mode option
 }

 // Toggle dark mode when button is clicked
 themeToggleButton.addEventListener("click", () => {
   document.body.classList.toggle("dark-mode");

   // Save the user's preference in localStorage
   const isNowDarkMode = document.body.classList.contains("dark-mode");
   localStorage.setItem("darkMode", isNowDarkMode);

   // Update the button text to reflect the current mode
   themeToggleButton.textContent = isNowDarkMode ? "☀️" : "🌙";
 });



 
 let currentIndex = 0;
 const testimonials = document.querySelectorAll('.testimonial');
 const totalTestimonials = testimonials.length;

 const showTestimonial = (index) => {
   // Hide all testimonials
   testimonials.forEach((testimonial, i) => {
     testimonial.style.display = 'none';
   });

   // Show the selected testimonial
   testimonials[index].style.display = 'block';
 };

 // Show the first testimonial initially
 showTestimonial(currentIndex);

 // Handle the "Next" button click
 document.querySelector('.next-btn').addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % totalTestimonials;
   showTestimonial(currentIndex);
 });

 // Handle the "Prev" button click
 document.querySelector('.prev-btn').addEventListener('click', () => {
   currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
   showTestimonial(currentIndex);
 });

 // Auto rotate testimonials every 5 seconds
 setInterval(() => {
   currentIndex = (currentIndex + 1) % totalTestimonials;
   showTestimonial(currentIndex);
 }, 5000);
});
