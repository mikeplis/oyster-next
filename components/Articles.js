import Link from 'next/link';
import { gql, graphql } from 'react-apollo';

import Image from './Image';

const allArticles = gql`
    query {
        allArticles {
            id
            title
            deck
            featuredImage {
                id
                url
            }
        }
    }
`;

const Articles = ({ data: { allArticles } }) => {
    if (!allArticles || !allArticles.length) {
        return null;
    }
    return (
        <div>
            {allArticles.map(({ id, title, deck, featuredImage }) => {
                return (
                    <div key={id}>
                        <Link href={`/article?id=${id}`}>
                            <a>
                                <h2>
                                    {title}
                                </h2>
                            </a>
                        </Link>
                        {featuredImage &&
                            <Image height={100} url={featuredImage.url} />}
                        <p>
                            {deck}
                        </p>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};
export default graphql(allArticles)(Articles);
