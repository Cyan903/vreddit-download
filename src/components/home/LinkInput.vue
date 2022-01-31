<template>
    <div>
        <h2>Enter video links...</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            aspernatur neque tempora deleniti atque, quos laborum accusantium a
            officia reiciendis?
        </p>

        <h5 v-if="link.length > 10">{{ redditURL }}</h5>

        <input type="text" v-model="link" placeholder="Enter a reddit link" />
        <Button title="Download" @click="redirect" :disabled="!validURL" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../Button.vue";

export default defineComponent({
    name: "LinkInput",
    components: { Button },
    data() {
        return {
            link: "",
        };
    },

    methods: {
        redirect() {
            if (this.validURL) {
                this.$router.push(
                    `/download/${this.redditURL[0]}/${this.redditURL[1]}`
                );
            }
        },
    },

    computed: {
        redditURL(): string[] | string {
            try {
                const link = new URL(this.link);
                const path = link.pathname.split("/").filter((l) => l);
                const data = [path[1], path[3]];

                if (
                    !["www.reddit.com", "reddit.com"].includes(link.host) ||
                    path[0] != "r"
                ) {
                    return "Invalid host!";
                }

                if (!data[0] || !data[1]) {
                    return "Missing subreddit name or post id.";
                }

                return data;
            } catch {
                return "Not a valid URL!";
            }
        },

        validURL(): boolean {
            return Array.isArray(this.redditURL);
        },
    },
});
</script>
