<template>
    <div class="container">
        <div class="has-text-centered">
            <h2>
                Viewing info for <b>/r/{{ sub }}/{{ postid }}</b>
            </h2>
        </div>

        <Error
            v-if="requestError"
            :code="videoInfo.code"
            :message="videoInfo.res"
        />
        <Info v-else :vidData="videoInfo" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getVideoInfo } from "../api/index";
import config from "@/config.json";
import Error from "@/components/download/Error.vue";
import Info from "@/components/download/Info.vue";

export default defineComponent({
    name: "Download",
    components: { Error, Info },
    data() {
        return {
            postid: this.$route.params.id.toString(),
            sub: this.$route.params.subreddit.toString(),
            videoInfo: {},
            requestError: false,
        };
    },

    async mounted() {
        const res = await getVideoInfo(this.sub, this.postid);

        this.requestError = res.code != 200;
        this.videoInfo = res;

        document.title = `Downloading from /r/${this.sub} | ${config.title}`;
    },
});
</script>
