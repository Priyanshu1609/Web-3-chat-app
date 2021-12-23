import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({ username, logoutOnPress }) => {

    const { user, logout } = useMoralis();
    return (

        <Image className="bg-black cursor-pointer rounded-full hover:opacity-70" src={`https://avatars.dicebear.com/api/personas/${username || user.get("username")}.svg`} layout="fill"
            onClick={() => logoutOnPress && logout()}
        />

    )
}

export default Avatar
