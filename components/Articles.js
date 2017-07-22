import Link from 'next/link';
import { gql, graphql } from 'react-apollo';
import ReactMarkdown from 'react-markdown';

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
                        <ReactMarkdown source={deck} />
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};
export default graphql(allArticles)(Articles);
