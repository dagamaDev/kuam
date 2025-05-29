<template>
    <div class="w-full bg-white flex flex-col sm:flex-row">
      <div class="flex justify-center items-center bg-[#E6EDF8] sm:w-28 sm:h-28 w-full py-4">
        <slot></slot>
      </div>
      <div class="w-full flex justify-center items-center px-4 py-2">
        <h4 class="text-xl md:text-2xl font-bold text-[#236A8D] text-center">
          {{ title }}
        </h4>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    title: String,
  })
  </script>
  