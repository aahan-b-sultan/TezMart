document.addEventListener("DOMContentLoaded", () => {
  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");
  const formsWrapper = document.querySelector(".auth-forms-wrapper");
  const loginForm = document.getElementById("form-login");
  const signupForm = document.getElementById("form-signup");
  
  const loginError = document.getElementById("login-error");
  const signupError = document.getElementById("signup-error");

  // Tab Switching Logic
  tabLogin.addEventListener("click", () => {
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
    formsWrapper.classList.remove("show-signup");
  });

  tabSignup.addEventListener("click", () => {
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
    formsWrapper.classList.add("show-signup");
  });

  // Database Simulator (using sessionStorage)
  const getUsers = () => JSON.parse(sessionStorage.getItem("tezmart_users") || "[]");
  const setUsers = (users) => sessionStorage.setItem("tezmart_users", JSON.stringify(users));

  // Pre-populate with dummy data if empty so login works for a test user
  const users = getUsers();
  if (users.length === 0) {
    users.push({ phone: "9876543210", email: "test@example.com", password: "password123", name: "Test User" });
    setUsers(users);
  }

  // Handle Signup
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    signupError.innerText = "";
    
    const phone = document.getElementById("signup-phone").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    
    if (!phone || !email || !password) {
      signupError.innerText = "Please fill out all fields.";
      return;
    }

    const currentUsers = getUsers();
    if (currentUsers.some(u => u.email === email || u.phone === phone)) {
      signupError.innerText = "A user with this email or phone number already exists.";
      return;
    }

    // Register user
    const newUser = { phone, email, password, name: email.split("@")[0] };
    currentUsers.push(newUser);
    setUsers(currentUsers);
    
    // Automatically log in the user and set session data
    sessionStorage.setItem("tezmart_current_user", JSON.stringify({ email: newUser.email, phone: newUser.phone, name: newUser.name }));
    window.location.href = "/";
  });

  // Handle Login
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginError.innerText = "";
    
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
    
    if (!email || !password) {
      loginError.innerText = "Please fill out all fields.";
      return;
    }

    const currentUsers = getUsers();
    const user = currentUsers.find(u => u.email === email && u.password === password);
    
    if (!user) {
      loginError.innerText = "Invalid credentials. Please attempt again.";
      return;
    }

    // Successful login 
    sessionStorage.setItem("tezmart_current_user", JSON.stringify({ email: user.email, phone: user.phone, name: user.name }));
    window.location.href = "/";
  });
});
