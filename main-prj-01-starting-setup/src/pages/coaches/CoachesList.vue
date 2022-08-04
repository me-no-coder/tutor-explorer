<template>
<div className="bg">
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
        <p>{{ error }}</p>
    </base-dialog>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button id="refresh" mode="outline" @click="loadCoaches(true)">Refresh</base-button>
                <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to register as a coach</base-button>
                <base-button v-if="!isCoach && isLoggedIn && !isLoading" link to="/register">Register as Coach</base-button>
            </div>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <ul v-else-if="hasCoaches">
                <coach-item v-for="coach in filteredCoaches" 
                    :key="coach.id"
                    :id="coach.id"
                    :first-name="coach.firstName"
                    :last-name="coach.lastName"
                    :rate="coach.hourlyRate"
                    :areas="coach.areas"
                ></coach-item>
            </ul>
            <h3 v-else>No Coaches Found.</h3>
        </base-card>
    </section>
</div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default{
    components:
    {
        CoachItem,
        CoachFilter
    },
    data()
    {
        return {
            error: null,
            isLoading: false,
            activeFilters:
            {
                Physics: true,
                Chemistry: true,
                Maths: true
            }
        };
    },
    computed:
    {
        isLoggedIn()
        {
            return this.$store.getters.isAuthenticated;
        },
        isCoach()
        {
            return this.$store.getters['coaches/isCoach'];
        },
        filteredCoaches()
        {
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(coach =>
            {
                if(this.activeFilters.Physics && coach.areas.includes('Physics'))
                {
                    return true;
                }
                if(this.activeFilters.Chemistry && coach.areas.includes('Chemistry'))
                {
                    return true;
                }
                if(this.activeFilters.Maths && coach.areas.includes('Maths'))
                {
                    return true;
                }
                return false;
            });
        },
        hasCoaches()
        {
            return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
        },
    },
    created()
    {
        this.loadCoaches();
    },
    methods:
    {
        setFilters(updatedFilters)
        {
            this.activeFilters = updatedFilters;
        },
        async loadCoaches(refresh= false)
        {
            this.isLoading=true;
            try
            {
                await this.$store.dispatch('coaches/loadCoaches', {forceRefresh: refresh});
            }
            catch(error)
            {
                this.error=error.message||'Something went wrong!';
            }
            this.isLoading=false;
        },
        handleError()
        {
            this.error=null;
        }
    }
}
</script>

<style scoped>
    .app{
        max-height: 100%;
        
    }
    .bg{
        background-image: linear-gradient(rgba(255, 168, 236, 0.726), rgba(148, 230, 255, 0.979)),url("bgimage.jpg");
        /* background-position: center; */
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        padding: 100px;
    }
    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    }

    .controls {
    display: flex;
    justify-content: space-between;
    }

    #refresh{
        color: black;
    }

    #refresh:hover{
        color: white;
    }
</style>