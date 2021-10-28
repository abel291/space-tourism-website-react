import { Disclosure, Transition } from "@headlessui/react"
import { NavLink } from "react-router-dom"

const MenuMovil = ({ itemSection }) => {
    return (
        <Disclosure>
            {({ open, close }) => (
                <>
                    <Disclosure.Button className="w-[24px] h-[21px] mt-[9px]">
                        <img src="/assets/shared/icon-hamburger.svg" className="w-full h-full" alt="" />
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom=" opacity-0"
                        enterTo=" opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom=" opacity-100"
                        leaveTo=" opacity-0"
                    >
                        <Disclosure.Panel className=" fixed top-0 bottom-0 right-0 w-[254px]  text-white bg-[#ffffff0a] backdrop-filter backdrop-blur-[84px]">
                            <div className="flex justify-end">
                                <button onClick={close} className="w-[19px] h-[19px] mt-[33px] mr-[26px]">
                                    <img src="/assets/shared/icon-close.svg" className="w-full h-full" alt="" />
                                </button>
                            </div>
                            <div className=" mt-[64px] px-8 space-y-[32px] flex flex-col">
                                {itemSection.map((item, key) => (
                                    <NavLink onClick={close} key={item.path} to={item.path} exact activeClassName="" className="nav-text">
                                        <span className="mr-2 font-bold">0{key}</span>
                                        <span className="uppercase">{item.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}

export default MenuMovil
