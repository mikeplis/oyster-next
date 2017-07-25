import { FormattedMessage } from 'react-intl';
import { compose } from 'react-apollo';

import Layout from '../components/Layout';
import Destinations from '../components/Destinations';
import withIntl from '../lib/withIntl';
import withData from '../lib/withData';

const DestinationsPage = props =>
    <Layout>
        <h1>
            <FormattedMessage
                id="destinations.title"
                defaultMessage="Destinations"
            />
        </h1>
        <Destinations />
    </Layout>;

export default compose(withData, withIntl)(DestinationsPage);
