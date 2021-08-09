import {db, postToJSON} from "../../lib/firebase"
import Head from "next/head";
import {siteTitle} from "../index";
import {Coffeebanner} from "../../components/coffeebanner"

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
                <title>My Coffee Ratings</title>
            </Head>
            <div className="my-24 space-y-12">
                {coffees.map((coffee, i) => (
                    <Coffeebanner key={coffee.id} index={i} coffee={coffee}/>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const coffees = (await db.collection('coffees').orderBy('purchase_date', 'desc').get()).docs.map(postToJSON);

    return {
        props: {coffees},
        revalidate: 10
    }
}

export default Index;
