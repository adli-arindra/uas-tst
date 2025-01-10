import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center">
            
            <div className="space-x-6 flex gap-8">
              <Link href="/documentation" className="hover:text-gray-400">API Documentation</Link>
              <Link href="https://github.com/adli-arindra/uas-tst" className="hover:text-gray-400">Website GitHub Repo</Link>
              <Link href="https://github.com/adli-arindra/uas-tst-api" className="hover:text-gray-400">API GitHub Repo</Link>
              <Link href="https://docs.google.com/document/d/1wqN6p-ySrwJPZ5vrZiIVMXVulCfyFldlqgxeBCmXRqM/edit?usp=sharing" className="hover:text-gray-400">Google Document</Link>
            </div>
          </div>
  
          <div className="mt-6 text-center text-sm">
            <p>&copy; TRICH BARBERSPACE</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  