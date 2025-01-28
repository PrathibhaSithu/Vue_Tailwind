<template>
  <div class="flex justify-between w-4/5 h-4/5 bg-[#6e64c5] rounded-lg p-10 mx-auto mt-12">
    <div class="w-3/6 bg-white mr-10 p-8 border-2 border-[#1a1a4c] rounded-md flex flex-col justify-center">
      <h2 class="text-5xl font-bold text-[#1a1a4c] mb-8">Login</h2>
        
      <!-- Username -->
      <div class="mb-4">
        <label for="username" class="block text-xl text-[#1a1a4c] font-bold mb-2">User Name</label>
        <div class="relative">
          <img src="@/assets/images/user.png" alt="User Icon" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5" />
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            class="w-full pl-10 pr-4 py-2 border border-[#1a1a4c] rounded-full text-l focus:outline-none"
          />
        </div>
      </div>

      <!-- System Name -->
      <div class="mb-4">
        <label for="systemname" class="block text-xl text-[#1a1a4c] font-bold mb-2">System Name</label>
        <div class="relative">
          <img src="@/assets/images/system.png" alt="System Icon" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5" />
          <input
            type="text"
            id="systemname"
            v-model="systemName"
            placeholder="Enter your system name"
            class="w-full pl-10 pr-4 py-2 border border-[#1a1a4c] rounded-full text-l focus:outline-none"
          />
        </div>
      </div>

      <!-- Password -->
      <div class="mb-4">
        <label for="password" class="block text-xl text-[#1a1a4c] font-bold mb-2">Password</label>
        <div class="relative">
          <img src="@/assets/images/pwd.png" alt="Password Icon" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5" />
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full pl-10 pr-12 py-2 border border-[#1a1a4c] rounded-full text-l focus:outline-none"
          />
          <span @click="togglePasswordVisibility" class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <img :src="showPassword ? openEyeIcon : closeEyeIcon" alt="Toggle Password Visibility" class="w-5" />
          </span>
        </div>
      </div>

      <!-- Login Button -->
      <button
        class="w-1/2 bg-[#1a1a4c] text-white text-2xl py-2 px-4 rounded-full font-bold hover:bg-[#4a3db7] mx-auto mt-4 justify-center items-center"
        @click="handleLogin">
          Login
      </button>

      <p class="text-center text-[#1a1a4c] font-bold cursor-pointer mt-4" @click="navigateToSignup">
        Create an Account
      </p>
    </div>

    <div class="w-1/2 relative border-2 border-white rounded-md">
      <img src="@/assets/images/mof.png" alt="Government Building" class="w-full h-full object-cover rounded-md brightness-50" />

      <div class="absolute inset-0 flex flex-col items-center pt-12 space-y-4">
        <div class="flex items-center space-x-2">
          <img src="@/assets/images/govlogo.png" alt="Government Logo" class="w-14" />
        </div>

        <div class="text-white text-shadow text-center">
          <h3 class="text-xl font-bold">SYSTEM MANAGEMENT</h3>
          <p class="text-xl">DEPARTMENT OF INFORMATION TECHNOLOGY</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  // import Swal from 'sweetalert2'; 

  import openEyeIcon from '@/assets/images/openeye.png';
  import closeEyeIcon from '@/assets/images/closeeye.png';

  const axiosInstance = axios.create({
    baseURL: 'baseURL',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export default {
    data() {
      return {
        username: '',
        password: '',
        systemName: '',
        showPassword: false,
        openEyeIcon,
        closeEyeIcon,
      };
    },
    
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },

  //     async handleLogin() {
  //       try {
  //         // Create form-data payload
  //         const formData = new FormData();
  //         formData.append('username', this.username);
  //         formData.append('password', this.password);
  //         formData.append('systemName', this.systemName);

  //         // Send the POST request
  //         const response = await axiosInstance.post('/url', formData, {
  //           headers: {
  //             'Content-Type': 'multipart/form-data',
  //           },
  //         });

  //         if (response.status === 200 && response.data) {
  //           Swal.fire({
  //             icon: 'success',
  //             title: 'Login Successful!',
  //             text: 'You will be redirected to the home page shortly.',
  //             timer: 1500,
  //             showConfirmButton: false,
  //           }).then(() => {
  //             // Redirect to home page
  //             this.$router.push({ name: 'Home', query: { username: this.username } });
  //           });
  //         }
  //       } catch (error) {
  //         if (error.response && error.response.status === 401) {
  //           Swal.fire({
  //             icon: 'error',
  //             title: 'Login Failed',
  //             text: error.response.data.message || 'Invalid username or password',
  //             confirmButtonText: 'Try Again',
  //           });
  //         } else {
  //           Swal.fire({
  //             icon: 'error',
  //             title: 'An error occurred',
  //             text: 'Could not complete login. Please try again later.',
  //             confirmButtonText: 'OK',
  //           });
  //         }
  //         console.error('Login error:', error);
  //       }
  //     },

  //     navigateToSignup() {
  //       this.$router.push({ name: 'Signup' }); 
  //     },
  },

  };
</script>
