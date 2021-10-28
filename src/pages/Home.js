import { Link } from "react-router-dom"
import BackgroundImage from "../components/BackgroundImage"

const Home = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-between  mx-[24px] mt-[24px] md:mt-[106px] lg:mt-[251px] lg:mx-[165px] bg-red-500 pb-[48px] md:pb-[90px] lg:pb-[131px]">
                <div className="space-y-[16px] md:space-y-[24px] md:w-[450px] text-center lg:text-left">
                    <span className="heading-5 text-secondary ">SO, YOU WANT TO TRAVEL TO</span>
                    <h1 className="heading-1">SPACE</h1>
                    <p className="text-secondary body-text md:w-[444px] lg:w-full">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on
                        the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>

                <Link to="/destination">
                    <div className="mt-[81px] md:mt-[156px] lg:mt-[81px] w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] bg-white rounded-full flex items-center justify-center hover:ring-[44px] md:hover:ring-[66px] lg:hover:ring-[88px] ring-white ring-opacity-10">
                        <span className="heading-4 text-primary">EXPLORER</span>
                    </div>
                </Link>
            </div>

            <BackgroundImage
                mobile="home/background-home-mobile.jpg"
                tablet="home/background-home-tablet.jpg"
                desktop="home/background-home-desktop.jpg"
            />
        </>
    )
}

export default Home
