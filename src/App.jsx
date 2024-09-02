import css from "./App.module.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("saved-contacts");
  //   if (window.localStorage.getItem("saved-contacts") !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return [];
  // });

  // const deleteContact = (index) => {
  //   setContacts((contacts) => {
  //     return contacts.filter((contact) => contact.id !== index);
  //   });
  // };

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // useEffect(() => {
  //   window.localStorage.setItem(
  //     "saved-contacts",
  //     JSON.stringify(filteredContacts)
  //   );
  // }, [filteredContacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
