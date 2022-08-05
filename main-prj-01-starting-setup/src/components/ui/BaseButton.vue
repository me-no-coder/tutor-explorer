<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>

export default{
    props:
    {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    },

}
</script>


<style scoped>
    button,
    a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font: inherit;
    background-color: #3a0061;
        /* border: 1px solid #fff; */
    color: #fff;
    cursor: pointer;
    border-radius: 30px;
    margin: 1rem 0.5rem 1rem;
    display: inline-block;
    border: outset;
    border-color: #3d008d;
    border-width: 1px;
    transition: 0.5s;
    }

    a:hover,
    a:active,
    button:hover,
    button:active {
    background-color: #270041;
    border-color: #270041;
    transition: 0.5s;
    }

    .flat {
    background-color: #270041;
    color: #fff;
    /* border: none; */
    }

    .outline {
    background-color: transparent;
    border-color: #270041;
    /* color: #fff; */
    }

    .flat:hover,
    .flat:active,
    .outline:hover,
    .outline:active {
    background-color: #270041;
    transition: 0.5s;
    }
</style>