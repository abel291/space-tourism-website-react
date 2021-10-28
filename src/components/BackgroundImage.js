const BackgroundImage = ({ mobile, tablet, desktop }) => {
    return (
        <>
            <div className="absolute inset-0 z-[-1]">                
                <picture>
                    <source srcSet={"/assets/" + desktop} media="(min-width: 1200px)" />
                    <source srcSet={"/assets/" + tablet} media="(min-width: 768px)" />
                    <source srcSet={"/assets/" + mobile}  />
                    <img className="object-cover w-full h-full" src={"/img/" + mobile} alt="img" />
                </picture>
            </div>
        </>
    )
}

export default BackgroundImage
