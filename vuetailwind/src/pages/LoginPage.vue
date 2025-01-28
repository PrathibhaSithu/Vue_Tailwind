<template>
    <div class="flex justify-between w-4/5 h-4/5 bg-[#6e64c5] rounded-lg p-10 mx-auto mt-15">
      <div class="w-3/6 bg-white mr-10 p-8 pt-15 pb-15 border-2 border-[#1a1a4c] rounded-md flex flex-col justify-center">
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
  
      </div>
  
      <div class="w-1/2 rounded border-2 border-white bg-gradient-to-br from-[#6e64c5] to-[#02036f] flex flex-col justify-between text-white">
      <div class="flex flex-col items-center mt-20">
        <div class="flex items-center space-x-2">
          <img src="@/assets/images/flower.png" alt="Government Logo" class="w-14" />
        </div>
        <br/>
        <h2 class="text-4xl font-bold mb-9">Have an Account?</h2>
        <button
          class="border-2 border-white py-2 px-8 rounded-full font-bold hover:bg-white hover:text-hover-blue"
          @click="navigateToSignin" >
          Sign In
        </button>
      </div>
    </div>
  
    </div>
</template>
  
<script>
    import Swal from 'sweetalert2'; 
  
    import openEyeIcon from '@/assets/images/openeye.png';
    import closeEyeIcon from '@/assets/images/closeeye.png';
  
    export default {
      name: "LoginPage",
      data() {
        return {
          username: '',
          password: '',
          showPassword: false,
          openEyeIcon,
          closeEyeIcon,
        };
      },
      
      methods: {
      handleLogin() {
        if (this.username === 'UserName' && this.password === 'Password123') {
          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'You will be redirected to the Home Page shortly.',
            timer: 1500,
            showConfirmButton: false,
          }).then(() => {
            this.$router.push({ name: 'HomePage' });
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid Username or Password',
            confirmButtonText: 'Try Again',
          });
        }
      },
      
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
    },
  
    };
</script>