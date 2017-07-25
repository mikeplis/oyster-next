import Layout from '../components/Layout';
import Collections from '../components/Collections';
import withData from '../lib/withData';

const CollectionsPage = () =>
    <Layout>
        <h1>Collections</h1>
        <Collections />
    </Layout>;

export default withData(CollectionsPage);
