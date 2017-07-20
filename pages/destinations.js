import { FormattedMessage } from 'react-intl';
import { compose } from 'react-apollo';

import Layout from '../components/Layout';
import withIntl from '../lib/withIntl';

const Destinations = () =>
    <Layout>
        <h1>
            <FormattedMessage
                id="destinations.title"
                defaultMessage="Destinations"
            />
        </h1>
    </Layout>;

export default compose(withIntl)(Destinations);
