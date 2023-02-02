import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ytlogo from "../../../public/yt_logo_rgb_dark.png";
import Button from "../../inputs/Button";

const Header: React.FC = () => {
    return (
        <header className="bg-black-900 text-white w-full px-4">
            <nav className="flex justify-between items-center h-14">
                <div className="flex items-center">
                    <Button
                        className="bg-black-900 px-2 flex justify-center items-center"
                        rounded
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            fontSize="lg"
                            className="h-6 w-6"
                        />
                    </Button>
                    <Link href={"/"} className="pl-4">
                        <Image
                            alt="logo"
                            src={ytlogo}
                            className="w-[90px] h-[20px]"
                            priority
                        />
                    </Link>
                </div>
                <div>SEARCH</div>
                <div className="flex">
                    <Button
                        className="bg-black-900 px-2 flex justify-center items-center mr-1"
                        rounded
                    >
                        <FontAwesomeIcon
                            icon={faEllipsisV}
                            fontSize="lg"
                            className="h-6 w-6"
                        />
                    </Button>
                    <Button
                        className="flex justify-center items-center text-blue-400 bg-black-900"
                        rounded
                    >
                        <FontAwesomeIcon
                            icon={faUser}
                            // fontSize="xs"
                            className="mr-2"
                        />
                        Sign in
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
