<template>
  <div class="flex justify-center bg-white">
    <header class="w-4/5 flex items-center justify-between bg-white p-4">
      <div class="flex items-center space-x-4">
        <RouterLink to="/">
          <img src="../assets/university_logo.png" alt="University Logo" class="h-17" />
        </RouterLink>
      </div>
      <nav class="flex space-x-6">
        <RouterLink to="/about" class="text-[#236A8D]" active-class="font-bold">Біз туралы</RouterLink>
        <RouterLink to="/academic" class="text-[#236A8D]" active-class="font-bold">Ғылым</RouterLink>
        <RouterLink to="/admission" class="text-[#236A8D]" active-class="font-bold">Абитуриенттерге</RouterLink>
        <RouterLink to="/research" class="text-[#236A8D]" active-class="font-bold">Зерттеу</RouterLink>
        <RouterLink to="/job" class="text-[#236A8D]" active-class="font-bold">Жұмыс</RouterLink>
      </nav>
      <button class="bg-[#236A8D] flex text-white px-6 py-2 rounded-full">
        <span>Бізге хабарлас</span> <span><img src='../assets/outline.svg' alt=""></span>
      </button>
    </header>
  </div>
</template>