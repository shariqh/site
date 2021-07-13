import db, {postToJSON} from "../../lib/firebase"
import Head from "next/head";
import {siteTitle} from "../index";

const Index = ({coffees}) => {
    return (
        <div className="overflow-auto">
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="Shariq's Coffee"
                    content="Personal coffee ratings and tools used for the best cup"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <title>Shariq's Coffee</title>
            </Head>
            <div className="space-y-12 space-x-6 min-h-screen mx-auto max-w-screen-lg">
                <hero>
                    <div className="py-96 px-12 bg-yellow-900 bg-opacity-30">
                        <p className="pb-24 text-2xl">Coffee of the Month - {new Date().getMonth()}</p>
                        <p className="text-2xl">{coffees[0].brand}</p>
                        <p className="text-4xl font-semibold uppercase">{coffees[0].name}</p>
                        <br/>
                        {coffees[0].attributes.map((attribute) => (
                            <div className="text-lg font-semibold uppercase" key={attribute.name}>{attribute}</div>
                        ))}
                        <br/>
                        <div className="max-w-xs">
                            <ul>
                                <li>
                                    <ul className="grid grid-cols-10 h-7">
                                        <li className="bg-yellow-50"></li>
                                        <li className="bg-yellow-100"></li>
                                        <li className="bg-yellow-200"></li>
                                        <li className="bg-yellow-300"></li>
                                        <li className="bg-yellow-400"></li>
                                        <li className="bg-yellow-500"></li>
                                        <li className="bg-yellow-600"></li>
                                        <li className="bg-yellow-700"></li>
                                        <li className="bg-yellow-800"></li>
                                        <li className="bg-yellow-900"></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="space-x-64 text-xs text-gray-800 uppercase">
                                <text>light</text>
                                <text>dark</text>
                            </div>
                        </div>
                        {/*{coffees[0].roast_level}*/}
                    </div>
                </hero>

                <section>
                    {coffees.map(coffee => (
                        <div className="bg-green-900 bg-opacity-30" key={coffee.id}>
                            {coffee.brand}
                            <br/>
                            {coffee.name}
                            <br/>
                            {coffee.attributes}
                            <br/>
                            {coffee.roast_level}
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const coffees = (await db.collection('coffees').get()).docs.map(postToJSON);

    return {
        props: {coffees},
        revalidate: 10
    }
}

export default Index;
