// Add this to your existing JavaScript file, preferably near the top
document.addEventListener('DOMContentLoaded', function() {
    // Menu items data - you can customize this with your actual menu
    const menuItems = {
      chinese: [
        { name: "Vegetable Manchurian", description: "Crispy vegetable balls in tangy sauce", price: "₹80" },
        { name: "Hakka Noodles", description: "Stir-fried noodles with vegetables", price: "₹60" },
        { name: "Fried Rice", description: "Hot and sweet corn soup", price: "₹120" },
        { name: "Momos", description: "Crispy paneer in spicy sauce", price: "₹80" }
      ],
      indian: [
        { name: "Vada Paav", description: "Crispy rice crepe with potato filling", price: "₹20" },
        { name: "Pav Bhaji", description: "Spicy vegetable mash with buttered buns", price: "₹80" },
        { name: "Misal", description: "Spicy chickpeas with fried bread", price: "₹70" },
        { name: "Dosa", description: "Yellow lentils tempered with spices", price: "₹80" }
      ],
      italian: [
        { name: "Margherita Pizza", description: "Classic pizza with tomato and mozzarella", price: "₹220" },
        { name: "Peri Peri Panner Pizza", description: "Creamy white sauce pasta", price: "₹190" },
        { name: "Burger", description: "Toasted bread with garlic butter", price: "₹120" },
        { name: "Nugets", description: "Layered pasta with cheese and meat sauce", price: "₹250" }
      ],
      desserts: [
        { name: "Chocolate Cake", description: "Warm chocolate brownie with ice cream", price: "₹150" },
        { name: "Brownies", description: "Soft milk balls in sugar syrup", price: "₹80" },
        { name: "Tiramisu", description: "Coffee-flavored Italian dessert", price: "₹180" },
        { name: "Ice Cream Sundae", description: "Vanilla ice cream with toppings", price: "₹120" }
      ],
      beverages: [
        { name: "Cold Coffee", description: "Iced coffee with milk and sugar", price: "₹100" },
        { name: "Masala Chai", description: "Spiced Indian tea", price: "₹50" },
        { name: "Fresh Lime Soda", description: "Refreshing lime drink", price: "₹60" },
        { name: "Lemonade", description: "Thick mango milkshake", price: "₹120" },
        { name: "Shake", description: "Thick and Creamy milkshake", price: "₹120" }
      ],
      dinner: [
        { name: "Thali Meal", description: "Complete dinner with 5 items", price: "₹70" },
        { name: "Special Dinner", description: "Includes soup, main course & dessert", price: "₹100" },
        { name: "Monthly Subscription", description: "30 days dinner package available", price: "₹3000" }
      ]
    };
  
    // Get modal elements
    const menuModal = document.getElementById('menuModal');
    const modalCategoryTitle = document.getElementById('modal-category-title');
    const modalDishesList = document.getElementById('modal-dishes-list');
    const closeModalBtn = document.querySelector('.close-modal');
  
    // Function to open modal with dishes
    function openMenuModal(category) {
      const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
      modalCategoryTitle.textContent = `${categoryName} Menu`;
      
      // Clear previous dishes
      modalDishesList.innerHTML = '';
      
      // Add dishes to modal
      menuItems[category].forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.innerHTML = `
          <h3>${dish.name}</h3>
          <p>${dish.description}</p>
          <p class="price">${dish.price}</p>
        `;
        modalDishesList.appendChild(dishCard);
      });
      
      // Show modal
      menuModal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  
    // Add click event to all view buttons
    document.querySelectorAll('.view-menu-btn').forEach(button => {
      button.addEventListener('click', function() {
        const categoryCard = this.closest('.category-card');
        const category = categoryCard.getAttribute('data-category');
        openMenuModal(category);
      });
    });
  
    // Also allow clicking anywhere on the card
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', function(e) {
        // Only proceed if not clicking on the button specifically
        if (!e.target.classList.contains('view-menu-btn')) {
          const category = this.getAttribute('data-category');
          openMenuModal(category);
        }
      });
    });
  
    // Close modal when clicking X
    closeModalBtn.addEventListener('click', function() {
      menuModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  
    // Close modal when clicking outside content
    window.addEventListener('click', function(e) {
      if (e.target === menuModal) {
        menuModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menuModal.style.display === 'block') {
        menuModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      this.querySelector('i').classList.toggle('fa-times');
      this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
      });
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testimonial-dot');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
      testimonials.forEach(testimonial => testimonial.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      testimonials[index].classList.add('active');
      dots[index].classList.add('active');
      currentTestimonial = index;
    }
    
    dots.forEach(dot => {
      dot.addEventListener('click', function() {
        showTestimonial(parseInt(this.dataset.index));
      });
    });
    
    // Auto slide testimonials
    setInterval(() => {
      let nextTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(nextTestimonial);
    }, 5000);
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });
    
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would typically send the form data to a server
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for subscribing to our newsletter!');
      this.reset();
    });
  });

 // Add to your script.js
document.querySelectorAll('.read-more').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // You can add functionality to:
    // 1. Open a modal with full blog content
    // 2. Navigate to individual blog pages
    // 3. Load content dynamically
    alert('Blog post will open here!');
  });
});
