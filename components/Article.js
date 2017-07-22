import Link from 'next/link';
import { gql, graphql } from 'react-apollo';
import ReactMarkdown from 'react-markdown';
import { FormattedDate } from 'react-intl';

// NOTE: this works because the `id` is passed in as a prop from the destination page component
// http://dev.apollodata.com/react/queries.html#options-from-props
const getArticle = gql`
    query getArticle($id: ID!) {
        Article(id: $id) {
            id
            title
            content
            createdAt
        }
    }
`;

const Article = ({ data: { Article } }) => {
    if (!Article) {
        return null;
    }
    return (
        <div>
            <h1>
                {Article.title}
            </h1>
            <FormattedDate value={new Date(Article.createdAt)} />
            <ReactMarkdown source={Article.content} />
        </div>
    );
};
export default graphql(getArticle)(Article);
