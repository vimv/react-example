import React from 'react';

class AddContact extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Contact Name: <input type="text" value={this.props.name} onChange={this.props.onNameChange} />
                Contact Phone: <input type="tel" value={this.props.tel} onChange={this.props.onTelChange} />
                <button onClick={this.props.onAddContact}>Add</button>
            </div>
        );
    }

}

export default AddContact;
