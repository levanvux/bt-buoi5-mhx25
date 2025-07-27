import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactCardContainer from "./components/ContactCardContainer";

function App() {
  return (
    <div>
      <h1>Contact Book</h1>
      <p>Keep track of where your friends live</p>
      <ContactForm />
      <ContactCardContainer />
    </div>
  );
}

export default App;
