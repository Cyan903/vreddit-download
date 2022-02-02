<template>
    <Header />

    <div class="hero">
        <div class="hero-body">
            <div class="container is-widescreen">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/layout/Header.vue";

export default defineComponent({
    name: "App",
    components: { Header },
});
</script>

<style lang="sass">
@import "~bulma"
</style>
