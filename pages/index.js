import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import withIntl from '../lib/withIntl';

const Home = () =>
    <Layout>
        <h1>
            <FormattedMessage id="home.title" defaultMessage="Oyster Next" />
        </h1>
    </Layout>;

export default withIntl(Home);
