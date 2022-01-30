<template>
    <div>
        <h2>
            Viewing info for <b>/r/{{ sub }}/{{ id }}</b>
        </h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Download",
    data() {
        return {
            id: this.$route.params.id,
            sub: this.$route.params.subreddit,
        };
    },
});
</script>
