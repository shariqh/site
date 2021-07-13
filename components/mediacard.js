import Image from "next/image"

const Mediacard = ({isExternalSrc, title, src, subtext}) => {
    const classes = "flex p-1 rounded-xl justify-center "

    return (
        <div className="flex flex-col text-center overflow-hidden">

            {isExternalSrc ? (
                <iframe
                    src={src}
                    className={classes}
                    height="240"
                    allow="encrypted-media">
                </iframe>
            ) : (
                <div className={classes}>
                    <Image
                        src={src}
                        alt=""
                        width="150"
                        height="150"
                    />
                </div>
            )}
            <subtext className="pt-2 text-gray-400 text-lg font-semibold">
                {subtext}
            </subtext>
        </div>
    )
};

export default Mediacard;
