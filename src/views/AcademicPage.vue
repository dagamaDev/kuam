<template>
    <universityHeader />
    <div>
        <div class="mt-20">
            <academicScienceDepartment />
        </div>

        <div class="flex justify-center mb-8">
            <div class="w-full">
                <universityStaff />
            </div>
        </div>
        <followNews class="translate-y-1/2" />
        <universityFooter />
    </div>
</template>
<script setup lang="ts">
import universityHeader from '../components/universityHeader.vue';
import academicScienceDepartment from '../components/academicScienceDepartment.vue';
// import academicStudentResearch from '../components/academicStudentResearch.vue';
import followNews from '../components/followNews.vue';
import universityFooter from '../components/universityFooter.vue';
import universityStaff from '../components/universityStaff.vue';
</script>