// Queries
import followingList from './followingList'
import placesAutoComplete from './placesAutoComplete'
import allUsersByName from './allUsersByName'

// Mutations
import followUser from './followUser'
import updateUser from './updateUser'
import updateLocationAndTimezone from './updateLocationAndTimezone'
import updateLocationAndTimezoneForUser from './updateLocationAndTimezoneForUser'
import addManualPlace from './addManualPlace'
import addManualPerson from './addManualPerson'
import unfollow from './unfollow'
import removeManualPerson from './removeManualPerson'
import removeManualPlace from './removeManualPlace'
import sortFollowings from './sortFollowings'

const resolvers = {
  Query: {
    title: () => 'There PM!',
    userId: async (obj, args, ctx) => ctx.userId,
    user: (obj, args, ctx) => ctx.user.get(),
    followingList,
    placesAutoComplete,
    allUsersByName,
  },

  Mutation: {
    refresh: () => ({ id: 1 }),
    updateUser,
    followUser,
    updateLocationAndTimezone,
    updateLocationAndTimezoneForUser,
    addManualPlace,
    addManualPerson,
    unfollow,
    removeManualPerson,
    removeManualPlace,
    followingList,
    sortFollowings,
  },

  // TYPES
  User: {
    __isTypeOf: ({ __resolveType }) =>
      __resolveType ? __resolveType === 'User' : true,
  },
  ManualPerson: {
    __isTypeOf: ({ __resolveType }) =>
      __resolveType ? __resolveType === 'ManualPerson' : true,
  },
  ManualPlace: {
    __isTypeOf: ({ __resolveType }) =>
      __resolveType ? __resolveType === 'ManualPlace' : true,
  },
}

export default resolvers
