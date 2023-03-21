import _ from 'lodash'
import { axiosRequest } from '@/services/services.js'

export const state = () => ({
  pdbs: [],
})

export const getters = {
  getOraclePdbs: (state) => {
    const pdbs = _.groupBy(state.pdbs, 'hostname')
    return pdbs
  },
}

export const mutations = {
  SET_PDBS: (state, payload) => {
    state.pdbs = payload
  },
}

export const actions = {
  async getPdbs({ commit, getters, dispatch }) {
    dispatch('onLoading')

    const config = {
      method: 'get',
      url: 'hosts/technologies/oracle/databases/pdbs',
      params: {
        'older-than': getters.getActiveFilters.date,
        environment: getters.getActiveFilters.environment,
        location: getters.getActiveFilters.location,
      },
    }

    await axiosRequest('baseApi', config).then((res) => {
      dispatch('offLoading')
      commit('SET_PDBS', res.data)
    })
  },
  async getOraclePdbsByHost({ commit, getters, dispatch }, hostname) {
    const config = {
      method: 'get',
      url: `/hosts/technologies/oracle/databases/change-list/${hostname}/pdbs`,
      params: {
        'older-than': getters.getActiveFilters.date,
        environment: getters.getActiveFilters.environment,
        location: getters.getActiveFilters.location,
      },
    }

    await axiosRequest('baseApi', config).then((res) => {
      dispatch('offLoading')
      console.log(res.data)
    })
  },
}
