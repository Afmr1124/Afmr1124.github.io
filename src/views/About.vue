<script setup>
import { ref } from "vue";
import { pic, about } from "../anya";
import Typing from "../components/Typing.vue";

function open(url) {
    window.open(url, "_blank");
}

let show_pic = ref(false);
let step = ref(0);

function update(delay = 0) {
    setTimeout(() => step.value++, delay);
}
</script>

<template>
    <div class="h-full w-full px-8 pt-8 sm:px-12 sm:pt-12 lg:px-16 lg:pt-16">
        <Typing
            text="About Me"
            @done="step++"
            class="mb-8 block text-4xl text-green-600 sm:text-3xl lg:text-4xl"
        />

        <div class="flex w-full flex-col justify-end md:flex-row-reverse">
            <transition
                enter-active-class="duration-200 ease-out"
                enter-from-class="transform opacity-0 translate-x-12"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="duration-150 ease-in"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="transform opacity-0 translate-x-12"
            >
                <img
                    :src="pic.icecream"
                    class="inline-block w-64 p-4 bg-slate-400 drop-shadow-lg md:w-96"
                    @load="show_pic = true"
                    v-show="step > 0 && show_pic"
                />
            </transition>
            <br/>
            <Typing
                :text="about"
                :speed="25"
                v-if="step > 0"
                @done="step++"
                class="flex-1 md:mx-4"
                @click="open('https://www.instagram.com/hsienyun_lin._1124/?hl=zh-tw')"
            />
        </div>
        <Typing
            text="My Pictures"
            :speed="50"
            v-if="step > 1"
            @done="step++" 
            class="text-2xl mt-4 block text-amber-800 "
        />
        <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            <div
                v-for="i in pic.avatars.length - 1"
                :key="i"
                class=" w-fit h-fit my-2 mx-2 overflow-hidden rounded-full ring-yellow-500 transition-all hover:ring-4"
            >
                <transition
                    enter-active-class="duration-200 ease-out"
                    enter-from-class="transform opacity-0 translate-y-6"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="duration-150 ease-in"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="transform opacity-0 translate-y-6"
                    @enter="update(50)"
                >
                    <img
                        v-show="step > 1 + i"
                        :src="pic.avatars[i]"
                        class="w-full cursor-pointer transition-all hover:scale-125"
                        @click="open('https://www.instagram.com/hsienyun_lin._1124/?hl=zh-tw')"
                    />
                </transition>
            </div>
        </div>
        <div class="text-amber-500 ">
            來投票~<br />
            覺得我美的就分享給你的男性友人<br />
            覺得我帥的就分享給你的女性友人<br/>
            如果都沒有<br/>
            Email:11015121@st.ssivs.chc.edu.tw<br/>
            我會告訴你我的ㄒㄧㄎㄨ一ㄊㄜˋ
        </div>
    </div>
</template>
