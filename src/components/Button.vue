<template>
    <button :class="[...(classes?.length ? classes.split(' ') : ''), 'button']">{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Button",
    props: {
        title: String,
        classes: Array,
    },
});
</script>

