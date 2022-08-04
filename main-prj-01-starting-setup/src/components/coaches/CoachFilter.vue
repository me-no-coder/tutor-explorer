<template>
    <base-card>
        <h2>Find Your Coach</h2>
        <span class="filter-option">
            <input type="checkbox" id="Physics" checked @change="setFilter" />
            <label for="Physics">Physics</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="Chemistry" checked @change="setFilter" />
            <label for="Chemistry">Chemistry</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="Maths" checked @change="setFilter" />
            <label for="Maths">Maths</label>
        </span>
    </base-card>
</template>

<script>

export default{
    emits: ['change-filter'],
    data()
    {
        return{
            filters:
            {
                Physics: true,
                Chemistry: true,
                Maths: true
            }
        }
    },
    methods:
    {
        setFilter(event)
        {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters=updatedFilters;
            this.$emit('change-filter', updatedFilters);
        }
    }
}
</script>


<style scoped>
    h2 {
    margin: 0.5rem 0;
    }

    .filter-option {
    margin-right: 1rem;
    }

    .filter-option label,
    .filter-option input {
    vertical-align: middle;
    }

    .filter-option label {
    margin-left: 0.25rem;
    }

    .filter-option.active label {
    font-weight: bold;
    }
</style>