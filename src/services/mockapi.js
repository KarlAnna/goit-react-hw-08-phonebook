import axios from 'axios';

axios.defaults.baseURL = 'https://63e219f7109336b6cbff8726.mockapi.io'

export async function fetchContacts() {
    const { data } = await axios.get('/contacts')
    return data
}

export async function addContact(item) {
    const { data } = await axios.post('/contacts', item)
    return data
}

export async function deleteContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`)
    return data
}