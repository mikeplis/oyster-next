import { FormattedMessage } from 'react-intl';
import { compose } from 'react-apollo';

import Layout from '../components/Layout';
import DestinationList from '../components/DestinationList';
import withIntl from '../lib/withIntl';
import withData from '../lib/withData';

const Destinations = () =>
    <Layout>
        <h1>
            <FormattedMessage
                id="destinations.title"
                defaultMessage="Destinations"
            />
        </h1>
        <DestinationList />
    </Layout>;

export default compose(withData, withIntl)(Destinations);
