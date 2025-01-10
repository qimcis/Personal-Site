export default function About() {
    return (
      <div className="max-w-xl mx-auto flex flex-col text-black px-6 my-10">
        <p className="text-2xl font-semibold">I'm Chi. I love to build projects I believe in.</p>
        <p className="text-2xl mt-5">Currently, I'm working on <i>Pearl</i>, a webcomic platform and creative ecosystem with the aim of providing proper monetization outlets for creators, while allowing them maintain their creative freedom.</p>
        <p className="text-2xl font-semibold mt-5">In the coming year, I'm looking to</p>
        <ul className="text-2xl">
            <li>1. Launch <i>Pearl</i></li>
            <li>2. Start a <a href="https://www.socratica.info/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Socratica</a> node at my university</li>
            <li>3. Trek to Everest Base Camp</li>
            <li>4. Start a newsletter</li>
        </ul>
      </div>
    );
  }