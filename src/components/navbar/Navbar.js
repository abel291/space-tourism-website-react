import { Disclosure, Transition } from "@headlessui/react"
import { NavLink, useLocation } from "react-router-dom"
import MenuMovil from "./MenuMovil"

const itemSection = [
    { path: "/", name: "home" },
    { path: "/destination", name: "destination" },
    { path: "/crew", name: "crew" },
    { path: "/technology", name: "technology" },
]
const Navbar = () => {
    const location = useLocation()

    return (
        <nav className="p-6 md:p-0 lg:pt-10 md:pl-[39px] lg:pl-14  ">
            <div className="flex items-center justify-between">
                <div className="lg:mr-[64px]">
                    <img src="/assets/shared/logo.svg" className="w-10 h-10 md:w-12 md:h-12" alt="" />
                </div>

                <div className="hidden lg:block flex-grow border-b border-white opacity-25 mr-[-30px] z-20"></div>

                <div className=" hidden md:block overflow-hidden">
                    <div className="flex flex-col md:flex-row md:justify-between md:pl-[48px] md:pr-[46px]  lg:pl-[123px] lg:pr-[165px] lg:space-x-[48px] md:space-x-[37px] text-white bg-[#ffffff0a] backdrop-filter backdrop-blur-[84px]">
                        {itemSection.map((item, key) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                exact
                                className={
                                    "nav-text md:pb-[34px] lg:pb-[34px] md:pt-[39px] lg:pt-[35px] " +
                                    (location.pathname === item.path
                                        ? "border-b-[3px] border-white"
                                        : "hover:border-b-[3px] hover:border-opacity-50 hover:border-white")
                                }
                            >
                                <span className="hidden lg:inline-block mr-2 font-bold">0{key}</span>
                                <span className="uppercase">{item.name}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className="md:hidden z-50">
                <MenuMovil itemSection={itemSection}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
