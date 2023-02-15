import ContactForm from "components/ContactForm/ContactForm"
import Filter from "components/Filter/Filter"
import ContactList from "components/ContactList/ContactList"

const Contacts = () => {
    return (
        <div className="container">
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    )
}

export default Contacts