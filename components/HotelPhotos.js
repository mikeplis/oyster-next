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
                photos(first: 1) {
                    id
                    url
                }
                title
                _photosMeta {
                    count
                }
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
            <div>
                {Hotel.albums &&
                    Hotel.albums.map(({ id, photos, title, _photosMeta }) =>
                        <div key={id}>
                            <div>
                                {photos && photos[0] && <Image width={200} url={photos[0].url} />}
                            </div>
                            <div>
                                {title} ({_photosMeta.count})
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default graphql(getHotel)(Hotel);
