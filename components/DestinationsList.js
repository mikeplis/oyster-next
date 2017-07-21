import Link from 'next/link';
import { gql, graphql } from 'react-apollo';

const allDestinations = gql`
    query {
        allLocations {
            id
            name
        }
    }
`;

const DestinationList = ({ data: { allLocations } }) => {
    if (!allLocations || !allLocations.length) {
        return null;
    }
    return (
        <ul>
            {allLocations.map(({ id, name }) => {
                return (
                    <li key={id}>
                        <Link href={`/destinations?id=${id}`}>
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
