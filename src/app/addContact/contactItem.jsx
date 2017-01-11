import React from 'react';

class ContactItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div key={this.props.contact.key}>{this.props.contact.name} {this.props.contact.tel}
                <button onClick={this.props.deleteContact}>Delete</button>
            </div>
        );
    }

}

export default ContactItem;
