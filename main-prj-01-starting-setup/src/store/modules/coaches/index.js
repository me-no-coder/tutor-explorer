import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default{
    namespaced: true,
    state(){
        return{
            lastFetch: null,
            coaches:
            [
                {
                    id: 'c1',
                    firstName: 'Please',
                    lastName: 'Refresh',
                    areas: ['Physics', 'Chemistry', 'Maths'],
                    description:
                    "Click on the refresh button to fetch coach details :)",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Dummy',
                    lastName: 'Name',
                    areas: ['Physics', 'Maths'],
                    description:
                    'Just a hardcoded dummy example. Press refresh to see the app work :)',
                    hourlyRate: 30
                }
            ]
        }
    },
    mutations,
    actions,
    getters
};