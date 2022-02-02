<template>
    <div class="hero is-medium">
        <h2>How to use the downloader?</h2>
        <div class="section">
            <div>
                <b>Part 1:</b>
                <p>
                    To use the reddit downloader, you must first copy a link
                    from reddit and paste it into the input box. Reddit links
                    must not be shortened, and must follow the following format:
                </p>
                <code>
                    https://www.reddit.com/r/SUBREDDITNAME/comments/POSTID/
                </code>

                <p>
                    The subreddit name and post id are required. All query
                    parameters after are ignored.
                </p>
            </div>

            <div>
                <b>Part 2:</b>
                <p>
                    After submitting a url you are greeted with a few options.
                    Select the quality you want to download and hit download. If
                    the video has no audio, you will simply be redirected to the
                    direct video link from <code>v.redd.it</code>. If the video
                    does have audio, the video and audio will be merged through
                    the API, and you will be redirected once the process has
                    finished.
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
    name: "How to Use",
    components: { Button },
    mounted() {
        document.title = `How to Use | ${config.title}`;
    },
});
</script>

<style lang="sass" scoped>
@import "./src/sass/title.sass"
</style>
