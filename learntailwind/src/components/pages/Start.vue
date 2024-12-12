<template>
    <div class="login-container">
      <div class="login-form">
        <h2>Login</h2>
        <div class="input-group">
          <label for="username">User Name</label>
          <div class="input-container">
            <img src="@/assets/user.png" alt="User Icon" class="user-icon" />
            <input type="text" id="username" v-model="username" placeholder="Enter your username" />
          </div>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <div class="input-container">
            <img src="@/assets/pwd.png" alt="Password Icon" class="user-icon" />
            <input
              :type="showPassword ? 'text' : 'password'"
              class="input"
              v-model="password"
              placeholder="Enter your password"
            />
            <span class="toggle-password-icon" @click="togglePasswordVisibility">
              <img :src="showPassword ? openEyeIcon : closeEyeIcon" alt="Toggle Password Visibility" />
            </span>
          </div>
        </div>
        <button class="login-button" @click="handleLogin">Login</button>
        <p class="create-account" @click="navigateToSignup">_Create an Account_</p>
      </div>
      <div class="login-image">
        <img src="@/assets/mof.png" alt="Government Building" />
        <div class="image-overlay">
          <div class="side-logo">
            <img src="@/assets/govlogo.png" alt="Government Logo" class="gov-logo" />
          </div>
          <div class="overlay-content">
            <div class="text-content">
              <h3>GOVERNMENT OF SRI LANKA</h3>
              <p class="lst-txt">DEPARTMENT OF GOVERNOR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
 
  export default {
    name: "Start",
  }
    
    
  </script>
  
  
  <style scoped>
  
  </style>
  
  
    