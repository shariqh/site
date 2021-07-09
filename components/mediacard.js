const Mediacard = ({isExternalSrc, title, src, subtext, customClasses}) => {
    const classes = "flex justify-center bg-gray-100 rounded-xl border-2 " + customClasses
    const height = 236

    return (
        <div className="flex flex-col text-center">
            <p className="text-2xl text-yellow-500 font-semibold">
                {title}
            </p>
            {isExternalSrc ? (
                <iframe
                    src={src}
                    className={classes}
                    height={height}
                    allowTransparency="true"
                    allow="encrypted-media">
                </iframe>
            ) : (
                <div className={classes}>
                    <img
                        src={src}
                        alt=""
                        width="230"
                        height="232"
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
