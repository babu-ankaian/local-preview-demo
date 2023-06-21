import Link from "next/link";
import CoverImage from "./coverImage";
import _ from "lodash";

const LayoutFooter = () => {
  const linkClassname =
    "whitespace-nowrap mr-2 py-2 px-4 cursor-pointer rounded-xl bg-yellow-300 hover:bg-yellow-500";
  return (
    <div>
      <div className="bg-red-200 w-full py-10 text-center">
     We are here for you! To finding Blood Donors.
      </div>
      {/* <div className="bg-gray-800 text-white text-xs w-full text-center">
     Contentful Learning Services
      </div> */}
    </div>
  );
};

export default LayoutFooter;
