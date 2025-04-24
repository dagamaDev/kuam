<template>
    <div class="w-4/5 mx-auto py-8 px-4 rounded-lg">
      <h2 class="text-3xl font-bold text-center text-[#236A8D] mb-6">Admission Schedule</h2>
      <div class="grid grid-cols-1 divide-y divide-blue-200">
        <div v-for="(item, index) in schedule" :key="index" :class="index % 2 === 0 ? 'bg-[#E6EDF8]' : 'bg-white'" class="flex justify-between py-4 px-12">
          <span class="w-2/5 font-semibold text-[#344054]">{{ item.label }}</span>
          <span>:</span>
          <span class="text-[#344054]">{{ item.date }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const schedule = [
    { label: 'Online Admission Form open', date: 'September 05, 2023 (Tuesday)' },
    { label: 'Deadline for Online Admission Form Submission', date: 'September 05, 2023 (Tuesday)' },
    { label: 'Deadline for Online Admission Form Payment', date: 'September 05, 2023 (Tuesday)' },
    { label: 'Admission Written & Viva Examination', date: 'September 05, 2023 (Tuesday)' },
    { label: 'Final Result', date: 'September 05, 2023 (Tuesday)' },
    { label: 'Admission & Registration', date: 'September 05, 2023 (Tuesday)' },
    { label: 'Orientation', date: 'September 05, 2023 (Tuesday)' },
    { label: 'Class Starts', date: 'September 05, 2023 (Tuesday)' },
  ];
  </script>
  