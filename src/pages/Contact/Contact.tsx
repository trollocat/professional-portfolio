import ContactForm from "../../components/ContactForm/ContactForm"
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <iframe title="cv" src="/pdf/Joan Ignacio Gonzalez - Resume.pdf"></iframe>
      <ContactForm />
    </div>
  )
}

export default Contact