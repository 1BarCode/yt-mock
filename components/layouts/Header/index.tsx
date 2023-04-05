import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MicRoundedIcon from "@mui/icons-material/MicRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ytlogo from "../../../public/yt_logo_rgb_dark.png";
import Button from "../../inputs/Button";

type Search = {
    search: string;
};

const searchSchema = yup.object().shape({
    search: yup.string().required("Search is required"),
});

const Header: React.FC = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<Search>({
        resolver: yupResolver(searchSchema),
        defaultValues: {
            search: "",
        },
    });

    const onSubmit = async (query: Search) => {
        router.push({
            pathname: "/results",
            query: {
                search_query: query.search,
            },
        });
    };

    return (
        <header className="bg-black-900 text-white w-full px-4">
            <nav className="flex justify-between items-center h-14">
                <div className="flex items-center">
                    <Button
                        className="bg-black-900 px-2 flex justify-center items-center"
                        rounded
                    >
                        <MenuRoundedIcon />
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

                <div className="flex mr-6">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        // w-[636px]
                        className="m-w-[700px] ml-2 min-w-[350px] h-10 flex"
                    >
                        <input
                            {...register("search")}
                            type="text"
                            className="ml-10 pl-4 pr-2 bg-inherit border-[1px] border-r-black-500 rounded-tl-full rounded-bl-full border-black-500 focus:outline-none focus:border-solid focus:border-[1px] focus:border-blue-500 w-[536px]"
                            placeholder="Search"
                        />

                        <Button
                            className="flex justify-center items-center w-16 py-[1px] border-[1px] rounded-tr-full rounded-br-full bg-black-500 border-black-500"
                            type="submit"
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </form>
                    <Button
                        className="bg-black-900 px-2 flex justify-center items-center ml-2 h-10 w-10"
                        rounded
                    >
                        <MicRoundedIcon />
                    </Button>
                </div>

                <div className="flex items-center h-10">
                    <Button
                        className="bg-black-900 px-2 flex justify-center items-center mr-1 h-10 w-10"
                        rounded
                    >
                        <MoreVertRoundedIcon />
                    </Button>
                    <Link href={"/signin"}>
                        <Button
                            className="flex justify-center items-center text-blue-400 bg-black-900 border-[1px] border-black-300 h-9 w-25"
                            rounded
                        >
                            <FontAwesomeIcon icon={faUser} className="mr-2" />
                            Sign in
                        </Button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
