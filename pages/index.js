import Head from 'next/head'
import Link from "next/link"
import Sectionheader from "../components/sectionheader"
import Mediacard from "../components/mediacard"
import {fetchAPI} from "../lib/api";
import {Article} from "../components/article";
import Layout from "../components/layout";

const name = 'Shariq Hirani'
export const siteTitle = 'Shariq\'s Personal Site'

export default function Home({articles}) {
    return (
        <Layout>
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
                <title>{name}&apos; Development Site</title>
            </Head>
            <header className="z-50 sticky px-4 pb-4 top-0 text-white w-full border-b-2 border-opacity-10 bg-gray-800">
                {/*className="fixed flex max-w-screen-lg bg-white border-b justify-between flex-wrap p-5 m-auto top-0 animated">*/}
                <div className="flex flex-row justify-between space-x-2">
                    <Link href="/">
                        <h1 className="text-xl cursor-pointer">{name}</h1>
                    </Link>
                    <div className="flex flex-row space-x-4 cursor-pointer text-md text-gray-400">
                        <Link href="/blog">
                            <span>Blog</span>
                        </Link>
                        <Link href="/about">
                            <span>About</span>
                        </Link>
                        <Link href="/">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                        </span>
                        </Link>
                    </div>
                </div>
            </header>
            <div className="space-y-12">
                <header className="mt-14 text-center text-white">
                    <img className="mx-auto ring-4 ring-yellow-500 rounded-full"
                         src="/images/profile.jpg"
                         alt=""
                         width="240"
                         height="240">
                    </img>
                    <h1 className="mx-auto pt-6 text-4xl font-bold">{name}</h1>
                    <p className="text-yellow-500">he/him</p>
                </header>
                <section>
                    <Sectionheader title="About Me 👋"/>
                    <p className="text-gray-400 text-lg">
                        I am a cloud native full stack engineer with eleven years of experience in microservice
                        architecture, development and CI/CD. Lately I have been focusing on Kubernetes, utilizing
                        GKE and the power of GCP. In my spare time, I have been creating websites with Next.JS,
                        Strapi, and Firebase. Also, I record my very own podcast, Changelog and I try to blog a bit.
                    </p>
                </section>
                <section>
                    <Sectionheader title="Recent Blog Posts ✍️"/>
                    <div className="mx-auto grid gap-5 lg:grid-cols-3 max-w-lg lg:max-w-none">
                        {articles.map((article) => (
                            <Article key={article.slug} article={article}/>
                        ))}
                    </div>
                </section>
                <section>
                    <Sectionheader title="Projects 📌"/>
                    <p className="text-gray-400 text-xl">
                        In progress...
                    </p>
                </section>
                <section>
                    <Sectionheader title="Media 🔊"/>
                    <div className="mx-auto grid gap-5 lg:grid-cols-2 max-w-lg lg:max-w-none">
                        <Mediacard
                            title="🎧 What I'm Listening To"
                            src="https://open.spotify.com/embed/playlist/7w33zSxzXN5blasm8mk6cc"
                            subtext="The only truth is music 🎵"
                            isExternalSrc="true"
                        />
                        <Mediacard
                            title="🎤 What I'm Recording"
                            src="https://open.spotify.com/embed/show/29kRN9P3A5dljJmYr3zPsF"
                            subtext="☝️ pssst... I'm the host"
                            isExternalSrc="true"
                        />
                    </div>
                </section>
                <section>
                    <Sectionheader title="Tools ⚒️"/>
                    <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 lg:max-w-none">
                        <Link href="/coffee">
                            <a>
                                <Mediacard
                                    src="https://cdn.shopify.com/s/files/1/0353/3399/6675/products/Zoom_info_images-15_700x.jpg"
                                    subtext="Rating ⭐⭐⭐⭐"
                                />
                            </a>
                        </Link>
                        <a href="https://bear.app">
                            <Mediacard
                                src="https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/e5/21/84/e5218487-6977-93b6-7e35-67142546b221/AppIcon-85-220-0-4-2x-P3.png/1200x630bb.png"
                                subtext="Rating ⭐⭐⭐"
                            />
                        </a>
                        <a href="https://notion.so">
                            <Mediacard
                                src="https://pbs.twimg.com/profile_images/1381737932780752896/MbHGl54A.png"
                                subtext="Rating ⭐⭐⭐⭐⭐"
                            />
                        </a>
                        <a href="https://www.jetbrains.com/idea/">
                            <Mediacard
                                src="https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png"
                                subtext="Rating ⭐⭐⭐⭐⭐"
                            />
                        </a>
                    </div>
                </section>
                <footer className="text-center text-yellow-500 text-xl font-semibold">
                    FOOT
                </footer>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const articles = await fetchAPI("/articles?_sort=published_at:DESC&_limit=3");

    return {
        props: {articles}
    }
}
