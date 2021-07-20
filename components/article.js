import Link from "next/link"
import Image from "next/image"
import {getStrapiMedia} from "../lib/api";

const Article = ({article}) => {
    const date = new Date(article.published_at);
    return (
        <div key={article.title} className="flex flex-col overflow-hidden">
            <Image
                className="w-full rounded-lg object-cover"
                src={getStrapiMedia(article.image)}
                width={500}
                height={260}
            />
            <div className="flex flex-col justify-between">
                <Link href={`/article/${article.slug}`}>
                    <a className="mt-2">
                        <p className="text-xl font-semibold text-white">{article.title}</p>
                        <p className="text-gray-300">{article.description}</p>
                    </a>
                </Link>
                <div className="flex items-center">
                    <div className="flex mt-2 text-sm text-gray-400">
                        <time dateTime={article.published_at}>{`${date.toDateString()}`}</time>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Article}
