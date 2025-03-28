<template>
    <div class="flex flex-col gap-4 items-center justify-center bg-white shadow-md p-6 rounded-2xl">
        <div class="w-30 flex justify-center">
            <slot></slot>
        </div>
        <p class="text-3xl text-[#236A8D] mx-3 text-center">{{ text }}</p>
    </div>
</template>
<script setup lang="ts">
defineProps({
    text: String,
})
</script>