import Link from 'next/link';
import { gql, graphql } from 'react-apollo';

// NOTE: this works because the `id` is passed in as a prop from the destination page component
// http://dev.apollodata.com/react/queries.html#options-from-props
const getCollection = gql`
    query getTag($id: ID!) {
        Tag(id: $id) {
            id
            key
            hotels {
                id
                name
            }
            articles {
                id
                title
            }
        }
    }
`;

const Collection = ({ data: { Tag } }) => {
    if (!Tag) {
        return null;
    }
    return (
        <div>
            <h1>
                {Tag.key}
            </h1>
            <h2>Hotels</h2>
            <ul>
                {Tag.hotels.map(({ id, name }) => {
                    return (
                        <li key={id}>
                            <Link href={`/hotel?id=${id}`}>
                                <a>
                                    {name}
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <h2>Articles</h2>
            <ul>
                {Tag.articles.map(({ id, title }) => {
                    return (
                        <li key={id}>
                            <Link href={`/article?id=${id}`}>
                                <a>
                                    {title}
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default graphql(getCollection)(Collection);
