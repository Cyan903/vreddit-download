<template>
    <Header />

    <div class="hero is-medium">
        <div class="container is-widescreen">
            <router-view />
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
