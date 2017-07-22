import { compose } from 'react-apollo';

import Layout from '../components/Layout';

import Article from '../components/Article';
import withData from '../lib/withData';
import withIntl from '../lib/withIntl';

const ArticlePage = props => {
    const articleId = props.url.query.id;
    return (
        <Layout>
            <Article id={articleId} />
        </Layout>
    );
};

export default compose(withData, withIntl)(ArticlePage);
