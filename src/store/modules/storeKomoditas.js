const storeKomoditas = {
    namespaced: true,
    state: {
        komoditasList: []
    },
    getters: {
        dataCommodity(state) {
            return state.komoditasList.length ? state.komoditasList : JSON.parse(localStorage.getItem('commdity__list'))
        },
    },
    mutations: {
        mutSetDataCommodity(state, payload) {
            if(!!payload && payload.length) {
                state.komoditasList = payload
                localStorage.setItem('commdity__list', JSON.stringify(payload))
            }
        },
    },
    actions: {
        setDataCommodity({commit}, payload) {
            commit('mutSetDataCommodity', payload)
        },
    }
}

export default storeKomoditas;