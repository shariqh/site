import Link from "next/link"
import Image from "next/image"
import {getStrapiMedia} from "../lib/api";

const Article = ({article}) => {
    const date = new Date(article.published_at);
    return (
        <div key={article.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <Image
                className="w-full object-cover"
                src={getStrapiMedia(article.image)}
                width={500}
                height={260}
            />
            <div className="flex-1 bg-indigo-900 p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <Link href={`/article/${article.slug}`}>
                        <a className="block mt-2">
                            <p className="text-xl font-semibold text-white">{article.title}</p>
                            <p className="mt-3 text-base text-gray-400">{article.description}</p>
                        </a>
                    </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="ml-3">
                        <div className="flex space-x-1 text-sm text-gray-400">
                            <time dateTime={article.published_at}>{`${date.toDateString()}`}</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Article}
