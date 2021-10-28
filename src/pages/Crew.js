import { useState } from "react"
import BackgroundImage from "../components/BackgroundImage"
import { crew as crews } from "../data.json"
const Crew = () => {
    const [crew, setCrew] = useState({
        name: crews[0].name,
        images: crews[0].images,
        role: crews[0].role,
        bio: crews[0].bio,
    })
    const handleOnclick = (name) => {
        let newCrew = crews.find((crew) => crew.name === name)
        setCrew(newCrew)
    }
    return (
        <>
            <div className=" mx-[24px] md:mx-[38px]  lg:ml-[165px] lg:mr-[137px] ">
            
                <div className=" flex flex-col-reverse md:flex-col lg:flex-row items-center lg:justify-between lg:items-end  text-white">
                    <div className="flex flex-col w-full lg:w-auto items-stretch">
                        <div className="heading-5 text-center md:text-left md:mt-[40px] lg:mt-[76px] hidden md:block md:w-full">
                            <span className="font-bold opacity-25 mr-4 lg:mr-[24px] ">02</span>
                            <span>Meet your crew</span>
                        </div>
                        <div className="flex flex-col-reverse md:flex-col text-center lg:text-left md:w-[458px] lg:w-full self-center ">
                            <div className="">
                                <div className="heading-4 mt-[32px] md:mt-[60px] lg:mt-[154px] opacity-50">{crew.role}</div>
                                <div className="heading-3 mt-2 lg:mt-[15px] ">{crew.name}</div>

                                <p className="body-text mt-[16px] lg:mt-[27px] text-secondary lg:w-[444px]">{crew.bio}</p>
                            </div>
                            <div className="flex justify-center lg:justify-start space-x-[16px] my-8 md:my-10 lg:mt-[120px] lg:mb-[94px] ">
                                {crews.map((item) => (
                                    <div
                                        key={item.name}
                                        onClick={() => handleOnclick(item.name)}
                                        className={
                                            " w-2.5 h-2.5 lg:w-[15px] lg:h-[15px] rounded-full cursor-pointer bg-white  " +
                                            (item.name !== crew.name && "opacity-50 hover:opacity-[0.17]  ")
                                        }
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto">
                        <div className="heading-5 text-center md:text-left md:mt-[40px] lg:mt-[76px]  md:hidden">
                            <span className="font-bold opacity-25 mr-4 lg:mr-[24px] ">02</span>
                            <span>Meet your crew</span>
                        </div>
                        <div className="overflow-hidden text-center border-b border-white border-opacity-10 lg:border-none mt-8 md:mt-0 ">
                            <img className=" h-[223px] md:h-[532px] lg:h-auto  inline-block" src={"/" + crew.images.png} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundImage
                mobile="crew/background-crew-mobile.jpg"
                tablet="crew/background-crew-tablet.jpg"
                desktop="crew/background-crew-desktop.jpg"
            />
        </>
    )
}

export default Crew
