<template>
  <div class="flex justify-center bg-white">
    <header class="w-4/5 flex items-center justify-between bg-white p-4">
      <div class="flex items-center space-x-4">
        <img src="../assets/university_logo.png" alt="University Logo" class="h-17" />
      </div>
      <nav class="flex space-x-6">
        <RouterLink to="/about" class="text-[#236A8D]">Біз туралы</RouterLink>
        <RouterLink to="/academic" class="text-[#236A8D]">Ғылым</RouterLink>
        <a href="#" class="text-[#236A8D]">Абитуриенттерге</a>
        <a href="#" class="text-[#236A8D]">Зерттеу</a>
        <a href="#" class="text-[#236A8D]">Жұмыс</a>
      </nav>
      <button class="bg-[#236A8D] flex text-white px-6 py-2 rounded-full">
        <span>Бізге хабарлас</span> <span><img src='../assets/outline.svg' alt=""></span>
      </button>
    </header>
  </div>
  </template>