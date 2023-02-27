
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
    id: "1",
    name:"Deepak",
    email:"deepv2104@gmail.com",
    },
    {
    id: "2",
    name:"Rohan",
    email:"Rohan@gmail.com"
    },
  ];
  return (
    
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
