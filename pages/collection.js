import Layout from '../components/Layout';

import Collection from '../components/Collection';
import withData from '../lib/withData';

const CollectionPage = props => {
    const collectionId = props.url.query.id;
    return (
        <Layout>
            <Collection id={collectionId} />
        </Layout>
    );
};

export default withData(CollectionPage);
