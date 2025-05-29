<template>
    <div class="bg-[#E6EDF8] flex flex-col gap-10 p-4 pt-6 rounded-xl shadow-md
                w-full sm:w-[45%] md:w-[30%] lg:w-[22%] min-h-[16rem]">
      <div class="flex justify-center mb-4">
        <slot></slot>
      </div>
      <div class="flex justify-center">
        <h4 class="text-lg md:text-xl font-bold text-[#236A8D] text-center">{{ title }}</h4>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    title: String,
  })
  </script>
  