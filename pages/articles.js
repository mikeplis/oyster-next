import Layout from '../components/Layout';
import Articles from '../components/Articles';
import withData from '../lib/withData';

const ArticlesPage = () =>
    <Layout>
        <h1>Articles</h1>
        <Articles />
    </Layout>;

export default withData(ArticlesPage);
