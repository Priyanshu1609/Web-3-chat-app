import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
    const { user } = useMoralis();
    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-blue-700 border-b-2 text-blue-500">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image className="object-cover rounded-full" src="https://i.ibb.co/b6YnY1d/me.jpg" layout="fill" />
                </div>
                <div className="col-span-4 text-legt lg:text-center">
                    <div className=" relative h-48 w-48 lg:mx-auto border-blue-500 border-8 rounded-full">
                        <Avatar logoutOnPress= "true" username=""/>
                    </div>
                    <h1>Welcome to the Realtime Web3 chat app</h1>
                    <h2 className="text-5xl truncate font-bold">{user.getUsername()}</h2>

                    <ChangeUsername/>
                </div>
            </div>
        </div>
    )
}

export default Header
