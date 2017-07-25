import Link from 'next/link';
import { gql, graphql } from 'react-apollo';

const allCollections = gql`
    query {
        allTags {
            id
            key
        }
    }
`;

const Collections = ({ data: { allTags } }) => {
    if (!allTags || !allTags.length) {
        return null;
    }
    return (
        <ul>
            {allTags.map(({ id, key }) => {
                return (
                    <li key={id}>
                        <Link href={`/collection?id=${id}`}>
                            <a>
                                {key}
                            </a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
export default graphql(allCollections)(Collections);
