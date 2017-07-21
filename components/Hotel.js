import Link from 'next/link';
import { gql, graphql } from 'react-apollo';

const getHotel = gql`
    query getHotel($id: ID!) {
        Hotel(id: $id) {
            id
            name
            simpleReview
            location {
                id
                name
            }
        }
    }
`;

const Hotel = ({ data: { Hotel } }) => {
    if (!Hotel) {
        return null;
    }
    return (
        <div>
            <h1>
                {Hotel.name}
            </h1>
            <h2>
                {Hotel.location.name}
            </h2>
            <p>
                {Hotel.simpleReview}
            </p>
        </div>
    );
};
export default graphql(getHotel)(Hotel);
