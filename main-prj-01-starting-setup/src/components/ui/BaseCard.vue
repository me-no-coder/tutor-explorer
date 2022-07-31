<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
    .card {
        /* padding-top: 100px!important; */
    border-radius: 12px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: auto ;
    max-width: 40rem;
    text-align: center;
    color: rgb(0, 0, 0);
    border:  white;
    }
</style>