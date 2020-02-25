import stocks from '../../data/stocks'

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks
    },
    'RND_STOCK' (state) {
        
    }
};

const actions = {
    buyStocks: ({commit}, order) => {
         commit();
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCK');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}