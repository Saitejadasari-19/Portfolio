export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#hero" className="text-2xl font-bold">Portfolio</a>
        <ul className=" md:flex space-x-6">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
