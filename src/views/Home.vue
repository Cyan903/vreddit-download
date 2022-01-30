<template>
    <div>
        <LinkInput />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LinkInput from "@/components/home/LinkInput.vue"; // @ is an alias to /src

export default defineComponent({
    name: "Home",
    components: {
        LinkInput,
    },
});
</script>
