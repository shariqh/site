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

    const isLimitedRun = coffee.is_limited_run
    const isFeatured = index === 0
    const isOdd = index % 2
    const price = coffee.price.toFixed(2)

    const [coffeeImage, setCoffeeImage] = useState(null)

    useEffect(() => {
        fetchAPI(coffee.strapi_image_url).then(data =>
            setCoffeeImage(getStrapiMedia(data.image))
        )
    })

    return (
        <div className={`sm:p-12 ${isFeatured ? "md:py-48" : "md:py-12"} bg-opacity-30 bg-${coffee.bg_color}`}>
            <div className={`p-4 mx-auto flex flex-col ${isOdd ? "md:flex-row-reverse" : "md:flex-row"} justify-between space-x-4 max-w-screen-lg`}>
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
                        <div className="text-4xl font-semibold uppercase">{coffee.name}</div>
                        {isLimitedRun && (
                            <text
                                className="text-lg text-red-400 opacity-80 font-medium uppercase tracking-wide">Limited
                                Run</text>
                        )}
                        <p className="text-sm text-gray-800">{coffee.city}, {coffee.state}, {coffee.country}</p>
                        <br/>
                        {coffee.attributes.map((attribute) => (
                            <div className="text-lg font-semibold uppercase"
                                 key={attribute.name}>{attribute}</div>
                        ))}
                        <br/>
                        <div className="max-w-xs min-w-xs">
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
                        <div className="space-y-1 pt-4 flex flex-row justify-between text-lg">
                            {/*<div>*/}
                            {/*    <p className="flex flex-row">*/}
                            {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"*/}
                            {/*             viewBox="0 0 24 24" stroke="currentColor">*/}
                            {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
                            {/*                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
                            {/*        </svg>*/}
                            {/*        &nbsp;{price}*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                            <a href={coffee.purchase_link}>
                                <p className="flex flex-row text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    &nbsp;Buy Now
                                </p>
                            </a>
                            <a href={coffee.product_link}>
                                <p className="flex flex-row text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    &nbsp;Product Page
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className="flex flex-col flex-shrink-0 w-64 h-64 md:w-96 md:h-96 relative rounded-full bg-white shadow-2xl">
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
        </div>
    )
}

export {Coffeebanner}
