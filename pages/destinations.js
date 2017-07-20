import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import withIntl from '../components/withIntl';

const Destinations = () =>
    <Layout>
        <h1>
            <FormattedMessage
                id="destinations.title"
                defaultMessage="Destinations"
            />
        </h1>
    </Layout>;

export default withIntl(Destinations);
