<template>
    <universityHeader />
    <div>
        <div>
            <academicHero />
        </div>
        <div class="mt-20">
            <academicFaculty />
        </div>
        <div class="mt-20">
            <academicStandarts />
        </div>
        <div class="mt-20">
            <academicGrading />
        </div>
        <div class="mt-20">
            <academicFacultyResearch />
        </div>
        <div class="mt-20">
            <academicScienceDepartment />
        </div>
        <div class="mt-20">
            <academicStudentResearch />
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
import academicHero from '../components/academicHero.vue';
import academicFaculty from '../components/academicFaculty.vue';
import academicStandarts from '../components/academicStandarts.vue';
import academicGrading from '../components/academicGrading.vue';
import academicFacultyResearch from '../components/academicFacultyResearch.vue';
import academicScienceDepartment from '../components/academicScienceDepartment.vue';
import academicStudentResearch from '../components/academicStudentResearch.vue';
import followNews from '../components/followNews.vue';
import universityFooter from '../components/universityFooter.vue';
import universityStaff from '../components/universityStaff.vue';
</script>