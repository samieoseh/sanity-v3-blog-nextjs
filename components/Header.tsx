import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">Bloggit</Link>
      </div>
      <div>
        <Link
          href="https://www.papareact.com/universityofcode"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        >
          Sign up to the University of Code
        </Link>
      </div>
    </header>
  );
};

export default Header;
