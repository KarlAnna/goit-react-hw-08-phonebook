import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import { fetchContacts } from '../../redux/contacts/contactsOperations'
import ContactItem from "../ContactItem/ContactItem"

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
            {isLoading && <div>Loading ...</div>}
            {getVisibleContacts().length > 0 && (
                <ul>
                    {getVisibleContacts().map((item) =>
                        <li key={item.id}>
                            <ContactItem item={item} />
                        </li>
                    )}
                </ul>
            )}
        </>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    onDelete: PropTypes.func
}

export default ContactList