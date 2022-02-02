<template>
    <div class="hero is-medium">
        <div class="section">
            <div class="logo">
                <h2>vreddit<b>download</b></h2>
            </div>

            <p class="has-text-centered">
                Download videos from <code>v.redd.it</code> with audio.
            </p>
        </div>

        <LinkInput />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";
import LinkInput from "@/components/home/LinkInput.vue";

export default defineComponent({
    name: "Home",
    components: { LinkInput },
    mounted() {
        document.title = `Home | ${config.title}`;
    },
});
</script>

<style lang="sass" scoped>
@import "./src/sass/logo.sass"

.logo
    font-size: 2em
    text-align: center

p
    padding-top: 30px
</style>
