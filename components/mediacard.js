import Image from "next/image"

const Mediacard = ({isExternalSrc, title, src, subtext}) => {
    const classes = "flex justify-center p-1 rounded-xl"
    const height = 240

    return (
        <div className="flex flex-col overflow-hidden">
            <p className="pb-2 text-2xl text-yellow-500 font-semibold">
                {title}
            </p>
            {isExternalSrc ? (
                <iframe
                    src={src}
                    className={classes}
                    height={height}
                    allow="encrypted-media">
                </iframe>
            ) : (
                <div className={classes}>
                    <Image
                        src={src}
                        alt=""
                        width="230"
                        height={height}
                    />
                </div>
            )}
            <subtext className="pt-2 text-gray-400 text-center text-xl font-semibold">
                {subtext}
            </subtext>
        </div>
    )
};

export default Mediacard;
