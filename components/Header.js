import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import withIntl from './withIntl';

const Header = () =>
    <div>
        <ul>
            <li>
                <Link prefetch href="/">
                    <a>
                        <FormattedMessage id="header.home" defaultMessage="Home" />
                    </a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/destinations">
                    <a>Destinations</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/collections">
                    <a>Collections</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/articles">
                    <a>Stories</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/photo-fakeouts">
                    <a>Photo Fakeouts</a>
                </Link>
            </li>
        </ul>
    </div>;

export default withIntl(Header);
