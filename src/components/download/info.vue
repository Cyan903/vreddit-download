<template>
    <div v-if="requestFinished">
        <pre>{{ vidData }}</pre>
        <video controls :src="lowestQuality"></video>
        <Button title="Go back..." @click="this.$router.go(-1)" />
    </div>
    <Loading v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/button.vue";
import Loading from "@/components/loading.vue";

import { Response } from "@/api/types/r";

export default defineComponent({
    name: "DownloadInfo",
    components: { Button, Loading },
    props: {
        vidData: Object,
    },

    computed: {
        requestFinished(): boolean {
            return this.vidData
                ? Object.keys(this.vidData).length !== 0
                : false;
        },

        lowestQuality(): string {
            return (this.vidData as Response).res.videos[0].url;
        },
    },
});
</script>
