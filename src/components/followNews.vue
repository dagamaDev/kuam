<template>
    <div class="flex justify-center">
        <div class="w-236 flex flex-col items-center bg-[#E6EDF8] p-6 py-8 rounded-lg shadow-md">
            <div class="flex flex-col items-center justify-center gap-3 mb-4">
                <h1 class="text-4xl font-bold text-[#236A8D]">Біздің жаңалықтан қалма!</h1>
                <p class="text-gray-600 text-center">Keep up with our latest news and events, subscribe to our newsletter</p>
            </div>
            <div class="flex w-full max-w-md gap-2">
                <input 
                    v-model="email" 
                    type="email" 
                    placeholder="Email Address"
                    class="w-full px-4 py-2 border border-[#236A8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#236A8D]"
                />
                <button 
                    @click="subscribe" 
                    class="px-4 py-2 bg-[#236A8D] text-white rounded-lg hover:bg-[#1a5673] transition"
                >
                    Subscribe
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

const subscribe = () => {
    if (email.value.trim() === '') {
        alert('Please enter a valid email address.');
        return;
    }
    alert(`Subscribed with: ${email.value}`);
    email.value = '';
};
</script>
