import Link from 'next/link';
import { gql, graphql } from 'react-apollo';

import Image from './Image';

const getHotel = gql`
    query getHotel($id: ID!) {
        Hotel(id: $id) {
            id
            name
            simpleReview
            pearlRating
            location {
                id
                name
            }
            featuredImage {
                id
                url
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
            {Hotel.featuredImage && <Image url={Hotel.featuredImage.url} />}
            <h2>
                {Hotel.location.name}
            </h2>
            <p>
                {Hotel.pearlRating} / 5
            </p>
            <p>
                {Hotel.simpleReview}
            </p>
        </div>
    );
};
export default graphql(getHotel)(Hotel);
