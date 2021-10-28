import { useState } from "react"
import BackgroundImage from "../components/BackgroundImage"
import { technology as technologies } from "../data.json"
const Technology = () => {
    const [technology, setdestination] = useState({
        name: technologies[0].name,
        images: technologies[0].images,
        description: technologies[0].description,
    })
    const handleOnclick = (name) => {
        let newTechnology = technologies.find((item) => item.name === name)
        setdestination(newTechnology)
    }
    return (
        <main>
            <div className="  pb-[81px] md:pb-[97px] lg:ml-[165px] lg:pb-[101px] ">
                <div className="heading-5 text-center md:mx-[38.5px] md:mt-[40px] lg:mt-[76px]">
                    <span className="font-bold opacity-25 mr-4 lg:mr-[24px] ">03</span>
                    <span>SPACE LAUNCH 101</span>
                </div>
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center  text-white">
                    <div className="flex flex-col items-center lg:flex-row">
                        <div className="inline-flex flex-row lg:flex-col space-x-4 lg:space-x-0 mt-[34px] md:mt-[56px] lg:mt-[26px] lg:mr-[80px] lg:space-y-[32px]">
                            {technologies.map((item, key) => (
                                <div key={item.name}
                                    onClick={() => handleOnclick(item.name)}
                                    className={
                                        "w-10 h-10 md:w-[60px] md:h-[60px] lg:w-20 lg:h-20 rounded-full flex items-center justify-center border border-white border-opacity-25 hover:border-opacity-100  cursor-pointer " +
                                        (item.name === technology.name ? "text-primary bg-white " : " bg-none text-white")
                                    }
                                >
                                    <div className="heading-4">{key + 1}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mx-[24px] lg:mx-[0px] mt-[26px] md:mt-[44px] lg:w-[470px] text-center lg:text-left">
                            <span className="nav-text text-secondary">THE TERMINOLOGY…</span>
                            <div className="heading-3 mt-[9px] md:mt-[16px] lg:mt-[11px]">{technology.name}</div>
                            <p className="body-text text-secondary mt-[16px] md:mt-[16px] lg:mt-[17px] md:w-[458px] lg:w-[444px]">
                                {technology.description}
                            </p>
                        </div>
                    </div>

                    <div className="mt-[32px] md:mt-[60px] lg:mt-[26px] w-full lg:w-[515px]">
                        <picture>
                            <source srcSet={"/" + technology.images.portrait} media="(min-width: 1201px)" />
                            <img className=" w-full max-h-full" src={"/" + technology.images.landscape} alt="img" />
                        </picture>
                    </div>
                </div>
            </div>
            <BackgroundImage
                mobile="technology/background-technology-mobile.jpg"
                tablet="technology/background-technology-tablet.jpg"
                desktop="technology/background-technology-desktop.jpg"
            />
        </main>
    )
}

export default Technology
