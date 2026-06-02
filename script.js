document.addEventListener("DOMContentLoaded", () => {
  const productsGrid = document.getElementById("products-grid");
  
  // Authentication check and UI population
  const currentUserStr = sessionStorage.getItem("tezmart_current_user");
  const topUserMenu = document.getElementById('top-user-menu');
  const topUserName = document.getElementById('top-user-name');
  const userNavContainer = document.getElementById('user-nav-container');
  const topLogoutBtn = document.getElementById('top-logout-btn');
  const profileAvatar = document.querySelector('.avatar');
  const profileName = document.querySelector('.user-info h3');
  const logoutBtn = document.getElementById("logout-btn");
  const proLink = document.querySelector('.pro-link');

  if (currentUserStr) {
    const user = JSON.parse(currentUserStr);
    
    // Update top nav
    if (topUserName) {
      topUserName.innerText = `Hi ${user.name} \u25BC`;
    }
    if (topUserMenu) {
      topUserMenu.href = "#"; // Prevent going to login if logged in
    }
    if (userNavContainer) {
      userNavContainer.classList.add('logged-in');
    }
    
    // Update sidebar profile
    if (profileAvatar) {
      profileAvatar.innerText = user.name.charAt(0).toUpperCase();
      profileAvatar.style.backgroundColor = "#ffcc00";
    }
    if (profileName) {
      profileName.innerText = user.name;
    }
    if (logoutBtn) {
      logoutBtn.style.display = "flex";
    }
    if (proLink) {
      proLink.style.display = "inline";
    }
  } else {
    // Guest state
    if (topUserName) {
      topUserName.innerText = "Sign In";
    }
    if (topUserMenu) {
      topUserMenu.href = "/login.html";
    }
    if (userNavContainer) {
      userNavContainer.classList.remove('logged-in');
    }
    if (profileAvatar) {
      profileAvatar.innerText = "?";
      profileAvatar.style.backgroundColor = "#ccc";
    }
    if (profileName) {
      profileName.innerText = "Guest User";
    }
    if (logoutBtn) {
      logoutBtn.style.display = "none";
    }
    if (proLink) {
      proLink.style.display = "none"; // Option to hide upgrade link for guests
    }
  }

  // Logout Logic
  const handleLogout = (e) => {
    if (e) e.preventDefault();
    sessionStorage.removeItem("tezmart_current_user");
    window.location.reload(); // Reload instead of redirecting
  };

  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout);
  }

  if (topLogoutBtn) {
    topLogoutBtn.addEventListener("click", handleLogout);
  }

  const services = [
    {
      title: "Website Development",
      description: "Custom responsive websites for your brand",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      title: "Graphics Designing",
      description: "Professional logos, banners, and digital assets",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      title: "Animated Videos",
      description: "Engaging 2D/3D explainer and promo videos",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      title: "Email Marketing",
      description: "Targeted campaigns and newsletter management",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      title: "Whatsapp Marketing",
      description: "Bulk messaging and automation services",
      image: "https://images.unsplash.com/photo-1636751364472-12bfad09b451?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      title: "Digital Marketing",
      description: "SEO, SEM, and social media growth strategies",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "SMS Marketing",
      description: "High-conversion promotional SMS campaigns",
      image: "https://images.unsplash.com/photo-1776797391265-01a0490d4c99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      title: "Software Development",
      description: "Custom business software and CRM solutions",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400&h=300"
    }
  ];

  if (productsGrid) {
    productsGrid.innerHTML = services.map(service => `
      <div class="product-card">
        <div class="product-img-container">
          <img src="${service.image}" alt="${service.title}" class="product-img">
        </div>
        <div class="product-info">
          <h3 class="product-title">${service.title}</h3>
          <p class="product-company" style="margin-bottom: 12px; font-size: 0.9rem; white-space: normal;">${service.description}</p>
          <button class="contact-btn">
            <svg class="icon-small" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            Inquire Now
          </button>
        </div>
      </div>
    `).join('');
  }
});
