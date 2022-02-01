<template>
    <div class="navbar container">
        <div class="navbar-brand">
            <router-link class="navbar-item logo" to="/">
                <h2>vreddit<b>download</b></h2>
            </router-link>

            <a
                role="button"
                class="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target=""
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-start">
            <router-link class="navbar-item" to="/">Home</router-link>
            <router-link class="navbar-item" to="/about">About</router-link>
        </div>

        <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Github</a>

                <div class="navbar-dropdown">
                    <a class="navbar-item">Frontend</a>
                    <a class="navbar-item">API</a>
                    <hr class="navbar-divider" />
                    <a href="" class="navbar-item">ffmpeg.wasm</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
@import "https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap"

.logo
    font-weight: bolder
    text-shadow: 1px 1px 1px #000

.logo b
    font-family: "Prompt", Arial
    color: #000

.logo h2
    color: #1185D7
</style>
