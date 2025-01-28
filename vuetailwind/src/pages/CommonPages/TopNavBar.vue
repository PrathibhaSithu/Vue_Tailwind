<template>
    <header class="bg-[#fab9dc] mt-2 py-3 shadow-lg mx-auto w-full">
      <nav class="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            class="w-20 cursor-pointer ml-5"
            src="@/assets/images/logo.png"
            alt="Logo"
          />
        </div>
        <div
          :class="[ 
            'nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ',
            menuOpen ? 'top-[15%] ' : ''
          ]"
        >
          <ul class="flex md:flex-row flex-col md:items-center md:gap-[2.5vw] gap-6 text-xl">
            <li class="relative">
              <a
                href="#"
                class="px-6 py-2 bg-gradient-to-r from-[#7F9AE6] to-pink-400 text-white  rounded-full shadow-md"
              >
                Home
              </a>
            </li>
            <li class="relative group">
              <a
                class="hover:text-purple-600 px-6 py-2 rounded-full transition-all duration-300"
                href="#"
              >
                About us
              </a>
            </li>
            <li class="relative group">
              <a
                class="hover:text-purple-600 px-6 py-2 rounded-full transition-all duration-300"
                href="#"
              >
                Products
              </a>
            </li>
            <li class="relative group">
              <a
                class="hover:text-purple-600 px-6 py-2 rounded-full transition-all duration-300"
                href="#"
              >
                Services
              </a>
            </li>
            <li class="relative group">
              <a
                class="hover:text-purple-600 px-6 py-2 rounded-full transition-all duration-300"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-6">
          <button class="bg-[#7F9AE6] text-white text-xl px-5 py-2 rounded-full hover:bg-[#735da8]">
            Button
          </button>
          <img
            :src="menuOpen ? closeIcon : menuIcon"
            alt="Menu Toggle"
            class="w-8 h-8 cursor-pointer md:hidden"
            @click="toggleMenu"
           />
        </div>
      </nav>
    </header>
</template>
  
<script>
  import menuIcon from "@/assets/images/menu.png";
  import closeIcon from "@/assets/images/close.png";

  export default {
    name: "TopNav",
    data() {
      return {
        menuOpen: false,
        menuIcon,
        closeIcon,
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
    },
  };
</script>
  
<style scoped>
  /* .nav-links ul li a {
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  } */
</style>