import Image from "next/image";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import About from "@/components/About";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    < >
      {/* <nav className="bg-[#044E83] h-20 flex justify-around items-center">
        <Image src={'/gov.png'} alt="logo" width={75} height={75} />
        <h1 className="text-white">
          Tuition Free Education Program on Latest Technologies
        </h1>
        <ul className="flex space-x-3">
          <h1 className="text-white">Home</h1>
          <h1 className="text-white">About</h1>
          <h1 className="text-white">Contact</h1>
          <h1 className="text-white">Apply</h1>
        </ul>
      </nav>
      <div></div>
      <div></div>
      <div></div> */}
      <Navbar />
      <Hero />
      <About />
      <Services />

      <Footer />
    </>
  );
}
