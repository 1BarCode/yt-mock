import { VideoLibraryOutlined } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import RestoreRoundedIcon from "@mui/icons-material/RestoreRounded";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import Link from "next/link";

const Drawer: React.FC = () => {
    const headerHeight = "56px";

    const links = [
        {
            href: "/",
            icon: <HomeIcon />,
            name: "Home",
        },
        {
            href: "/",
            icon: <SubscriptionsOutlinedIcon />,
            name: "Subscription",
        },
        {
            href: "/",
            icon: <VideoLibraryOutlined />,
            name: "Library",
        },
        {
            href: "/",
            icon: <RestoreRoundedIcon />,
            name: "History",
        },
    ];

    const DrawerLinks = links.map(({ href, icon, name }) => (
        <Link
            href={href}
            className="w-full h-[74px] flex justify-center items-center hover:bg-black-300 hover:rounded-lg cursor-pointer"
            key={name}
        >
            <div className="flex flex-col items-center">
                {icon}
                <span className="text-xs font-light mt-2">{name}</span>
            </div>
        </Link>
    ));

    return (
        <div className={`w-[75px] px-1 min-h-[calc(100vh-${headerHeight})]`}>
            {/* Container */}
            <div className="mt-3 w-full my-3 flex flex-col items-center">
                {/* Individual Links */}
                {DrawerLinks}
            </div>
        </div>
    );
};

export default Drawer;
