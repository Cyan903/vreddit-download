<template>
    <div class="container">
        <div class="section">
            <h2 class="has-text-centered">
                Error: <b>{{ code }}</b>
            </h2>
            <p class="has-text-centered">{{ message }}</p>
        </div>

        <div class="section">
            <Button
                classes="column is-full"
                title="Go back..."
                @click="this.$router.go(-1)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";

export default defineComponent({
    name: "Error",
    components: { Button },
    props: {
        code: Number,
        message: String,
    },
});
</script>

<style lang="sass" scoped>
h2
    font-size: 4rem
    padding-top: 40px

p
    font-size: 1.5rem
</style>
