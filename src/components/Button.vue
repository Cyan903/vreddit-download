<template>
    <button class="button">{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Button",
    props: {
        title: String,
    },
});
</script>

<style scoped lang="scss">
button {
    background-color: green;
}
</style>
