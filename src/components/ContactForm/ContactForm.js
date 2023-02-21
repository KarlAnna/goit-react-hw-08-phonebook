import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations'
import { nanoid } from 'nanoid';
import { Box, TextField, Button } from '@mui/material';

export default function ContactForm() {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch()

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const newItem = {
            name,
            number: number,
            id: nanoid()
        }

        dispatch(addContact(newItem));

        setName('')
        setNumber('')
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break
            default:
                break;
        }
    }

    return (
        <Box component='form' onSubmit={formSubmitHandler} sx={{display:'flex', flexWrap:'wrap', gap:'2rem', alignItems:'center', justifyContent:'center', paddingBottom:'1rem'}}>
            <TextField
                label="Name"
                variant="filled" 
                onChange={handleChange}
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <TextField
                label="Number"
                variant="filled" 
                onChange={handleChange}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <Button type="submit" variant="contained" sx={{height:'5vh', lineHeight:'1.2'}}>Add contact</Button>
        </Box>
    );
        
}