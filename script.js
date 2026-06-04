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
});

window.services = [
  {
    id: "website-development",
    title: "Website Development",
    description: "Custom responsive websites for your brand",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300",
    price: "₹15,000",
    unit: "Project",
    specs: {
      "Service Mode": "Online / Remote",
      "Technology": "React, Node.js, HTML5",
      "Delivery Time": "2-4 Weeks",
      "Maintenance": "1 Year Free",
      "Mobile Responsive": "Yes"
    },
    longDesc: "We provide high-quality website development services tailored to your brand. Our responsive websites ensure an optimal viewing experience across a wide range of devices. From simple landing pages to complex e-commerce platforms, we deliver robust and scalable web solutions."
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400&h=300",
    price: "₹40,000",
    unit: "Project",
    specs: {
      "Platform": "Android & iOS",
      "Technology": "React Native / Flutter",
      "Delivery Time": "1-3 Months",
      "Source Code Included": "Yes",
      "UI/UX Design": "Included"
    },
    longDesc: "Transform your business with cutting-edge mobile applications. We build cross-platform apps that work seamlessly on both Android and iOS devices, reducing development time and cost while maintaining native-like performance."
  },
  {
    id: "graphics-designing",
    title: "Graphics Designing",
    description: "Professional logos, banners, and digital assets",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400&h=300",
    price: "₹5,000",
    unit: "Package",
    specs: {
      "Service Type": "Logo, Social Media, Branding",
      "Software": "Adobe Illustrator, Photoshop",
      "Revisions": "Up to 3",
      "Delivery Format": "PNG, JPG, Vector (SVG/EPS)",
      "Delivery Time": "3-5 Days"
    },
    longDesc: "Enhance your brand's visual identity with our professional graphic design services. We craft stunning logos, engaging social media posts, marketing materials, and digital assets that capture your audience's attention."
  },
  {
    id: "animated-videos",
    title: "Animated Videos",
    description: "Engaging 2D/3D explainer and promo videos",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80&w=400&h=300",
    price: "₹10,000",
    unit: "Minute",
    specs: {
      "Animation Type": "2D / Motion Graphics / 3D",
      "Resolution": "1080p HD / 4K",
      "Voiceover": "Included (Multiple Languages)",
      "Scriptwriting": "Available on request",
      "Delivery Time": "1-2 Weeks"
    },
    longDesc: "Tell your brand's story effectively through high-quality animated videos. Ideal for product explainers, marketing campaigns, and educational content, our animations simplify complex ideas and drive better engagement."
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "Targeted campaigns and newsletter management",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=300",
    price: "₹3,000",
    unit: "Month",
    specs: {
      "Campaigns per Month": "Up to 4",
      "List Management": "Included",
      "Analytics & Reporting": "Weekly",
      "Template Design": "Custom HTML Templates",
      "Platform": "MailChimp, Brevo, Custom SMTP"
    },
    longDesc: "Reach your customers directly in their inbox with tailored email marketing campaigns. We design engaging newsletters, promotional emails, and automated sequences to boost your conversions and customer retention."
  },
  {
    id: "whatsapp-marketing",
    title: "Whatsapp Marketing",
    description: "Bulk messaging and automation services",
    image: "https://images.unsplash.com/photo-1636751364472-12bfad09b451?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=400&h=300",
    price: "₹2,500",
    unit: "Campaign",
    specs: {
      "Message Volume": "Up to 10,000 msgs",
      "Delivery Rate": "99% Assured",
      "Media Support": "Images, Videos, PDF",
      "API Integration": "Available",
      "Reporting": "Detailed Analytics"
    },
    longDesc: "Leverage the power of WhatsApp to instantly connect with your audience. We provide bulk messaging, official WhatsApp Business API integration, and chatbot automation to handle customer queries efficiently."
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "SEO, SEM, and social media growth strategies",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹12,000",
    unit: "Month",
    specs: {
      "Services Included": "SEO, SMM, PPC Setup",
      "Social Platforms": "Facebook, Instagram, LinkedIn",
      "Keyword Targets": "Up to 20 Primary",
      "Content Creation": "12 Posts/Month",
      "Reporting": "Monthly ROI Tracking"
    },
    longDesc: "A complete 360-degree digital marketing solution to establish your online presence. From search engine optimization to running high-performing ads on Facebook and Google, we drive targeted traffic and generate quality leads."
  },
  {
    id: "sms-marketing",
    title: "SMS Marketing",
    description: "High-conversion promotional SMS campaigns",
    image: "https://images.unsplash.com/photo-1776797391265-01a0490d4c99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=400&h=300",
    price: "₹1,500",
    unit: "10k SMS",
    specs: {
      "SMS Type": "Promotional / Transactional",
      "Sender ID": "Custom (6 Characters)",
      "Delivery Route": "Premium DLT Approved",
      "API": "REST API Available",
      "Language Support": "Regional Languages"
    },
    longDesc: "Send instant notifications, alerts, and promotional messages via reliable SMS gateways. We ensure high delivery rates, DLT registration assistance, and easy-to-use APIs for integrating SMS into your own software."
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Custom business software and CRM solutions",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400&h=300",
    price: "₹50,000",
    unit: "Project",
    specs: {
      "Software Type": "CRM, ERP, Web App",
      "Architecture": "Cloud-based / On-Premise",
      "Database": "MySQL, PostgreSQL, MongoDB",
      "Security": "SSL, Data Encryption",
      "Support": "3 Months Free Maintenance"
    },
    longDesc: "Streamline your business operations with our custom software solutions. We specialize in building scalable enterprise applications, CRMs, inventory management systems, and specialized tools tailored to your unique workflow."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const productsGrid = document.getElementById("products-grid");

  const renderServices = (filterText = '') => {
    if (!productsGrid) return;
    
    const filteredServices = window.services.filter(service => 
      service.title.toLowerCase().includes(filterText.toLowerCase()) || 
      service.description.toLowerCase().includes(filterText.toLowerCase())
    );
    
    productsGrid.innerHTML = filteredServices.map(service => `
      <div class="product-card" onclick="window.location.href='/service.html?id=${service.id}'">
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

    if (filteredServices.length === 0) {
      productsGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #6b7280; font-size: 1.1rem;">No services found matching your search.</div>';
    }
  };

  if (productsGrid) {
    renderServices();
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderServices(e.target.value);
    });
  }
});
