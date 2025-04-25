<template>
    <div class="w-4/5 mx-auto py-10 px-4 rounded-lg">
        <h2 class="text-3xl font-bold text-center text-[#236A8D] mb-10">Current Job Opening</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div v-for="(item, index) in jobs" :key="index" class="bg-[#E6EDF8] px-6 py-10 text-center">
                <h3 class="text-xl font-bold text-[#236A8D] mb-2">{{ item.title }}</h3>
            </div>
        </div>
        <div class="mt-14">
            <h2 class="text-3xl font-bold text-center text-[#236A8D] mb-10">Application process</h2>
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
                <div v-for="(item, index) in processSteps" :key="index" class="bg-[#E6EDF8] px-4 py-4 pt-8 text-center">
                    <h3 class="text-6xl font-bold text-[#236A8D] mb-8">{{ index + 1 }}</h3>
                    <p class="text-2xl font-bold text-[#236A8D] mb-2">{{ item.description }}</p>
                </div>
            </div>
        </div>
        <img class="w-full object-cover h-130 mt-12" src="../assets/job-2.png" alt="">
    </div>
</template>

<script setup lang="ts">
const jobs = [
    {
        title: 'Faculty Position(2)',
    },
    {
        title: 'Staff Position(2)',
    },
    {
        title: 'Student Position(2)',
    }
];
const processSteps = [
    {
        description: 'Resume and Cover Letter',
    },
    {
        description: 'Application Submission',
    },
    {
        description: 'Interview',
    },
    {
        description: 'Offer and Onboarding',
    }
];
</script>