import Layout from "../../components/layout";
import Image from "next/image"
import {fetchAPI, getStrapiMedia} from "../../lib/api";

const Article = ({article, tags}) => {
    const imageUrl = getStrapiMedia(article.image);

    return (
        <Layout name={article.title}>
            <section>
                <div className="flex flex-col mx-auto text-gray-400 max-w-2xl">
                    <img src={imageUrl}
                         placeholder="blur"
                         blurDataURL="/images/placeholder.png"
                         alt=""
                         layout="fill"
                    />
                    <div className="mt-4 text-gray-400 text-xl">
                        {article.content}
                    </div>
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

    const {tags} = articles[0];

    return {
        props: {article: articles[0], tags},
        revalidate: 1,
    };
}

export default Article;