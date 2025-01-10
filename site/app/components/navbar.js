export default function Navbar() {
  return (
    <div className="flex flex-row text-black justify-center p-5 space-x-20 text-2xl font-semibold ml-10 mr-10">
      <a className="hover:text-gray-500" href="/">home</a>
      <a className="hover:text-gray-500" href="/about">about</a>
      <a className="hover:text-gray-500" href="/art">art</a>
      <a className="hover:text-gray-500" target="_blank" href="https://drive.google.com/file/d/12WlqVicwMGoYdqDB2YzovPbv699Iwvj8/view?usp=sharing">cv</a>
    </div>
  );
}
