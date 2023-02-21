import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Typography, Button } from '@mui/material';

const ContactItem = ({ item }) => {
    
    const dispatch = useDispatch()
    const { name, number, id } = item
    
    return (
        <>
          <Typography variant="body1">{name}: {number}</Typography>
          <Button variant="outlined" sx={{height:'4vh'}} type="button" onClick={()=> dispatch(deleteContact(id))}>Delete</Button>
        </>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.objectOf(PropTypes.string),
    onDelete: PropTypes.func
}

export default ContactItem