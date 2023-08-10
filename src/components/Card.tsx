"use client";

export default function Card() {
  return (
    <div className="hover:scale-110  bg-dustyrose-light flex flex-col justify-center items-center h-full animate-test">
      <header className="flex-grow-0 flex">
        <figcaption>Project Title</figcaption>
        <figure>Git Figure</figure>
      </header>
      <p className="flex-grow">Description</p>
      <footer className="flex-grow-0">Technologies</footer>
    </div>
  );
}

// group-hover:scale-90 hover:!scale-110
