import Sectionheader from "./sectionheader"

const Mediacard = ({isExternalSrc, title, src, subtext, customClasses}) => {
    const classes = "rounded-xl border-2 hover: " + customClasses
    const height = 236

    if (isExternalSrc) {
        return (
            <div className="flex flex-col text-center ">
                <Sectionheader title={title}/>
                <iframe
                    src={src}
                    className={classes}
                    height={height}
                    allowTransparency="true"
                    allow="encrypted-media">
                </iframe>
                <subtext className="pt-2 text-gray-400 text-center text-xl font-semibold">
                    {subtext}
                </subtext>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col text-center ">
                <Sectionheader title={title}/>
                <div className={classes}>
                    <img
                        src={src}
                        alt=""
                        width="230"
                        height="232"
                  />
                </div>
                <subtext className="pt-2 text-gray-400 text-center text-xl font-semibold">
                    {subtext}
                </subtext>
            </div>
        )
    }
};

export default Mediacard;
