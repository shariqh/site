import Head from 'next/head'
import Image from 'next/image'
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
            <div className="space-y-12 space-x-6 min-h-screen mx-auto max-w-screen-lg">
                <header className="pt-14 text-center text-white">
                    <img className="mx-auto ring-4 ring-yellow-500 rounded-full"
                         src="/images/profile.jpg"
                         alt=""
                         width="240"
                         height="240">
                    </img>
                    <h1 className="mx-auto pt-6 text-4xl font-bold">{name}</h1>
                    <p className="text-yellow-500">he/him</p>
                </header>
                <section className="text-gray-400 text-xl">
                    <Sectionheader title="About Me"/>
                    <p>
                        I am a cloud native full stack engineer with eleven years of experience in microservice
                        architecture, development and CI/CD. Mainly, I focus on Kubernetes and GCP deployments.
                        I enjoy solving challenges to the business with technical solutions.
                        <br/><br/>
                        🥭
                        <text className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
                            p.s. I love mangoes, in case it wasn't obvious from the sites theme
                        </text>
                        🥭
                    </p>
                </section>
                <section className="grid gap-x-4 gap-y-6 grid-cols-3">
                    <Mediacard
                        title="🎧 What I'm Listening To"
                        src="https://open.spotify.com/embed/playlist/7w33zSxzXN5blasm8mk6cc"
                        subtext="The only truth is music 🎵"
                        customClasses="border-green-600"
                        isExternalSrc="true"
                    />
                    <Mediacard
                        title="🎤 What I'm Recording"
                        src="https://open.spotify.com/embed/show/29kRN9P3A5dljJmYr3zPsF"
                        subtext="☝️ pssst... I'm the host"
                        customClasses="border-green-900"
                        isExternalSrc="true"
                    />
                    <Mediacard
                        title="☕ Coffee of the Month"
                        src="https://cdn.shopify.com/s/files/1/0353/3399/6675/products/Zoom_info_images-15_700x.jpg"
                        subtext="Rating ⭐⭐⭐⭐"
                        customClasses="border-yellow-500"
                    />
                    <Mediacard
                        title="✏️ Note Taking"
                        src="https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/e5/21/84/e5218487-6977-93b6-7e35-67142546b221/AppIcon-85-220-0-4-2x-P3.png/1200x630bb.png"
                        customClasses="border-yellow-700"
                    />
                    <Mediacard
                        title="📚 Organizing"
                        src="https://pbs.twimg.com/profile_images/1381737932780752896/MbHGl54A.png"
                        customClasses="border-red-500"
                    />
                    <Mediacard
                        title="💻 Development"
                        src="https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png"
                        customClasses="border-red-800"
                    />
                </section>
                <section>
                    <Sectionheader title="Blog Posts" />
                    In Progress...
                </section>
                <section>
                    <Sectionheader title="Projects" />
                    In Progress...
                </section>
                <footer className="pb-8 text-center text-yellow-500 text-xl font-semibold">
                    Built with
                    <br/>
                    <Image
                        src="/images/nextjs-logo.png"
                        height={42}
                        width={69}
                        alt="Next.js"
                    />
                    {' '}
                    <Image
                        src="/images/tailwindcss-logo.png"
                        height={44}
                        width={95.5}
                        alt="Next.js"
                    />
                </footer>

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
