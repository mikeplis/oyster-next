import Link from 'next/link';
import { gql, graphql } from 'react-apollo';

const allArticles = gql`
    query {
        allArticles {
            id
            title
            deck
        }
    }
`;

const Articles = ({ data: { allArticles } }) => {
    if (!allArticles || !allArticles.length) {
        return null;
    }
    return (
        <div>
            {allArticles.map(({ id, title, deck }) => {
                return (
                    <div key={id}>
                        <Link href={`/article?id=${id}`}>
                            <a>
                                <h2>
                                    {title}
                                </h2>
                            </a>
                        </Link>
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
