import Link from 'next/link';
import { gql, graphql } from 'react-apollo';

import Image from './Image';

// FIXME: a lot of this is copied from Hotel.js

const getHotel = gql`
    query getHotel($id: ID!) {
        Hotel(id: $id) {
            id
            name
            albums {
                id
                photos {
                    id
                    url
                }
                title
            }
        }
    }
`;

const Hotel = ({ data: { Hotel }, id }) => {
    if (!Hotel) {
        return null;
    }
    return (
        <div>
            <h1>
                {Hotel.name}
            </h1>
            <ul>
                <li>
                    <Link href={{ pathname: '/hotel', query: { id } }}>
                        <a>Overview</a>
                    </Link>
                </li>
                <li>
                    <Link href={{ pathname: '/hotel/photos', query: { id } }}>
                        <a>Photos</a>
                    </Link>
                </li>
            </ul>
            <h2>Photos</h2>
            <ul>
                {Hotel.albums &&
                    Hotel.albums.map(({ id, photos, title }) =>
                        <li key={id}>
                            {title}
                        </li>
                    )}
            </ul>
        </div>
    );
};
export default graphql(getHotel)(Hotel);
