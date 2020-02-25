import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

import * as action from './action';

Vue.use(Vuex);

export default new Vuex.Store({
    action,
    modules: {
        stocks,
        portfolio
    }
})