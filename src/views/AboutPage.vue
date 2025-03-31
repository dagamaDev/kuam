<template>
    <universityHeader />
    <div>
        <div>
            <aboutMission />
        </div>
        <div class="mt-20">
            <aboutVision />
        </div>
        <div class="mt-20">
            <aboutInitiative />
        </div>
        <div class="mt-20">
            <aboutStory />
        </div>
        <div class="mt-20">
            <AboutNumbers />
        </div>
        <div class="mt-20">
            <aboutNetworking />
        </div>
        <div class="mt-20">
            <aboutMembership />
        </div>
        <followNews class="translate-y-1/2" />
        <universityFooter />
    </div>
</template>
<script setup lang="ts">
import universityHeader from '../components/universityHeader.vue';
import aboutMission from '../components/aboutMission.vue';
import aboutVision from '../components/aboutVision.vue';
import followNews from '../components/followNews.vue';
import universityFooter from '../components/universityFooter.vue';
import aboutInitiative from '../components/aboutInitiative.vue';
import aboutStory from '../components/aboutStory.vue';
import AboutNumbers from '../components/aboutNumbers.vue';
import aboutNetworking from '../components/aboutNetworking.vue';
import aboutMembership from '../components/aboutMembership.vue';
</script>