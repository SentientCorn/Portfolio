export default function Header() {
  return (
    <nav className="bg-base-300 py-4 font-bold text-xl">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 font-bold text-xl">
          <span className="text-base-text text-3xl">Kornfolio</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#home" className="hover:text-neutral-text">Home</a>
          <a href="#about" className="hover:text-neutral-text">About</a>
          <a href="#projects" className="hover:text-neutral-text">Projects</a>
          <a href="#contact" className="hover:text-neutral-text">Contact</a>
        </div>
      </div>
    </nav>
  );
}

