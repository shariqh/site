import Image from "next/image"
import Layout from "../../components/layout";
import {fetchAPI, getStrapiMedia} from "../../lib/api";

const name = 'Shariq Hirani'

const Article = ({article}) => {
    const imageUrl = getStrapiMedia(article.image);

    return (
        <Layout name={name}>
            <section>
                <div className="text-gray-400 max-w-2xl">
                    <div className="relative h-96">
                        <Image src={imageUrl}
                               className="object-contain"
                               placeholder="blur"
                               blurDataURL="/images/placeholder.png"
                               alt=""
                               layout="fill"
                        />
                    </div>
                    <p className="my-4 text-white text-2xl">{article.title}</p>
                    <p className="-gray-400 text-xl">{article.content}</p>
                </div>
            </section>
        </Layout>
    );
};

export async function getStaticPaths() {
    const articles = await fetchAPI("/articles");

    return {
        paths: articles.map((article) => ({
            params: {
                slug: article.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const articles = await fetchAPI(
        `/articles?slug=${params.slug}`
    );

    return {
        props: {article: articles[0]},
        revalidate: 1,
    };
}

export default Article;