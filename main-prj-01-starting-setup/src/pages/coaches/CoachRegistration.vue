<template>
    <section className="bg">
        <base-card>
            <h2>Register as a Coach now!</h2>
            <coach-form @save-data="saveData"></coach-form>
        </base-card>
    </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default{
    components:
    {
        CoachForm
    },
    methods:
    {
        saveData(data)
        {
            this.$store.dispatch('coaches/registerCoach', data);
            this.$router.replace('/coaches');
        }
    },
}
</script>


<style scoped>
.bg{
    background-image: linear-gradient(rgba(255, 168, 236, 0.726), rgba(148, 230, 255, 0.979));
    /* background-position: center; */
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding: 100px;
}
</style>