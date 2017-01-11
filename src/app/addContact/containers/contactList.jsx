import React from 'react';
import AddContact from '../addContact.jsx'
import ContactItem from '../contactItem.jsx'

class ContactList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contactList : [],
            name: '',
            tel: ''
        };

        this.addContact = this.addContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTelChange = this.handleTelChange.bind(this);
    }

    addContact () {
        let contactElement = {
            name: this.state.name,
            tel: this.state.tel,
            key: Date.now()
        };

        this.setState({
            contactList: this.state.contactList.concat([contactElement]),
            name: '',
            tel: ''
        })
    }

    deleteContact (index) {
        const newState = this.state.contactList;
        if (newState.indexOf(index) > -1) {
            newState.splice(newState.indexOf(index), 1);
            this.setState({contactList: newState})
        }
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleTelChange(event) {
        this.setState({tel: event.target.value});
    }

    render() {
        return (
            <div>
                <AddContact
                    name={this.state.name}
                    tel={this.state.tel}
                    onNameChange={this.handleNameChange}
                    onTelChange={this.handleTelChange}
                    onAddContact={this.addContact}
                />

                {
                    this.state.contactList.map((item) =>
                        <ContactItem
                            contact={item}
                            deleteContact={() => this.deleteContact(item)}
                            key={item.key}
                        />
                    )
                }
            </div>
        );
    }

}

export default ContactList;
