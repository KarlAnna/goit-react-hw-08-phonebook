import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOperations";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: {
        // fetchContacts
        [fetchContacts.pending]: (state, { payload }) => {
            state.isLoading = true
            state.error = null
        },
        [fetchContacts.fulfilled]: (state, { payload }) =>{
            state.items = payload
            state.isLoading = false
        },
        [fetchContacts.rejected]: (state, { payload }) =>{
            state.isLoading = false
            state.error = payload
        },
        // addContact
        [addContact.pending]: (state, { payload }) => {
            state.isLoading = true
            state.error = null
        },
        [addContact.fulfilled]: (state, { payload }) =>{
            state.items.push(payload)
            state.isLoading = false
        },
        [addContact.rejected]: (state, { payload }) =>{
            state.isLoading = false
            state.error = payload
        },
        // deleteContact
        [deleteContact.pending]: (state, { payload }) => {
            state.isLoading = true
            state.error = null
        },
        [deleteContact.fulfilled]: (state, { payload }) => {
            const index = state.items.findIndex(item => item.id === payload.id)
            state.items.splice(index, 1)
            state.isLoading = false
        },
        [deleteContact.rejected]: (state, { payload }) =>{
            state.isLoading = false
            state.error = payload
        },
    }
})

export default contactsSlice.reducer