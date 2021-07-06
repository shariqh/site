import Head from 'next/head'
import {getSortedPostsData} from '../lib/posts'
import Sectionheader from "../components/sectionheader"
import Mediacard from "../components/mediacard"

const name = 'Shariq Hirani'
export const siteTitle = 'Shariq\'s Personal Site'

export default function Home({allPostsData}) {
    return (
        <div className="bg-gray-800">
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="Shariq's Site"
                    content="My personal home for my journey though photography, blogging and cloud-native development"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <title>Shariq's Site</title>
            </Head>
            <div className="min-h-screen px-4 mx-auto max-w-screen-lg">
                <header className="p-6 text-center text-white">
                    <img className="mx-auto ring-4 ring-yellow-500 rounded-full"
                         src="/images/profile.jpg"
                         alt=""
                         width="240"
                         height="240">
                    </img>
                    {/*<Image*/}
                    {/*    priority*/}
                    {/*    src="/images/profile.jpg"*/}
                    {/*    className="rounded-full ring"*/}
                    {/*    height={240}*/}
                    {/*    width={240}*/}
                    {/*    alt={name}*/}
                    {/*/>*/}
                    <h1 className="pt-6 text-4xl font-bold">{name}</h1>
                </header>
                <section>
                    <Sectionheader title="About Me"/>
                    <p className="text-gray-400 text-xl">
                        I am a cloud native full stack engineer with eleven years of experience in microservice
                        architecture, development and CI/CD. Mainly, I focus on Kubernetes and GCP deployments.
                        I enjoy solving challenges to the business with technical solutions.
                        <br/><br/>
                        p.s. I love mangos.
                    </p>
                </section>
                <section className="grid grid-cols-2">
                    <Mediacard
                        title="What I'm Listening To"
                        src="https://open.spotify.com/embed/playlist/7w33zSxzXN5blasm8mk6cc"
                        height="380"
                    />
                    <Mediacard
                        title="What I'm Recording"
                        src="https://open.spotify.com/embed/show/29kRN9P3A5dljJmYr3zPsF"
                        subtext="☝️ pssst... I'm the host ☝️"
                        height="240"
                    />
                </section>
                {/*<section className="">*/}
                {/*    <h2 className="">Blog</h2>*/}
                {/*    <ul className="">*/}
                {/*        {allPostsData.map(({id, date, title}) => (*/}
                {/*            <li className="" key={id}>*/}
                {/*                <Link href={`/posts/${id}`}>*/}
                {/*                    <a>{title}</a>*/}
                {/*                </Link>*/}
                {/*                <br/>*/}
                {/*                <small className="">*/}
                {/*                    <Date dateString={date}/>*/}
                {/*                </small>*/}
                {/*            </li>*/}
                {/*        ))}*/}
                {/*    </ul>*/}
                {/*</section>*/}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
