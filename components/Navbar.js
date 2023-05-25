import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between flex-wrap bg-black">
      <div className="flex items-center flex-shrink-0 text-white ml-6">
        <Link href="/">
          <Image
            src="https://thumbs.dreamstime.com/b/white-dumbbell-gym-logo-black-background-workout-sign-vector-template-172909186.jpg"
            alt="Gym Logo"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div className="block lg:hidden"></div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
      </div>
    </nav>
  );
};

export default Navbar;
