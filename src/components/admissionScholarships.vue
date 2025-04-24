<template>
    <div class="w-4/5 mx-auto py-10 px-4 rounded-lg">
        <h2 class="text-3xl font-bold text-center text-[#236A8D] mb-10">Scholarship</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="(item, index) in scholarships" :key="index" class="bg-[#E6EDF8] p-6 text-center">
                <h3 class="text-xl font-bold text-[#344054] mb-2">{{ item.title }}</h3>
                <p class="text-[#344054]">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const scholarships = [
    {
        title: 'Merit Scholarship',
        description: 'Merit scholarships are awarded on the basis of results',
    },
    {
        title: 'Founder Scholarship',
        description: 'Founder XYZ scholarship is created in memory of Prof Dr XYZ',
    },
    {
        title: 'Merit scholarship during study',
        description: 'Students who are not entitled for merit scholarship',
    },
    {
        title: 'Special scholarships',
        description: 'More than 65 special scholarships are awarded in every semester',
    },
    {
        title: 'Green Leaf Scholarship',
        description: 'Children of tea garden workers can avail this',
    },
    {
        title: 'Scholarships for female Students',
        description: '15% additional scholarship awarded to female students',
    },
];
</script>