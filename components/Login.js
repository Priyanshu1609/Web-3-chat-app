import Image from "next/image"
import {useMoralis} from "react-moralis"

const Login = () => {
    const {authenticate} = useMoralis();
    return (
        <div className="bg-black relative text-white">
            <div className="flex flex-col absolute z-50 items-center justify-center w-full space-y-4 h-screen bg-black ">
                {/* logo */}
                 <Image className="object-cover rounded-full pb-64" src="/7.jpg" width={200} height={200}/> 


                {/* Login button */}
                <button className="bg-blue-300 rounded-lg p-5  font-bold animate-pulse text-black"
                    onClick={authenticate}
                >Login to the web-chat</button>
            </div>
            {/* <div className="w-full h-screen ">
                
                <Image src="/6.jpg" alt="me" layout="fill" objectFit='cover'/>
            </div> */}
        </div>
    )
}

export default Login
