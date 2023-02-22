// CONTACTS
export const selectContacts = state => state.contacts

// FILTER
export const selectFilterValue = state => state.filter

// USER
export const selectUserName = state => state.auth.user.name
export const selectIsLoggedIn = state => state.auth.isLoggedIn
export const selectIsRefreshing = state => state.auth.isRefreshing