import ContactForm from "../molecules/ContactForm";
import Section from "../molecules/Section";

function Contact() {
  return (
    <Section title="Contacto">
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 sm:text-xl ">
          Si te ha interesado mi {" "}
          <strong className="font-normal"> portfolio</strong> no lo dudes y deja
          tu mensaje
        </p>
        <ContactForm />
      </div>
    </Section>
  );
}

export default Contact;
