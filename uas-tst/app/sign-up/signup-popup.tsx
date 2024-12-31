import Link from "next/link";
import React from "react";
import Image from "next/image";

const Popup: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 flex flex-col items-center">
        <Image
        src="/jempol.png"
        width={512}
        height={512}
        alt="mantap"/>
        <h2 className="text-4xl font-semibold mb-8 text-gray-800 text-center">alhamdulillah</h2>
        <div className="flex justify-center space-x-4">
          <Link href="/sign-in" className="btn btn-accent">
            Sign In Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popup;
