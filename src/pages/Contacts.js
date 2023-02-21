import ContactForm from "components/ContactForm/ContactForm"
import Filter from "components/Filter/Filter"
import ContactList from "components/ContactList/ContactList"
import { Box, Typography } from "@mui/material"

const Contacts = () => {
    return (
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <Typography sx={{padding:'1rem 0'}} variant="h5">Phonebook</Typography>
            <ContactForm />
            
            <Typography sx={{padding:'1rem 0'}} variant="h5">Contacts</Typography>
            <Filter />
            <ContactList />
        </Box>
    )
}

export default Contacts