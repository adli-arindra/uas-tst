"use client";
import Link from 'next/link';
import Image from 'next/image';
import { auth, sign_out } from '../firebase/auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { getTokenByEmail } from '../firebase/token';

const TokenPopup = ({ email, token, onClose }: { email: string, token: string, onClose: () => void }) => {
  // Function to handle copying token to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(token)
      .then(() => {
        alert("Token copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start  text-gray-800">
        <h2 className="text-xl font-semibold mb-4 text-center">Token Information</h2>
        <div className="mb-4">
          <strong>Email:</strong>
          <p className="text-gray-700">{email}</p>
        </div>
        <div className="mb-4">
          <strong>Token:</strong>
          <div className="flex items-center bg-gray-200 p-2 rounded-xl border-gray-800 border-1">
            <p className="text-gray-700 mr-2">{token}</p>
            <button 
              onClick={copyToClipboard} 
              className="text-xs text-gray-500 font-light ml-4 hover:text-accent hover:bg-gray-300 hover:font-semibold p-1 rounded-lg">
              Copy
            </button>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="btn btn-accent min-w-full mt-2">
          Close
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [token, setToken] = useState("");
  const value = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });

  useEffect(() => {
    if (user) setSignedIn(true);
    else setSignedIn(false);
  }, [user])

  const handleGetToken = async () => {
    console.log("masuk");
    if (user) {
      const new_token = await getTokenByEmail(user.email as string);
      setToken(new_token);
      setShowPopUp(true);
    }
    else {
      console.log("No User");
    }
  }

  return (
    <header className="bg-white text-white p-4">
      {showPopUp && <TokenPopup email={user?.email as string} token={token} onClose={() => setShowPopUp(false)} />}
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
        {/* Middle Navigation - Make it centered */}
        <div className="flex-grow flex justify-center items-center">
          <div className="text-black text-xl flex flex-row gap-8">
            <Link href="/" className="hover:text-accent">Home</Link>
            <Link href="/documentation" className="hover:text-accent">Documentation</Link>
          </div>
        </div>
        {/* Right side - Sign in/out buttons */}
        {signedIn ? 
        (<div className="flex space-x-4">
          <button className="btn btn-white border-gray-800 border-1" onClick={
            async () => {
              await sign_out();
              setSignedIn(false);
            }
          }>
            Sign Out
          </button>
          <button className="btn btn-accent text-secondary-content font-bold px-4 py-2 rounded-md"
          onClick={handleGetToken}>
            Get Token
          </button>
        </div>)
        : 
        (<div className="flex space-x-4">
          <Link href="/sign-in">
            <button className="btn btn-white border-gray-800 border-1">
              Sign In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="btn btn-secondary text-secondary-content font-bold px-4 py-2 rounded-md hover:bg-accent">
              Sign Up
            </button>
          </Link>
        </div>)
        }
      </div>
    </header>
  );
};

export default Navbar
