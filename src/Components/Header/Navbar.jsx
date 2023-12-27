import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/images/Logo/logo.png'
import eLogo from '../../assets/images/Logo/e-logo.png'
import mujib from '../../assets/images/more/mujib.png'
import logo2020 from '../../assets/images/more/logo2020.png'
import { FaChevronDown } from "react-icons/fa";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
        <nav className="bg-white  fixed w-full border-b z-20 top-0 start-0 ">

        <div className=" flex flex-wrap items-center justify-between  max-w-[1200px]  mx-auto px-2  md:px-0 z-50   py-2">

            {/* Menu bar */}
            <button className="md:hidden" type="button" onClick={()=> setOpenMenu(!openMenu)}>
                        <div className="text-4xl">
                        {
                            openMenu ? <BiMenuAltLeft/> : <IoMenu/>
                        }
                        </div>
            </button>


            {/* Logo */}
            <Link to={'/'} className="rtl:space-x-reverse">
                <img src={Logo} alt="" className="h-[2.90rem]" />
            </Link>


        {/* Account btn*/}
        <div className="flex md:order-2  rtl:space-x-reverse">
                    <Link to={'/acount'} className=" cursor-pointer rounded-md bg-gradient-to-tr  from-violet-700 to-indigo-800 px-4 py-2 text-white">
                একাউন্ট
                    </Link>
        </div>

        {/* Nav link */}
        <div className={`items-center justify-between  w-full md:flex h-[100vh]  md:h-fit  md:w-auto md:order-1 ${openMenu? 'block' : 'hidden'} `}
        onClick={()=> setOpenMenu(!openMenu)}
        >

            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  border-t md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 duration-500">

            <li >
                <NavLink className={'hover:text-[#6d28d9] '} to={'/'}>হোম</NavLink>
                <hr className="my-2 md:hidden"/>
            </li>

            <li className="relative hiddenDrop">
                <Link className={'hover:text-[#6d28d9] flex  items-center space-x-1'}
                ><span>আয়োজন</span>
                <span className="text-sm dropIcon"><FaChevronDown/></span>
                </Link>

                {/* DropDrow */}
                <ul className="py-5 -left-20 absolute  menu dropdown-content z-[1] bg-base-100 rounded-md w-[18rem] space-y-1 hidden showDrop ">

                    <li className="hover:text-[#6d28d9]">
                        <Link to={'/englishOlympiad2024 '}>
                            <img src={eLogo} alt="English Olympiad 2024 Logo" className="size-10" />
                            <span> English Olympiad 2024 </span>
                        </Link>
                    </li>
                    <li className="hover:text-[#6d28d9]">
                        <Link to={'/mujibOlympiad23'}>

                            <img src={mujib} alt="Mujib Olympiad 2023 Logo" className="size-10" />
                            <span> মুজিব অলিম্পিয়াড ২০২৩ </span>
                        </Link>
                    </li>
                    <li className="hover:text-[#6d28d9]">
                        <Link to={'/mujibOlympiad20'}>

                            <img src={logo2020} alt="English Olympiad 2024 Logo" className="size-10" />
                            <span> মুজিব অলিম্পিয়াড ২০২০ ও মুজিববর্ষ বিতর্ক প্রতিযোগিতা</span>
                        </Link>
                    </li>
                    <li className="hover:text-[#6d28d9]">
                        <Link to={'/wilderness20'}>

                        <span className="bg-gradient-to-tr from-violet-950 to-violet-700 px-3 py-2 rounded-full text-white">W</span>
                                Wilderness Open 2020
                        </Link>
                    </li>




            </ul>


                <hr className="my-2 md:hidden"/>
            </li>
            <li>
                <NavLink className={'hover:text-[#6d28d9]'}  to={'/about'}>নিণীষ সম্পর্কে</NavLink>
                <hr className="my-2 md:hidden"/>
            </li>


            </ul>
        </div>
        </div>
        </nav>
        </>
    );
};

export default Navbar;