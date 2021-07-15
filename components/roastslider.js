import Image from "next/image"

const Roastslider = ({index, roastLevel}) => {
    const colorLevel = [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ]

    return (
        <li className={`flex justify-center p-1 bg-yellow-${colorLevel[index]}`}>
            {index === roastLevel ? (
                <Image
                    src="/images/bean.png"
                    alt=""
                    width="25"
                    height="25"
                />
            ) : null}
        </li>
    )
}

export {Roastslider}
