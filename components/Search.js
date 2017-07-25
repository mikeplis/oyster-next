import {
    InstantSearch,
    Hits,
    SearchBox,
    Highlight,
    Index
} from 'react-instantsearch/dom';
import Link from 'next/link';

const HotelHit = ({ hit }) =>
    <div>
        <p>
            <Highlight attributeName="name" hit={hit} />
        </p>
        <small>
            <Highlight attributeName="simpleReview" hit={hit} />
        </small>
    </div>;

const ArticleHit = ({ hit }) => {
    return (
        <div>
            <p>
                <Link href={`/article?id=${hit.id}`}>
                    <a>
                        <Highlight attributeName="title" hit={hit} />
                    </a>
                </Link>
            </p>
            <small>
                <Highlight attributeName="deck" hit={hit} />
            </small>
        </div>
    );
};

const TagHit = ({ hit }) =>
    <div>
        <p>
            <Highlight attributeName="key" hit={hit} />
        </p>
    </div>;

const LocationHit = ({ hit }) =>
    <div>
        <p>
            <Highlight attributeName="name" hit={hit} />
        </p>
    </div>;

export default () =>
    <InstantSearch
        appId="51CSD6MVKP"
        apiKey="6af2850beac512e1a8f73f54c9eaa991"
        indexName="Hotels"
    >
        <div className="search-container">
            <SearchBox />
            <h3>Hotels:</h3>
            <Index indexName="Hotels">
                <Hits hitComponent={HotelHit} />
            </Index>
            <h3>Articles:</h3>
            <Index indexName="Articles">
                <Hits hitComponent={ArticleHit} />
            </Index>
            <h3>Tags:</h3>
            <Index indexName="Tags">
                <Hits hitComponent={TagHit} />
            </Index>
            <h3>Locations:</h3>
            <Index indexName="Locations">
                <Hits hitComponent={LocationHit} />
            </Index>
        </div>
    </InstantSearch>;
