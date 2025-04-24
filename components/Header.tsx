export default function Header() {
    return (
      <header className="flex justify-between items-center px-8 py-4 shadow-md">
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>
    );
  }