import Image from "next/image";
import MailTo from "./components/mailto";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center -mt-5 m-10">
      <Image src='/clarissa_cat_transparent.png' width={450} height={450} alt="cat"/>
      <div className="flex flex-col">
        <div className="items-left justify-left">
          <h1 className="text-black mt-5 text-8xl font-bold">chi mcisaac</h1>
          <p className="text-black mt-5 text-2xl">cs student at Carleton University</p>
          <div className="text-black mt-5 text-2xl">Looking for swe internship opportunities <p className="break-words">for fall 2025</p></div>
          <p className="text-black mt-5 text-2xl">swe intern @ <a href="https://www.linkedin.com/company/tryclover/" className="underline hover:text-gray-600" target="_blank">Clover Labs</a></p>
          <div className="mt-5 flex items-center gap-4">
            <MailTo label="contact me" mailto="chixie.mcisaac@gmail.com" className="bg-black text-2xl text-white p-2 rounded-md w-fit"/>
            <Link href="https://github.com/qimcis" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} className="text-black hover:text-gray-500 transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/chimcisaac" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} className="text-black hover:text-gray-500 transition-colors" />
            </Link>
            <Link href="https://x.com/chimcis" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter size={32} className="text-black hover:text-gray-500 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}