import Image from "next/image"
import {Roastslider} from "./roastslider"
import {fetchAPI, getStrapiMedia} from "../lib/api";

const Coffeebanner = ({index, coffee}) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    const month = months[new Date().getMonth()]
    const year = new Date().getFullYear()
    const bgColor = coffee.bg_color
    // const imageUrl = coffee.strapi_image_url

    return (
        <div className={`p-12 md:py-32 bg-opacity-10 bg-${bgColor}`}>
            <div className={"p-4 mx-auto flex flex-col md:flex-row justify-between max-w-screen-lg"}>
                <div className="flex items-center">
                    <div>
                        {index === 0 ? (
                            <p className="mb-24">
                                <text className="text-2xl">Coffee of the Month</text>
                                <br/>
                                <text className="text-lg">{month}, {year}</text>
                            </p>
                        ) : null}
                        <p className="text-2xl">{coffee.brand}</p>
                        <p className="text-4xl font-semibold uppercase">{coffee.name}</p>
                        <br/>
                        {coffee.attributes.map((attribute) => (
                            <div className="text-lg font-semibold uppercase"
                                 key={attribute.name}>{attribute}</div>
                        ))}
                        <br/>
                        <div className="max-w-xs">
                            <ul>
                                <li>
                                    <ul className="grid grid-cols-10 h-8">
                                        {[...Array(10)].map((_, i) => (
                                            <Roastslider key={i} index={i} roastLevel={coffee.roast_level}/>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                            <div
                                className="flex justify-between text-xs text-gray-800 uppercase overflow-hidden">
                                <text>light</text>
                                <text>dark</text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-96 h-96 relative rounded-full bg-white shadow-2xl">
                    <Image
                        src={coffee.image}
                        alt=""
                        layout="fill"
                        sizes="100%"
                    />
                </div>
            </div>
        </div>
    )
}

// async function getImage(imageUrl) {
//     const imageObj = await fetchAPI(imageUrl)
//     console.log(imageObj.image)
//
//     return getStrapiMedia(imageObj.image)
// }

export {Coffeebanner}
