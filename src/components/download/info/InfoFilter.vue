<template>
    <div>
        <h4>Download links</h4>
        <div>
            <Button
                @click="updateQuality(true)"
                title="Download Highest Quality"
            />
            <Button @click="updateQuality()" title="All Qualities" />
        </div>
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
