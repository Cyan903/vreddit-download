<template>
    <div v-if="requestFinished" class="container">
        <div class="section has-text-centered">
            <video controls v-if="previewExist" :src="preview"></video>
            <h4 id="hasAudio">{{ hasAudio }}</h4>
            <hr />
        </div>

        <div class="section less-padding">
            <InfoFilter @filterQuality="filterQuality" />
            <InfoDownload
                :videos="videos"
                :audio="vidData?.res?.audio"
                :id="vidData?.res?.id"
                @setPreview="setPreview"
            />
        </div>

        <Button title="Go back..." @click="this.$router.go(-1)" />
    </div>
    <Loading v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Response, Video } from "@/api/types/r";
import Button from "@/components/Button.vue";
import Loading from "@/components/Loading.vue";
import InfoDownload from "./info/InfoDownloads.vue";
import InfoFilter from "./info/InfoFilter.vue";

export default defineComponent({
    name: "Info",
    components: {
        Button,
        Loading,
        InfoDownload,
        InfoFilter,
    },
    props: ["vidData"],

    data() {
        return {
            videos: [] as Video[],
            preview: "",
        };
    },

    methods: {
        filterQuality(what = false) {
            this.videos = JSON.parse(
                JSON.stringify((this.vidData as Response).res.videos)
            );

            if (what) {
                this.videos = this.videos
                    .sort((a: Video, b: Video) => {
                        return b.height + b.width - (a.height + a.width);
                    })
                    .splice(0, 1);
            }
        },

        setPreview(preview: string) {
            this.preview = preview;
        },
    },

    computed: {
        requestFinished(): boolean {
            return (
                (this.vidData
                    ? Object.keys(this.vidData).length !== 0
                    : false) && this.vidData?.res?.videos?.length
            );
        },

        previewExist(): boolean {
            return this.preview != "";
        },

        hasAudio(): string {
            return this.vidData?.res?.audio ? "Has audio" : "No audio";
        },
    },

    watch: {
        requestFinished() {
            if (this.requestFinished) {
                this.filterQuality(true);
                this.preview = this.videos[0].url;
            }
        },
    },
});
</script>

<style lang="sass" scoped>
#hasAudio
    font-size: 2rem

video
    max-height: 50vh
    max-width: 80vw

.less-padding
    padding-top: 0px
</style>
