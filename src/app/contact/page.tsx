import ContactForm from "@/components/ContactForm";
const email = process.env.EMAIL;
export default function Contact() {
  return (
    <div className="w-full flex-1 flex ">
      <ContactForm email={email} />
    </div>
  );
}
