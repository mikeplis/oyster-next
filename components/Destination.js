import Link from 'next/link';
import { gql, graphql } from 'react-apollo';

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
    console.log(Location);
    return (
        <div>
            <h1>
                {Location.name}
            </h1>
            <ul>
                {Location.hotels.map(({ id, name }) => {
                    return (
                        <li key={id}>
                            {name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default graphql(destination)(Destination);
