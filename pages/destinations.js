import { FormattedMessage } from 'react-intl';
import { compose } from 'react-apollo';

import Layout from '../components/Layout';
import DestinationsList from '../components/DestinationsList';
import Destination from '../components/Destination';
import withIntl from '../lib/withIntl';
import withData from '../lib/withData';

const Destinations = props => {
    // TODO: figure out a way to not make this page have two responsibilities, maybe via route masking
    const destinationId = props.url.query.id;
    if (destinationId) {
        return (
            <Layout>
                <Destination id={destinationId} />
            </Layout>
        );
    }
    return (
        <Layout>
            <h1>
                <FormattedMessage
                    id="destinations.title"
                    defaultMessage="Destinations"
                />
            </h1>
            <DestinationsList />
        </Layout>
    );
};

export default compose(withData, withIntl)(Destinations);
