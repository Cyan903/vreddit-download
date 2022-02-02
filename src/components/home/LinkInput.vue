<template>
    <div class="columns">
        <input
            class="column is-full"
            type="text"
            v-model="link"
            placeholder="Enter a reddit link"
        />
    </div>
    <Button title="Download" @click="redirect" :disabled="!validURL" />
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
