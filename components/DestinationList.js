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
                        {name}
                    </li>
                );
            })}
        </ul>
    );
};
export default graphql(allDestinations)(DestinationList);
