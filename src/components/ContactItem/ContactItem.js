import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

const ContactItem = ({ item }) => {
    
    const dispatch = useDispatch()
    const { name, number, id } = item
    
    return (
        <>
          <p>{name}: {number}</p>
          <button type="button" onClick={()=> dispatch(deleteContact(id))}>Delete</button>
        </>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.objectOf(PropTypes.string),
    onDelete: PropTypes.func
}

export default ContactItem