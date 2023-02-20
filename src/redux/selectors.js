// CONTACTS
export const selectContacts = state => state.contacts

// FILTER
export const selectFilterValue = state => state.filter

// USER
export const selectUser = state => state.auth.user
export const selectIsLoggedIn = state => state.auth.isLoggedIn