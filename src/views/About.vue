<template>
    <div class="hero is-medium">
        <h2>About This App</h2>
        <div class="section">
            <div>
                <p>
                    This app is a frontend for an
                    <a :href="config.api" target="_blank">API</a> I wrote to
                    download videos from <code>v.redd.it</code>. Reddit does not
                    allow for video downloads through the app or website which
                    is why I made this app. The video and audio are merged in
                    the API using
                    <a
                        href="https://github.com/ffmpegwasm/ffmpeg.wasm"
                        target="_blank"
                        >ffmpeg.wasm</a
                    >.
                </p>
            </div>
            <br />
            <div>
                <p>
                    The API docs can be found in the
                    <a :href="config.api + '/blob/main/DOCS.md'" target="_blank"
                        >docs readme</a
                    >, for those interested.
                </p>
            </div>
        </div>
        <Button title="Go back..." @click="this.$router.go(-1)" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import config from "@/config.json";
import Button from "@/components/Button.vue";

export default defineComponent({
    name: "About",
    components: { Button },
    mounted() {
        document.title = `About | ${config.title}`;
    },

    data() {
        return { config: config.links };
    },
});
</script>

<style lang="sass" scoped>
@import "./src/sass/title.sass"
</style>
