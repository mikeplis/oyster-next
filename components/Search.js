import {
    InstantSearch,
    Hits,
    SearchBox,
    Highlight,
    Index,
    Configure
} from 'react-instantsearch/dom';
import Link from 'next/link';
import Head from 'next/head';

const HotelHit = ({ hit }) =>
    <div>
        <p>
            <Link href={`/hotel?id=${hit.id}`}>
                <a>
                    <Highlight attributeName="name" hit={hit} />
                </a>
            </Link>
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
            <Link href={`/collection?id=${hit.id}`}>
                <a>
                    <Highlight attributeName="key" hit={hit} />
                </a>
            </Link>
        </p>
    </div>;

const DestinationHit = ({ hit }) =>
    <div>
        <p>
            <Link href={`/destination?id=${hit.id}`}>
                <a>
                    <Highlight attributeName="name" hit={hit} />
                </a>
            </Link>
        </p>
    </div>;

export default () =>
    <div>
        <Head>
            <link
                rel="stylesheet"
                href="https://unpkg.com/react-instantsearch-theme-algolia@4.0.0/style.min.css"
            />
        </Head>
        <InstantSearch
            appId="51CSD6MVKP"
            apiKey="6af2850beac512e1a8f73f54c9eaa991"
            indexName="Hotels"
        >
            <div className="search-container">
                <SearchBox />
                <Configure hitsPerPage={3} />
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
                <h3>Destinations:</h3>
                <Index indexName="Locations">
                    <Hits hitComponent={DestinationHit} />
                </Index>
            </div>
        </InstantSearch>
    </div>;
