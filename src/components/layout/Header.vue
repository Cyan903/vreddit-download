<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item logo" to="/">
                    <h2>vreddit<b>download</b></h2>
                </router-link>

                <a
                    role="button"
                    class="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target=""
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-start">
                <router-link class="navbar-item" to="/">Home</router-link>
                <router-link class="navbar-item" to="/about">About</router-link>
                <router-link class="navbar-item" to="/help">
                    How to Use
                </router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">Github</a>

                    <div class="navbar-dropdown">
                        <a
                            :href="config.frontend"
                            target="_blank"
                            class="navbar-item"
                            >Frontend</a
                        >
                        <a
                            :href="config.api"
                            target="_blank"
                            class="navbar-item"
                            >API</a
                        >
                        <hr class="navbar-divider" />
                        <a
                            href="https://github.com/ffmpegwasm/ffmpeg.wasm"
                            target="_blank"
                            class="navbar-item"
                            >ffmpeg.wasm</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";
export default defineComponent({
    name: "Header",
    data() {
        return { config: config.links };
    },
});
</script>

<style lang="sass" scoped>
@import "./src/sass/logo.sass"
</style>
