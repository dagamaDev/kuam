<template>
    <div class="bg-white py-12 px-4 md:px-12 relative">
        <!-- Blur wrapper -->
        <div :class="['transition-all duration-300', showModal ? 'blur-sm pointer-events-none' : '']">
            <div class="flex flex-col items-center text-center">
                <h1 class="text-4xl font-extrabold text-[#236A8D] mb-12">ДЕПАРТАМЕНТ НАУКИ</h1>

                <!-- First Row -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    <!-- First Box - Clickable -->
                    <div class="border-2 border-[#236A8D] rounded-2xl p-6 hover:shadow-md transition duration-300 bg-white cursor-pointer"
                        @click="showModal = true">
                        <h2 class="text-lg md:text-xl font-semibold text-[#236A8D]">
                            Научно-исследовательская деятельность ППС
                        </h2>
                    </div>

                    <!-- Other Boxes -->
                    <div
                        class="border-2 border-[#236A8D] rounded-2xl p-6 hover:shadow-md transition duration-300 bg-white">
                        <h2 class="text-lg md:text-xl font-semibold text-[#236A8D]">ДЕПАРТАМЕНТ НАУКИ</h2>
                    </div>
                    <div
                        class="border-2 border-[#236A8D] rounded-2xl p-6 hover:shadow-md transition duration-300 bg-white" @click="showPublishingModal = true">
                        <h2 class="text-lg md:text-xl font-semibold text-[#236A8D]">ИЗДАТЕЛЬСКАЯ ДЕЯТЕЛЬНОСТЬ</h2>
                    </div>
                </div>

                <!-- Second Row -->
                <div class="flex w-1/2 gap-10 mt-8">
                    <div
                        class="border-2 border-[#236A8D] rounded-2xl p-6 hover:shadow-md transition duration-300 bg-white">
                        <h2 class="text-lg md:text-xl font-semibold text-[#236A8D]">ФИНАНСОВОЕ СОСТОЯНИЕ ПО ВЫПОЛНЕНИЮ
                            НИР</h2>
                    </div>
                    <div
                        class="border-2 border-[#236A8D] rounded-2xl p-6 hover:shadow-md transition duration-300 bg-white">
                        <h2 class="text-lg md:text-xl font-semibold text-[#236A8D]">НАУЧНО-ИССЛЕДОВАТЕЛЬСКАЯ
                            ДЕЯТЕЛЬНОСТЬ ОБУЧАЮЩИХСЯ</h2>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <Transition name="modal-fade">
            <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
                @click.self="showModal = false">
                <div class="rounded-2xl p-8 w-full max-w-5xl relative transform transition-all duration-300">
                    <TransitionGroup name="stagger-fade" tag="div" class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <router-link v-for="(section, index) in modalSections" :key="section.title" :to="section.route"
                            class="stagger-item bg-white border border-[#236A8D] p-5 rounded-xl text-center flex flex-col gap-4 hover:shadow-md transition duration-300">
                            <h3 class="font-semibold text-[#236A8D] text-lg">{{ section.title }}</h3>
                            <p class="text-sm text-gray-600 mt-2 text-md">{{ section.description }}</p>
                        </router-link>
                    </TransitionGroup>
                </div>
            </div>
        </Transition>
        <Transition name="modal-fade">
            <div v-if="showPublishingModal" class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
                @click.self="showPublishingModal = false">
                <div class="rounded-2xl p-8 w-full max-w-5xl relative transform transition-all duration-300">
                    <TransitionGroup name="stagger-fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <router-link v-for="(section, index) in publishingSection" :key="section.title" :to="section.route"
                            class="stagger-item bg-white border border-[#236A8D] p-5 rounded-xl text-center flex flex-col gap-4 hover:shadow-md transition duration-300">
                            <h3 class="font-semibold text-[#236A8D] text-lg">{{ section.title }}</h3>
                            <p class="text-sm text-gray-600 mt-2 text-md">{{ section.description }}</p>
                        </router-link>
                    </TransitionGroup>
                </div>
            </div>
        </Transition>


    </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const showPublishingModal = ref(false)
const publishingSection = [
    {
        title: 'Вестник КУ им. Абая Мырзахметова',
        route: '/publications',
        description: 'Научный журнал университета, публикующий статьи преподавателей, студентов и исследователей по различным направлениям.'
    },
    {
        title: 'Научные мероприятия',
        route: '/publications',
        description: 'Информация о конференциях, симпозиумах, семинарах и других научных событиях, проводимых университетом.'
    },
]


const modalSections = [
    {
        title: 'Научные проекты',
        description: 'Информация о текущих и завершённых научных проектах преподавателей и студентов.',
        route: '/academic-info'
    },
    {
        title: 'Регистрация авторских прав',
        description: 'Процедуры и требования для регистрации авторских прав на научные работы.',
        route: '/academic-info'
    },
    {
        title: 'Публикационная активность',
        description: 'Анализ публикационной активности сотрудников, индексируемость и журналы.',
        route: '/academic-info'
    },
    {
        title: 'Портфолио ученых',
        description: 'Комплексные профили преподавателей с научными достижениями и публикациями.',
        route: '/academic-info'
    },
    {
        title: 'Соискание ученых званий',
        description: 'Информация о процессе и критериях получения ученых званий.',
        route: '/academic-info'
    },
    {
        title: 'Республиканский конкурс «Лучший преподаватель ВУЗа»',
        description: 'Условия участия и достижения преподавателей в данном конкурсе.',
        route: '/academic-info'
    }
]


</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: all 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.modal-fade-enter-to,
.modal-fade-leave-from {
    opacity: 1;
    transform: scale(1);
}

.stagger-fade-enter-active {
    transition: all 0.3s ease;
}

.stagger-fade-leave-active {
    transition: all 0.2s ease;
    opacity: 0;
    transform: scale(0.95);
}

.stagger-fade-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.stagger-fade-enter-to {
    opacity: 1;
    transform: translateY(0);
}

/* Stagger effect by nth-child */
.stagger-fade-enter-active .stagger-item:nth-child(1) {
    transition-delay: 100ms;
}

.stagger-fade-enter-active .stagger-item:nth-child(2) {
    transition-delay: 200ms;
}

.stagger-fade-enter-active .stagger-item:nth-child(3) {
    transition-delay: 300ms;
}

.stagger-fade-enter-active .stagger-item:nth-child(4) {
    transition-delay: 400ms;
}

.stagger-fade-enter-active .stagger-item:nth-child(5) {
    transition-delay: 500ms;
}

.stagger-fade-enter-active .stagger-item:nth-child(6) {
    transition-delay: 600ms;
}
</style>
