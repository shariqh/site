import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import Sectionheader from "../components/sectionheader"
import Mediacard from "../components/mediacard"
import {fetchAPI} from "../lib/api";
import {Articlecard} from "../components/articlecard";
import Layout from "../components/layout";

const name = 'Shariq Hirani'
export const siteTitle = 'Shariq\'s Personal Site'

export default function Home({articles}) {
    return (
        <Layout name={name}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="Shariq's Site"
                    content="My personal home for my journey though photography, blogging, and cloud-native development"
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
            <header className="text-center text-white">
                <div className="relative mx-auto h-60 w-60 ring-4 ring-yellow-500 rounded-full">
                    <Image className="rounded-full object-contain"
                           placeholder="blur"
                           blurDataURL="/images/placeholder.png"
                           src="/images/profile.jpg"
                           alt=""
                           layout="fill"
                    />
                </div>
                <h1 className="mx-auto pt-6 text-4xl font-bold">{name}</h1>
                <p className="text-yellow-500">he/him</p>
            </header>
            <section>
                <Sectionheader title="Hello" emoji="????"/>
                <p className="text-gray-400 text-xl">
                    Cloud native architect, media buff, photographer, and&nbsp;
                    <Link href="/coffee">
                        <a className="text-indigo-300">coffee aficionado</a>
                    </Link>. In my spare time, I give bad haircuts to my plants. Check them out on my&nbsp;
                    <a href="https://instagram.com/shariqhiraniphoto"
                       className="text-indigo-300">
                        Instagram
                    </a>. Also, I am a huge fan of&nbsp;
                    <a href="https://plex.tv/"
                       className="text-indigo-300">Plex
                    </a> - be sure to check out my&nbsp;
                    <a href="https://github.com/shariqh/home-server-docker-compose"
                       className="text-indigo-300">Docker build repository
                    </a>.
                </p>
            </section>
            <section>
                <Sectionheader title="Recent Blog Posts" emoji="??????"/>
                <div className="mx-auto grid gap-5 lg:grid-cols-3 max-w-lg lg:max-w-none">
                    {articles.map((article) => (
                        <Articlecard key={article.slug} article={article}/>
                    ))}
                </div>
            </section>
            <section>
                <Sectionheader title="Projects" emoji="????"/>
                <p className="text-gray-400 text-xl">
                    In progress...
                </p>
            </section>
            <section>
                <Sectionheader title="Media"/>
                <div className="mx-auto grid gap-5 lg:grid-cols-2 max-w-lg lg:max-w-none">
                    <Mediacard
                        title="???? What I'm Listening To"
                        src="https://open.spotify.com/embed/playlist/7w33zSxzXN5blasm8mk6cc"
                        subtext="The only truth is music ????"
                        isExternalSrc="true"
                    />
                    <Mediacard
                        title="???? What I'm Recording"
                        src="https://open.spotify.com/embed/show/29kRN9P3A5dljJmYr3zPsF"
                        subtext="?????? pssst... I'm the host"
                        isExternalSrc="true"
                    />
                </div>
            </section>
            <section>
                <Sectionheader title="Tools" emoji="??????"/>
                <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 lg:max-w-none">
                    <Link href="/coffee">
                        <a>
                            <Mediacard
                                src="https://cdn.shopify.com/s/files/1/0353/3399/6675/products/Zoom_info_images-15_700x.jpg"
                                subtext="Rating ????????????"
                            />
                        </a>
                    </Link>
                    <a href="https://bear.app">
                        <Mediacard
                            src="https://is5-ssl.mzstatic.com/image/thumb/Purple115/v4/e5/21/84/e5218487-6977-93b6-7e35-67142546b221/AppIcon-85-220-0-4-2x-P3.png/1200x630bb.png"
                            subtext="Rating ?????????"
                        />
                    </a>
                    <a href="https://notion.so">
                        <Mediacard
                            src="https://pbs.twimg.com/profile_images/1381737932780752896/MbHGl54A.png"
                            subtext="Rating ???????????????"
                        />
                    </a>
                    <a href="https://www.jetbrains.com/idea/">
                        <Mediacard
                            src="https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png"
                            subtext="Rating ???????????????"
                        />
                    </a>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const articles = await fetchAPI("/articles?_sort=published_at:DESC&_limit=3");

    return {
        props: {articles}
    }
}
