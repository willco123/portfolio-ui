"use client";
import Divider from "./Divider";

export default function ContactForm({ email }: { email: string | undefined }) {
  function handleEmailSend() {
    const subjectInput = document.getElementById(
      "subjectInput",
    ) as HTMLInputElement;
    const messageInput = document.getElementById(
      "messageInput",
    ) as HTMLTextAreaElement;

    if (subjectInput === null || messageInput === null) return;

    const subject = subjectInput.value;
    const message = messageInput.value;
    if (email === undefined) throw new Error("Email not defined, check env");
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink; // Redirect to mail client
  }
  return (
    <div className="flex justify-between flex-col items-center flex-1 w-full gap-3 p-3">
      <h1
        className="
   text-xl w-full text-center flex-col flex 
  "
      >
        Contact
        <Divider />
      </h1>
      <input
        type="text"
        placeholder="Subject"
        id="subjectInput"
        className="
        outline-none rounded

        dark:bg-subtle-gray-light bg-subtle-white-darker
        placeholder-subtle-gray dark:placeholder-subtle-white
        w-10/12 
  "
      />
      <textarea
        placeholder="Send me a message!"
        id="messageInput"
        className="

        dark:bg-subtle-gray-light bg-subtle-white-darker
        placeholder-subtle-gray dark:placeholder-subtle-white
        rounded outline-none
        min-h-[200px] flex-1 flex-grow  w-10/12 
    "
      />
      <footer className="">
        <button
          className="
    dark:border-softblue-dark border-softblue border-2
    rounded p-2 
    "
          onClick={handleEmailSend}
        >
          Send Email
        </button>
      </footer>
    </div>
  );
}
