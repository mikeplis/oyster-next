import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import Search from '../components/Search';
import DatePicker from '../components/DatePicker';
import withIntl from '../lib/withIntl';

const Home = () =>
    <Layout>
        <h1>
            <FormattedMessage id="home.title" defaultMessage="Oyster Next" />
        </h1>
        <DatePicker />
        <Search />
    </Layout>;

export default withIntl(Home);
