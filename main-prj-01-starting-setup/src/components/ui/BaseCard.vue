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
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 30px auto 30px auto;
    max-width: 50rem;
    text-align: center;
    color: rgb(0, 0, 0);
    border: white;
    
    background-color:rgba(0,0,0,.1)
    }
</style>