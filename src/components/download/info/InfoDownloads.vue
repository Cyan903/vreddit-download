<template>
    <div class="container grid">
        <div v-for="quality in videos" :key="quality.url">
            <table class="table">
                <tr v-if="quality.width">
                    <td>Width</td>
                    <td>{{ quality.width }}</td>
                </tr>
                <tr v-if="quality.height">
                    <td>Height</td>
                    <td>{{ quality.height }}</td>
                </tr>
                <tr v-if="quality.framerate">
                    <td>Framerate</td>
                    <td>{{ quality.framerate }}</td>
                </tr>
                <tr>
                    <td>
                        <Button
                            :title="`Download (${quality.width}x${quality.height})`"
                            @click="download(quality)"
                        />
                    </td>
                    <td>
                        <Button
                            @click="setPreview(quality.url)"
                            title="Preview (no audio)"
                        />
                    </td>
                </tr>
            </table>
        </div>
    </div>
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

<style lang="sass" scoped>
.grid
    display: flex
    flex-wrap: wrap

.grid table
    border: 1px solid #dbdbdb
    margin: 5px
</style>
