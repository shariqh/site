import Layout from "../../components/layout";
import Link from "next/link";

import Sectionheader from "../../components/sectionheader";

const name = 'Shariq Hirani'

const Index = ({}) => {
    return (
        <Layout name={name}>
            <div className="mx-auto max-w-lg space-y-12">
                <section>
                    <Sectionheader title="Who I Am"/>
                    <p className="text-gray-400 text-xl text-justify">
                        Other than a horrible plant trimmer, I am also the host of a podcast,&nbsp;
                        <a href="https://open.spotify.com/show/29kRN9P3A5dljJmYr3zPsF?si=1bf1d98e982c4dc8"
                           className="underline text-indigo-300">
                            Changelog
                        </a>, a&nbsp;
                        <a href="https://www.shariqhirani.com"
                           className="underline text-indigo-300">
                            photographer
                        </a>, and I attempt to write a&nbsp;
                        <Link href="/blog">
                            <a className="underline text-indigo-300">blog</a>
                        </Link>.
                        <br/>
                        <br/>
                        Full time, I am cloud native architect with eleven years of experience in microservice
                        architecture, development, and CI/CD. I usually build on Kubernetes, utilizing GKE and the power
                        of GCP. I guess you could say that this is my specialty.
                        <br/>
                        <br/>
                        Lately I have been focusing on React.js, Next.js, and the power of TailwindCSS to create
                        websites.
                        <br/>
                        <br/>
                        The goal for me is to always learn something new, and maybe I can use it to change the world.
                        But as we have seen over these past few year, change does not come so easily. My other, less
                        known goal, is to break my addiction to coffee. Seriously, I dedicated a&nbsp;
                        <Link href="/coffee">
                            <a className="underline text-indigo-300">whole webpage</a>
                        </Link>&nbsp;to it ☕. Send help.
                    </p>
                </section>
            </div>
        </Layout>
    );
}

export default Index;
