import Image from "next/image"
import {Roastslider} from "./roastslider"
import {fetchAPI, getStrapiMedia} from "../lib/api"
import {useEffect, useState} from "react";

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
    const isLimitedRun = coffee.is_limited_run
    const imageUrl = coffee.strapi_image_url
    const isFeatured = index === 0
    const isOdd = index % 2
    const [coffeeImage, setCoffeeImage] = useState(null)

    useEffect(() => {
        fetchAPI(imageUrl).then(data =>
            setCoffeeImage(getStrapiMedia(data.image))
        )
    })

    return (
        <div className={`sm:p-12 ${isFeatured ? "md:py-48" : "md:py-12"} bg-opacity-10 bg-${bgColor}`}>
            <div
                className={`p-4 mx-auto flex flex-col ${isOdd ? "md:flex-row-reverse" : "md:flex-row"} justify-between space-x-4 max-w-screen-lg`}>
                <div className="flex items-center p-4">
                    <div>
                        {isFeatured && (
                            <p className="mb-24">
                                <text className="text-2xl">Coffee of the Month</text>
                                <br/>
                                <text className="text-lg">{month}, {year}</text>
                            </p>
                        )}
                        <p className="text-2xl">{coffee.brand}</p>
                        <p className="text-4xl font-semibold uppercase">
                            {coffee.name}
                            {isLimitedRun && (<text className="text-xl text-red-300 font-medium uppercase">Limited Run</text>
                        )}</p>
                        <p className="text-sm text-gray-800 uppercase">{coffee.city}, {coffee.state}, {coffee.country}</p>
                        <br/>
                        {coffee.attributes.map((attribute) => (
                            <div className="text-lg font-semibold uppercase"
                                 key={attribute.name}>{attribute}</div>
                        ))}
                        <br/>
                        <div className="max-w-xs min-w-full">
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
                <div
                    className="flex flex-col flex-shrink-0 w-64 h-64 md:w-96 md:h-96 relative rounded-full bg-white shadow-2xl text-center">
                    {coffeeImage && (
                        <Image
                            src={coffeeImage}
                            placeholder="blur"
                            blurDataURL="/images/placeholder.png"
                            alt=""
                            layout="fill"
                            sizes="100%"/>
                    )}
                </div>
            </div>
        </div>
    )
}

export {Coffeebanner}
