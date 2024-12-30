import Link from "next/link";
import Sidebar from "../components/sidebar";
import Image from "next/image";

import Overview from "./overview";

const Documentation = () => {
    return (
        <div className="flex flex-row">
            <Sidebar/>
            <div className="min-h-screen flex-1 bg-white text-black flex flex-col items-center">
                <div className="mt-16 flex lg:flex-row flex-col items-center gap-8 mb-8">
                    <div>
                        <Image
                            src="/si-om.png"
                            width={450}
                            height={50}
                            alt="si om"/>
                        <div className="text-xl text-white text-center font-extralight bg-primary p-4 rounded-xl border-4 border-accent">
                            <h1 className="inline-block text-4xl mr-2">"LUAR BIASA!"</h1> 
                            <h1 className="inline-block text-sm font-extralight italic">- om juhardi</h1>
                        </div>
                    </div>
                    <div className="min-h-full pt-16 px-2 flex flex-col gap-8">
                        <div>
                            <h1 className="text-xl text-black font-bold">Learn more about</h1>
                            <h1 className="text-8xl text-accent font-bold">TRICH API</h1>
                        </div>
                        <div className="flex flex-col ml-4 gap-1">
                            <Link href="" className="text-primary hover:text-accent text-xl underline font-bold">Overview &rarr;</Link>
                            <Link href="" className="text-primary hover:text-accent text-xl underline font-bold">Get Started &rarr;</Link>
                            <Link href="" className="text-primary hover:text-accent text-xl underline font-bold">REST APIs &rarr;</Link>
                        </div>
                    </div>
                </div>
                <Overview/>
            </div>
        </div>
    );
  };
  
  export default Documentation;
  