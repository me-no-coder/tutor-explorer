export default {
    registerCoach(state, payload)
    {
        state.coaches.push(payload);
    },
    setCoaches(state, payload)
    {
        state.coaches=payload;
    },
    setFetchTimeStamp(state)
    {
        state.lastFetch=new Date().getTime();
    },
    shouldUpdate(state)
    {
        const lastFetch=state.lastFetch;
        if(!lastFetch)
        {
            return true;
        }
        const currentTimeStamp=new Date().getTime();
        return (currentTimeStamp-lastFetch)/1000 > 60;
    }
};