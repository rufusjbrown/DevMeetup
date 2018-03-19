import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/08/00/32/london-1081820_960_720.jpg',
        id: 'djflsjflsdjf23',
        title: 'Meetup in London',
        date: '2017-07-17' },
      {
        imageUrl: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
        id: 'dsfsdjlk2lj2',
        title: 'Meetup in Paris',
        date: '2017-07-19'
      }
    ],
    user: {
      id: 'efsdfsdfs',
      registeredMeetups: ['dsfsdjlk2lj2']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'hardcodedid'
      }
      // reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.splice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
