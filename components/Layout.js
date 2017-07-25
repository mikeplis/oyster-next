import Header from './Header';
import Head from 'next/head';

export default ({ children }) =>
    <div>
        <Head>
            <link
                rel="stylesheet"
                href="https://unpkg.com/react-instantsearch-theme-algolia@4.0.0/style.min.css"
            />
        </Head>
        <Header />
        {children}
    </div>;
