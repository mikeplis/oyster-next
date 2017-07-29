import Link from 'next/link';
import { gql, graphql } from 'react-apollo';

import Image from './Image';

// NOTE: this works because the `id` is passed in as a prop from the destination page component
// http://dev.apollodata.com/react/queries.html#options-from-props
const getDestination = gql`
    query getLocation($id: ID!) {
        Location(id: $id) {
            id
            name
            hotels {
                id
                name
                featuredImage {
                    id
                    url
                }
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
                {Location.hotels.map(({ id, name, featuredImage }) => {
                    return (
                        <li key={id}>
                            {featuredImage &&
                                <Image height={100} url={featuredImage.url} />}
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
export default graphql(getDestination)(Destination);
