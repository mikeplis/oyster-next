import { FormattedMessage } from 'react-intl';
import { compose } from 'react-apollo';

import Layout from '../components/Layout';
import DestinationsList from '../components/DestinationsList';
import withIntl from '../lib/withIntl';
import withData from '../lib/withData';

const Destinations = props =>
    <Layout>
        <h1>
            <FormattedMessage id="destinations.title" defaultMessage="Destinations" />
        </h1>
        <DestinationsList />
    </Layout>;

export default compose(withData, withIntl)(Destinations);
