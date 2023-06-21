import Link from "next/link";
import CoverImage from "./coverImage";
import _ from "lodash";

const MainNav = () => {
  const linkClassname =
    "whitespace-nowrap mr-2 py-2 px-4 cursor-pointer rounded-xl bg-red-100 hover:bg-red-300";
  return (
    <div>
      <div className="bg-red-200 w-full">
        <div className="flex flex-row px-4 md:px-20 lg:px-40 py-10">
          <div className="float-left w-full font-bold text-xl">
            <Link href="/">Give Blood and Save Life.</Link>{" "}
          </div>{" "}
          <div className="float-right flex flex-row items-center">
            <span className={linkClassname}><Link href="/">Home</Link></span>{" "}
            <span className={linkClassname}><Link href="/page/about-us">About Us</Link></span>
            <span className={linkClassname}><Link href="/contactus">Contact Us</Link></span>
            <span className={linkClassname}><Link href="/register">Sign Up</Link></span>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default MainNav;
