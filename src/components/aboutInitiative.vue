<template>
    <div class="flex justify-center mt-6 px-4">
      <div class="w-full max-w-7xl flex flex-col">
        <div class="flex justify-center mb-10">
          <h1 class="text-3xl md:text-4xl font-bold text-[#236A8D] text-center">
            Strategic Initiative
          </h1>
        </div>
  
        <div class="flex flex-col lg:flex-row gap-8">
          <div class="flex flex-col gap-8 w-full lg:w-1/2">
            <strategicInitiative :title="'Academic Excellence'">
              <img src="../assets/Excellence.svg" alt="" class="p-4 max-w-full h-auto" />
            </strategicInitiative>
            <strategicInitiative :title="'Student Success'">
              <img src="../assets/Promotion.svg" alt="" class="p-4 max-w-full h-auto" />
            </strategicInitiative>
            <strategicInitiative :title="'Global Outreach'">
              <img src="../assets/Worldwide.svg" alt="" class="p-4 max-w-full h-auto" />
            </strategicInitiative>
          </div>
          <div class="flex flex-col gap-8 w-full lg:w-1/2">
            <strategicInitiative :title="'Sustainability'">
              <img src="../assets/initiative.svg" alt="" class="p-4 max-w-full h-auto" />
            </strategicInitiative>
            <strategicInitiative :title="'Global Outreach'">
              <img src="../assets/Worldwide.svg" alt="" class="p-4 max-w-full h-auto" />
            </strategicInitiative>
            <strategicInitiative :title="'Sustainability'">
              <img src="../assets/initiative.svg" alt="" class="p-4 max-w-full h-auto" />
            </strategicInitiative>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import strategicInitiative from './strategicInitiative.vue';
  </script>
  