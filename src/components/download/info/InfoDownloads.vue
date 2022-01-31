<template>
    <ul>
        <li v-for="quality in videos" :key="quality.url">
            <div v-if="quality.width"><b>Width: </b>{{ quality.width }}</div>
            <div v-if="quality.height"><b>Height: </b>{{ quality.height }}</div>
            <div v-if="quality.framerate">
                <b>Framerate: </b>{{ quality.framerate }}
            </div>
            <div>
                <button>Download</button>
            </div>
            <div>
                <button @click="setPreview(quality.url)">
                    Preview (no audio)
                </button>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "InfoDownloads",
    props: ["videos"],
    emits: ["setPreview"],
    methods: {
        setPreview(name: string) {
            this.$emit("setPreview", name);
        },
    },
});
</script>
