import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/userSlice";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    document.cookie = `token=`;
    dispatch(remove(""));
    router.push("/login");
  };
  const value = useSelector((state) => state.token);
  return (
    <nav className="flex  items-center justify-between bg-black">
      <div className="flex items-center flex-shrink-0 text-white">
        <Link href="/">
          <Image
            src="https://thumbs.dreamstime.com/b/white-dumbbell-gym-logo-black-background-workout-sign-vector-template-172909186.jpg"
            alt="Gym Logo"
            width={150}
            height={150}
          />
        </Link>
      </div>
      {value && (
        <div className=" block m-12 lg:flex lg:items-center">
          <button
            onClick={() => logoutHandler()}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            LOGOUT
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
