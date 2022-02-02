<template>
    <div class="has-text-centered">
        <h2>Download links</h2>
        <div>
            <Button
                @click="updateQuality(true)"
                title="Download Highest Quality"
            />
            <Button @click="updateQuality()" title="All Qualities" />
        </div>
        <hr />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";

export default defineComponent({
    name: "InfoFilter",
    emits: ["filterQuality"],
    components: { Button },

    methods: {
        updateQuality(best = false) {
            this.$emit("filterQuality", best);
        },
    },
});
</script>

<style lang="sass" scoped>
h2
    padding: 1rem
    font-weight: bolder
    font-size: 1.5rem
</style>
