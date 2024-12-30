import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="bg-white text-white p-4">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-gray-400">
            <Image
                src="/logo_color.png" // Path to your logo image
                alt="Logo"
                width={100} // Set the width
                height={20} // Set the height
                className="object-contain" // Optional: Ensures the logo maintains its aspect ratio
                />
          </Link>
        </div>
        <div className="text-black text-xl flex flex-row gap-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          <Link href="/documentation" className="hover:text-accent">Documentation</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/signin">
            <button className="bg-transparent border-2 border-neutral px-4 py-2 rounded-md hover:bg-gray-200
             text-neutral font-bold">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-secondary text-secondary-content font-bold px-4 py-2 rounded-md hover:bg-accent">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
