import Sectionheader from "./sectionheader"

const Mediacard = ({title, src, subtext, height}) => {
    return (
        <div className="flex flex-col">
            <Sectionheader title={title}/>
            <iframe
                src={src}
                className="px-2 pt-2 rounded-3xl"
                width="100%"
                height={height}
                allowTransparency="true"
                allow="encrypted-media">
            </iframe>
            <subtext className="pt-2 text-gray-400 text-center text-3xl font-semibold">
                {subtext}
            </subtext>
        </div>
    )
};

export default Mediacard;
