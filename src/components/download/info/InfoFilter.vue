<template>
    <div>
        <h4>Download links</h4>
        <div>
            <button @click="updateQuality(true)">
                Download Highest Quality
            </button>
            <button @click="updateQuality()">All Qualities</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "InfoFilter",
    emits: ["filterQuality"],

    methods: {
        updateQuality(best = false) {
            this.$emit("filterQuality", best);
        },
    },
});
</script>
