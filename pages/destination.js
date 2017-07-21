import Layout from '../components/Layout';

import Destination from '../components/Destination';
import withData from '../lib/withData';

const DestinationPage = props => {
    const destinationId = props.url.query.id;
    return (
        <Layout>
            <Destination id={destinationId} />
        </Layout>
    );
};

export default withData(DestinationPage);
