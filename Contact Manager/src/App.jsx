import { useState } from 'react';
import './App.css';
import AddContacts from './components/AddContacts';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (data) => {
    setContacts((prevContacts) => [...prevContacts, data]);
  };

  return (
    <>
      <Header />
      <AddContacts addContact={addContact} />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;

