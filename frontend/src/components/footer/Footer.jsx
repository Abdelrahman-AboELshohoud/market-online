import { Link } from "react-router-dom";
import Logo from "../Logo";
import {FaFacebookSquare, FaGithubSquare, FaInstagramSquare} from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="h-fit customwq shadow-md bg-secondary pt-8 pb-6">
      <div className="grid grid-cols-4 gap-y-4 justify-items-center">

      <div className="col-span-4 sm:col-span-1 flex gap-2 flex-col">
        <Logo style="scale-90 " />

        <div className="text-mblack w-32 text-xs scale-90 font-medium leading-5">
          Explore quality products with seamless online shopping across the
          Middle East.
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 flex gap-4 flex-col">
        <h3 className="font-semibold text-lg">Categories</h3>
        <div className="flex flex-col gap-2">
          <Link className="text-sm font-medium">{`Men's Clothing`}</Link>
          <Link className="text-sm font-medium">Kitchen Tools</Link>
          <Link className="text-sm font-medium">Accessories</Link>
          <Link className="text-sm font-medium">Phones</Link>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 flex gap-4 flex-col">
        <h3 className="font-semibold text-lg">Costumer Services</h3>
        <div className="flex flex-col gap-2">
          <Link className="text-sm font-medium">Shipping</Link>
          <Link className="text-sm font-medium">Returns</Link>
          <Link className="text-sm font-medium">FAQs</Link>
          <Link className="text-sm font-medium">Contact</Link>
        </div>
      </div>
      <div className="col-span-4 sm:col-span-1 flex gap-4 flex-col ">
        <h3 className="font-semibold text-2xl sm:text-lg sm:m-0 mt-4 ">Follow Us</h3>
        <div className="flex gap-2">
          <Link className="text-sm font-normal flex  p-0.5 rounded-sm shadow-md bg-mwhite hover:scale-110 transition">
          <FaFacebookSquare size={28} color="#1877F2" /></Link>
          <Link className="text-sm font-normal p-0.5 rounded-sm shadow-md bg-mwhite hover:scale-110 transition"><FaSquareXTwitter size={28} color="#333" /></Link>
          <Link className="text-sm font-normal  p-0.5 rounded-sm shadow-md bg-mwhite hover:scale-110 transition"><FaInstagramSquare size={28}  color="#E4405F" /></Link> 
          <Link className="text-sm font-normal  p-0.5 rounded-sm shadow-md bg-mwhite hover:scale-110 transition"><FaGithubSquare size={28} color="#151515" /></Link>
        </div>
        </div>
      </div>
        <div className="text-center text-sm sm:text-base font-semibold mt-8 pt-4">© 2024 Summit Shop. All rights reserved.</div>
    </footer>
  );
}
