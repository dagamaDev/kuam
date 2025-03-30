<template>
    <div class="w-full bg-white flex">
        <div class="flex justify-center bg-[#E6EDF8] w-22 h-22">
            <slot></slot>
        </div>
        <div class="w-full flex justify-center items-center">
            <h4 class="text-2xl font-bold text-[#236A8D] text-center">{{ title }}</h4>
        </div>
    </div>

</template>
<script setup lang="ts">
defineProps({
    title: String,
})
</script>