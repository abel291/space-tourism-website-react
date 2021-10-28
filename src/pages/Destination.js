import { useState } from "react"
import BackgroundImage from "../components/BackgroundImage"
import { destinations } from "../data.json"

const Destination = () => {
    const [destination, setdestination] = useState({
        name: destinations[0].name,
        images: destinations[0].images,
        description: destinations[0].description,
        distance: destinations[0].distance,
        travel: destinations[0].travel,
    })
    const handleOnclick = (name) => {
        let newDestination = destinations.find((item) => item.name === name)
        setdestination(newDestination)
    }
    return (
        <main>
            <div className="mx-6 md:mx-[38.5px] lg:mt-[76px] lg:ml-[165px] lg:mr-[163px] pb-[58px]">
                <div className="heading-5 md:mt-10 text-center ">
                    <span className="font-bold opacity-25 mr-[18px] md:mr-[19px] lg:mr-7">01</span>
                    <span>Pick your destination</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mt-[32px] md:mt-[60px] lg:mt-[64px] lg:ml-16">
                    <div>
                        <img
                            src={"/" + destination.images.png}
                            className=" w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]"
                            alt=""
                        />
                    </div>
                    <div className=" mt-[26px] md:mt-[53px] lg:mt-[0px] lg:w-[445px] text-center lg:text-left ">
                        <div className="nav-text inline-flex space-x-[26px] md:space-x-[35px]">
                            {destinations.map((item) => (
                                <div
                                    key={item.name}
                                    onClick={() => handleOnclick(item.name)}
                                    className={
                                        "nav-text pb-3 border-white cursor-pointer " +
                                        (item.name === destination.name
                                            ? "text-white border-b-[3px] "
                                            : "text-secondary hover:border-b-[3px] hover:border-opacity-50 ")
                                    }
                                >
                                    {item.name}
                                </div>
                            ))}
                        </div>

                        <h1 className="heading-2  mt-5 md:mt-[32px] lg:mt-[37px]">{destination.name}</h1>
                        <p className="body-text mt-[1px] md:mt-[8px] lg:mt-[14px] text-secondary md:w-[573px] lg:w-[444px]">
                            {destination.description}
                        </p>
                        <div className="d:w-[573px] mt-[32px]  lg:mt-[54px]  border-t border-white border-opacity-10"></div>

                        <div className="flex flex-col md:flex-row justify-center lg:justify-start mt-[32px] lg:mt-[28px]">
                            <div className="md:mr-[100px] lg:mr-[76px]">
                                <span className="sub-heading-2 text-secondary ">AVG. DISTANCE</span>
                                <div className="sub-heading-1 mt-3">{destination.distance}</div>
                            </div>
                            <div className="mt-8 md:mt-0">
                                <span className="sub-heading-2 text-secondary">Est. travel time</span>
                                <div className="sub-heading-1 mt-3">{destination.travel}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackgroundImage
                mobile="destination/background-destination-mobile.jpg"
                tablet="destination/background-destination-tablet.jpg"
                desktop="destination/background-destination-desktop.jpg"
            />
        </main>
    )
}

export default Destination
