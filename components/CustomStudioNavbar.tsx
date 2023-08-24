import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const CustomStudioNavbar = (props: any) => {
  return (
    <div className="bg-[#101112] flex items-center justify-between p-2">
      <div>
        <Link href="/" className="text-[#fff] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#fff] mr-2" />
          Go to website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default CustomStudioNavbar;
