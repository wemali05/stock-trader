const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId)
        if (record){
            record.quantity += quatity
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
          state.funds -= stockPrice * quantity
    },

    'SELL_STOCK' (state, {stockId,quantity, stockPrice}){
        const record = state.stock.find(element => element.id == stockId)
        if(record.quantity > quantity) {
             record.quantity -= quatity
        } else {
            state.stock.splice(state.stock.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity
    }
};

const actions = {
    sellStocks({commit}, order){
        commit('SELL_STOCK', order)
    }
};

const getters = {
    stockPortfolio (state, getters) {
            return state.stocks.map(stock => {
                    const record = getters.stocks.find(element => element.id == stock.id);
                    return {
                        id: stock.id,
                        quantity: stock.quantity,
                        name: record.name,
                        price: record.price
                    }
            });
    },
    funds(state){
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}

