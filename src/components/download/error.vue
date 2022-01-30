<template>
    <div>
        <h2>
            Error: <b>{{ code }}</b>
        </h2>
        <p>{{ message }}</p>
        <Button title="Go back..." @click="this.$router.go(-1)" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/button.vue";

export default defineComponent({
    name: "DownloadError",
    components: { Button },
    props: {
        code: Number,
        message: String,
    },
});
</script>
