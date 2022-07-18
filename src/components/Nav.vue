<script setup>
import { pic } from "../anya";

const links = [
    { text: "Home", url: "/" },
    { text: "About Me 關於我", url: "/about" },
    { text: "我的歷程", url: "/projects" },
    { text: "雜七、八", url: '/others' },
];
</script>

<template>
    <div class="fixed top-0 left-0 z-30 h-28 w-full">
        <div
            :class="[
                'flex',
                'h-16',
                'w-full',
                'rounded-b-lg',
                'bg-gradient-to-r',
                'from-blue-500',
                'to-sky-400',
                'pl-24',
                'shadow-lg',
                'shadow-lime-300',
                'md:pl-32',
                'transition-all',
                'duration-200',
                $route.path === '/about' ? 'pl-8 md:pl-8' : '',
            ]"
        >
            <div
                v-for="(link, index) in links"
                :key="index"
                class="mx-2 flex h-16 items-center justify-center sm:w-24"
            >  
                <router-link
                    :to="link.url"
                    class="text-xl text-red-900 opacity-80 transition-all duration-200 hover:text-2xl hover:text-white hover:opacity-100"
                    >{{ link.text }}</router-link
                >
            </div>
        </div>

        <transition
            enter-active-class="duration-200 ease-out"
            enter-from-class="transform -translate-y-32"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="transform -translate-x-32"
        >
            <div
                class="absolute top-4 left-4 z-50 h-20 w-20 overflow-hidden rounded-full bg-sky-600 bg-opacity-80 shadow-yellow-700 shadow-xl ring-4 ring-red-200 md:h-24 md:w-24"
                v-if="$route.path !== '/about'"
            >
                <img
                    :src="pic.uniform"
                    class=" scale-150 translate-x-fit translate-y-fit"
                />
            </div>
        </transition>
    </div>
</template>
