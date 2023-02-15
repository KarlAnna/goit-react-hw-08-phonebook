import * as connectapi from "services/connections-api"
import { createAsyncThunk } from "@reduxjs/toolkit"

// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchAll',
//     async (_, { rejectWithValue }) => {
//         try {
//             const contacts = await connectapi.fetchContacts()
//             return contacts
//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//     }
// )