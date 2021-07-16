import Head from 'next/head'
import Link from "next/link"
import Sectionheader from "../components/sectionheader"
import Mediacard from "../components/mediacard"
import {fetchAPI} from "../lib/api";
import {Article} from "../components/article";

const name = 'Shariq Hirani'
export const siteTitle = 'Shariq\'s Personal Site'

export default function Home({articles}) {
    return (
        <div className="bg-gray-800 overflow-auto">
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
                <section>
                    <Sectionheader title="About Me"/>
                    <p className="mt-6 text-gray-400 text-xl">
                        I am a cloud native full stack engineer with eleven years of experience in microservice
                        architecture, development and CI/CD. Mainly, I focus on Kubernetes and GCP deployments.
                        I enjoy solving challenges to the business with technical solutions.
                    </p>
                </section>
                <section>
                    <Sectionheader title="Recent Blog Posts"/>
                    <div className="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {articles.map((article) => (
                            <Article key={article.slug} article={article}/>
                        ))}
                    </div>
                </section>
                <section>
                    <Sectionheader title="Projects"/>
                    <p className="mt-6 text-gray-400 text-xl">
                        In progress...
                    </p>
                </section>
                <section>
                    <Sectionheader title="Media"/>
                    <div className="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
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
                    <Sectionheader title="Tools"/>
                    <div className="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 sm:grid-cols-2 lg:max-w-none">
                        <Link href="/coffee">
                            <a>
                                <Mediacard
                                    title="☕ Coffee"
                                    src="https://cdn.shopify.com/s/files/1/0353/3399/6675/products/Zoom_info_images-15_700x.jpg"
                                    subtext="Rating ⭐⭐⭐⭐"
                                />
                            </a>
                        </Link>
                        <Mediacard
                            title="✏️ Writing"
                            src="https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/e5/21/84/e5218487-6977-93b6-7e35-67142546b221/AppIcon-85-220-0-4-2x-P3.png/1200x630bb.png"
                            subtext="Rating ⭐⭐⭐"
                        />
                        <Mediacard
                            title="📚 Organizing"
                            src="https://pbs.twimg.com/profile_images/1381737932780752896/MbHGl54A.png"
                            subtext="Rating ⭐⭐⭐⭐⭐"
                        />
                        <Mediacard
                            title="Development"
                            src="https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png"
                            subtext="Rating ⭐⭐⭐⭐⭐"
                        />
                    </div>
                </section>
                <footer className="pb-8 text-center text-yellow-500 text-xl font-semibold">

                </footer>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const articles = await fetchAPI("/articles?_sort=published_at:DESC&_limit=3");

    return {
        props: {articles}
    }
}
