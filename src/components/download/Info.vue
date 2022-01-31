<template>
    <div v-if="requestFinished">
        <div>
            <h4>Preview</h4>
            <video controls v-if="previewExist" :src="preview"></video>
        </div>

        <div>
            <InfoFilter @filterQuality="filterQuality" />
            <InfoDownload :videos="videos" @setPreview="setPreview" />
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
