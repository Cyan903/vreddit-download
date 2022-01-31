<template>
    <ul>
        <li v-for="quality in videos" :key="quality.url">
            <div v-if="quality.width"><b>Width: </b>{{ quality.width }}</div>
            <div v-if="quality.height"><b>Height: </b>{{ quality.height }}</div>
            <div v-if="quality.framerate">
                <b>Framerate: </b>{{ quality.framerate }}
            </div>
            <div>
                <Button
                    :title="`Download (${quality.width}x${quality.height})`"
                    @click="download(quality)"
                />
            </div>
            <div>
                <Button
                    @click="setPreview(quality.url)"
                    title="Preview (no audio)"
                />
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Video } from "@/api/types/r";
import { download as DL } from "@/api/index";
import Button from "@/components/Button.vue";

export default defineComponent({
    name: "InfoDownloads",
    props: ["videos", "audio", "id"],
    emits: ["setPreview"],
    components: { Button },

    methods: {
        setPreview(name: string) {
            this.$emit("setPreview", name);
        },

        download(quality: Video) {
            if (this.audio) {
                const url = quality.url.replace(
                    `https://v.redd.it/${this.id}/`,
                    ""
                );

                window.open(DL(this.id, url));
                return;
            }

            window.open(quality.url);
        },
    },
});
</script>
