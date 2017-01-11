require('../less/style.less');

import React from 'react';
import {render} from 'react-dom';
import ContactList from './addContact/containers/contactList.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Contact List</h1>
                <ContactList />
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));
