import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import { fetchContacts } from '../../redux/contacts/contactsOperations'
import ContactItem from "../ContactItem/ContactItem"
import { Box, List, ListItem } from '@mui/material';

const ContactList = () => {

    const { items, isLoading } = useSelector(selectContacts)
    const filter = useSelector(selectFilterValue)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])

    const getVisibleContacts = () => {
        const normFilter = filter.toLowerCase().trim()
        if (filter.length > 0) {
            return items.filter(item => item.name.toLowerCase().includes(normFilter))
        }
        return items
    }
    
    return (
        <>
            {isLoading && <Box>Loading ...</Box>}
            {getVisibleContacts().length > 0 && (
                <List>
                    {getVisibleContacts().map((item) =>
                        <ListItem key={item.id} sx={{display:'flex', gap:'3vw'}}>
                            <ContactItem item={item} />
                        </ListItem>
                    )}
                </List>
            )}
        </>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    onDelete: PropTypes.func
}

export default ContactList