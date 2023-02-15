import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

// AUTH

export async function register(user) {
    const data = await axios.post('/users/signup', user)
    return data
}

export async function login() {
    const data = await axios.post('/users/login')
    return data
}

export async function logout() {
    const data = await axios.post('/users/logout')
    return data
}

export async function current() {
    const data = await axios.get('/users/current')
    return data
}

// CONTACTS

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