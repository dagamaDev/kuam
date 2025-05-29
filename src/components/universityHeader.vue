<template>
  <div class="flex justify-center bg-white">
    <header class="w-4/5 flex items-center justify-between bg-white p-4 relative">
      <div class="flex items-center space-x-4">
        <RouterLink to="/">
          <img src="../assets/university_logo.png" alt="University Logo" class="h-17" />
        </RouterLink>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6">
        <RouterLink to="/about" class="text-[#236A8D]" active-class="font-bold">Біз туралы</RouterLink>
        <RouterLink to="/academic" class="text-[#236A8D]" active-class="font-bold">Ғылым</RouterLink>
        <RouterLink to="/admission" class="text-[#236A8D]" active-class="font-bold">Абитуриенттерге</RouterLink>
        <RouterLink to="/research" class="text-[#236A8D]" active-class="font-bold">Зерттеу</RouterLink>
        <RouterLink to="/job" class="text-[#236A8D]" active-class="font-bold">Жұмыс</RouterLink>
      </nav>

      <!-- Desktop Contact Button -->
      <button class="hidden md:flex bg-[#236A8D] text-white px-6 py-2 rounded-full">
        <span>Бізге хабарлас</span>
        <img src='../assets/outline.svg' alt="" class="ml-2" />
      </button>

      <!-- Burger Button -->
      <button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#236A8D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Fullscreen Mobile Menu -->
      <transition name="slide">
        <div v-if="isMenuOpen" class="fixed top-0 left-0 w-full h-full bg-white z-50 p-6 flex flex-col space-y-6">
          <button @click="isMenuOpen = false" class="self-end">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <RouterLink to="/about" class="text-[#236A8D] text-lg" @click="isMenuOpen = false">Біз туралы</RouterLink>
          <RouterLink to="/academic" class="text-[#236A8D] text-lg" @click="isMenuOpen = false">Ғылым</RouterLink>
          <RouterLink to="/admission" class="text-[#236A8D] text-lg" @click="isMenuOpen = false">Абитуриенттерге</RouterLink>
          <RouterLink to="/research" class="text-[#236A8D] text-lg" @click="isMenuOpen = false">Зерттеу</RouterLink>
          <RouterLink to="/job" class="text-[#236A8D] text-lg" @click="isMenuOpen = false">Жұмыс</RouterLink>
          <button class="bg-[#236A8D] text-white px-4 py-2 rounded-full mt-6">
            Бізге хабарлас
          </button>
        </div>
      </transition>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
