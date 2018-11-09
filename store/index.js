import Vuex from "vuex";
import jobs from '@/data/jobs';


const createStore = () => {
  return new Vuex.Store({ 
    state: {
        loadedJobs: [],
        jobs
    },
    mutations: {
     
    },
    actions: {
      
    },
    getters: {
      loadedJobs(state) {
        return state.jobs;
      },
      loadedJobsByIndex(state, index) {
        return state.jobs[index];
      }
    }
  });
};

export default createStore;
