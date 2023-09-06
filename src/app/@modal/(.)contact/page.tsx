import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
const email = process.env.EMAIL;

export default async function Page() {
  return (
    <>
      <Modal>
        <ContactForm email={email} />
      </Modal>
    </>
  );
}
