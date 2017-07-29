import Link from 'next/link';
import { gql, graphql } from 'react-apollo';

import Image from './Image';

const allDestinations = gql`
    query {
        allLocations {
            id
            name
            featuredImage {
                id
                url
            }
        }
    }
`;

const DestinationList = ({ data: { allLocations } }) => {
    if (!allLocations || !allLocations.length) {
        return null;
    }
    return (
        <ul>
            {allLocations.map(({ id, name, featuredImage }) => {
                return (
                    <li key={id}>
                        {featuredImage &&
                            <Image height={100} url={featuredImage.url} />}
                        <Link prefetch href={`/destination?id=${id}`}>
                            <a>
                                {name}
                            </a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
export default graphql(allDestinations)(DestinationList);
