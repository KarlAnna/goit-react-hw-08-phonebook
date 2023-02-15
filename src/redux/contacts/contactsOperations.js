import * as mockapi from "services/mockapi"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await mockapi.fetchContacts()
            return contacts
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            const addedContact = await mockapi.addContact(contact)
            return addedContact
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            const deletedContact = await mockapi.deleteContact(id)
            return deletedContact
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)