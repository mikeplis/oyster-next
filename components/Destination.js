import Link from 'next/link';
import { gql, graphql } from 'react-apollo';

// NOTE: this works because the url query param is `id`
// http://dev.apollodata.com/react/queries.html#options-from-props
const destination = gql`
    query getLocation($id: ID!) {
        Location(id: $id) {
            id
            name
            hotels {
                id
                name
            }
        }
    }
`;

const Destination = ({ data: { Location } }) => {
    if (!Location) {
        return null;
    }
    return (
        <div>
            <h1>
                {Location.name}
            </h1>
            <ul>
                {Location.hotels.map(({ id, name }) => {
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
        </div>
    );
};
export default graphql(destination)(Destination);
