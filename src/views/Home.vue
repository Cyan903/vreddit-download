<template>
    <div>
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
