<template>
  <header class="bg-white">
      <nav class="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            class="w-16 cursor-pointer"
            src="@/assets/images/logo.png"
            alt="Logo"
          />
        </div>
        <div
          :class="[
            'nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5',
            menuOpen ? 'top-[9%]' : ''
          ]"
        >
          <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li class="relative group">
              <a class="hover:text-[#735da8] relative z-10" href="#">Products</a>
              <span class="absolute inset-0 bg-[#a78aec] opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-md"></span>
            </li>
            <li class="relative group">
                  <a
                    class="hover:text-[#735da8] relative z-10"
                    href="#"
                  >
                    Solution
                  </a>
                  <span class="absolute inset-0 bg-[#a78aec] opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-md"></span>
                </li>
                <li class="relative group">
                  <a
                    class="hover:text-[#735da8] relative z-10"
                    href="#"
                  >
                    Resource
                  </a>
                  <span class="absolute inset-0 bg-[#a78aec] opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-md"></span>
                </li>
                <li class="relative group">
                  <a
                    class="hover:text-[#735da8] relative z-10"
                    href="#"
                  >
                    Developers
                  </a>
                  <span class="absolute inset-0 bg-[#a78aec] opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-md"></span>
                </li>
                <li class="relative group">
                  <a
                    class="hover:text-[#735da8] relative z-10"
                    href="#"
                  >
                    Pricing
                  </a>
                  <span class="absolute inset-0 bg-[#a78aec] opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-md"></span>
                </li>
          </ul>
        </div>
        <div class="flex items-center gap-6">
          <button class="bg-[#7F9AE6] text-white px-5 py-2 rounded-full hover:bg-[#735da8]">
            Button
          </button>
          <ion-icon
            :name="menuOpen ? 'close' : 'menu'"
            class="text-3xl cursor-pointer md:hidden"
            @click="toggleMenu"
          ></ion-icon>
        </div>
      </nav>
    </header>
</template>

<script>
    export default {
        name: "TopNav",
        data() {
        return {
            menuOpen: false,
        };
        },
        methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        },
    };
</script>