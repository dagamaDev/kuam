<template>
    <div>
        <div class="flex flex-col items-center">
            <div class="flex justify-center gap-3 mb-8">
                <h1 class="text-3xl font-bold text-[#236A8D]">Научно-исследовательская деятельность профессорского-преподавательского состава.</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-6">
                <div v-for="(item, idx) in items" :key="item.title" @click="openModal(idx)" class="cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                    <applicantsInfo :title="item.title">
                        <p>{{ item.preview }}</p>
                    </applicantsInfo>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <transition name="fade">
            <div v-if="modalIdx !== null" class="fixed inset-0 z-50 flex items-center justify-center" style="pointer-events: auto;" @click.self="closeModal">
                <div class="bg-white rounded-lg shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn overflow-y-auto max-h-[80vh]" style="box-shadow: 0 8px 32px 0 rgba(35,106,141,0.15);">
                    <button @click="closeModal" class="absolute top-2 right-2 text-2xl text-gray-400 hover:text-[#236A8D]">&times;</button>
                    <h2 class="text-2xl font-bold text-[#236A8D] mb-4">{{ items[modalIdx].title }}</h2>
                    <div class="text-gray-700">
                        <template v-if="modalIdx === 0">
                            <div class="grid grid-cols-1 gap-4">
                                <div v-for="prof in professors" :key="prof.name" class="flex items-center gap-4 p-3 rounded-lg border border-[#e6edf8] hover:bg-[#f5faff] cursor-pointer transition">
                                    <img :src="prof.photo" alt="prof" class="w-14 h-14 rounded-full object-cover border border-[#236A8D]" />
                                    <div>
                                        <div class="font-semibold text-[#236A8D]">{{ prof.name }}</div>
                                        <div class="text-sm text-gray-600">{{ prof.research }}</div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            {{ items[modalIdx].details }}
                        </template>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import applicantsInfo from './applicantsInfo.vue';

const items = [
    {
        title: 'Научные проекты',
        preview: 'Описание или детали по научным проектам...',
        details: '' // handled by modalIdx === 0
    },
    {
        title: 'Регистрация авторских прав',
        preview: 'Описание или детали по регистрации авторских прав...',
        details: 'Подробная информация о регистрации авторских прав будет здесь.'
    },
    {
        title: 'Публикационная активность',
        preview: 'Описание или детали по публикационной активности...',
        details: 'Подробная информация о публикационной активности будет здесь.'
    },
    {
        title: 'Портфолио ученых',
        preview: 'Описание или детали по портфолио ученых...',
        details: 'Подробная информация о портфолио ученых будет здесь.'
    },
    {
        title: 'Соискание ученых званий',
        preview: 'Описание или детали по соисканию ученых званий...',
        details: 'Подробная информация о соискании ученых званий будет здесь.'
    },
    {
        title: 'Конкурс «Лучший преподаватель ВУЗа»',
        preview: 'Описание или детали по конкурсу...',
        details: 'Подробная информация о конкурсе будет здесь.'
    },
];

const professors = [
    {
        name: 'Иван Иванов',
        photo: 'https://randomuser.me/api/portraits/men/32.jpg',
        research: 'Исследование в области искусственного интеллекта'
    },
    {
        name: 'Мария Петрова',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        research: 'Генетика и биотехнологии'
    },
    {
        name: 'Алексей Смирнов',
        photo: 'https://randomuser.me/api/portraits/men/65.jpg',
        research: 'Экономика устойчивого развития'
    },
    {
        name: 'Елена Кузнецова',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        research: 'Современные методы обучения'
    },
];

const modalIdx = ref<null | number>(null);
const openModal = (idx: number) => { modalIdx.value = idx; };
const closeModal = () => { modalIdx.value = null; };
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
@keyframes fadeIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}
.animate-fadeIn {
    animation: fadeIn 0.2s;
}
</style> 