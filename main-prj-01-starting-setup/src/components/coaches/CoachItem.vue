<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>₹{{ rate }} / hour</h4>
        <div>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        </div>
        <div class="actions">
            <base-button id="blackItem" mode="outline" link :to="coachContactLink">
                Contact
            </base-button>
            <base-button link :to="coachDetailsLink">
                View Details
            </base-button>
        </div>
    </li>
</template>

<script>

export default{
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed:
    {
        fullName()
        {
            return this.firstName + ' ' + this.lastName;
        },
        // coachContactLink()
        // {
        //     return this.$route.path + '/' + this.id + '/contact';
        // },
        coachContactLink()
        {
            return this.$route.path + '/' + this.id + '/contact';
        },
        coachDetailsLink()
        {
            return this.$route.path + '/' + this.id;
        }
    }
}
</script>


<style scoped>
    li {
    margin: 1rem 0;
    border: 3.5px solid rgba(46, 0, 155, 0.726);
    border-style: double;
    border-radius: 6px;
    padding: 1rem;
    }

    h3 {
    font-size: 1.5rem;
    }

    h3,
    h4 {
    margin: 0.5rem 0;
    }

    div {
    margin: 0.5rem 0;
    }

    .actions {
    display: flex;
    justify-content: flex-end;
    }

    #blackItem{
        color: black;
    }

    #blackItem:hover{
        color:white;
    }
</style>