import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import withIntl from '../lib/withIntl';

const Header = () =>
    <div>
        <ul>
            <li>
                <Link prefetch href="/">
                    <a>
                        <FormattedMessage
                            id="header.home"
                            defaultMessage="Home"
                        />
                    </a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/destinations">
                    <a>
                        <FormattedMessage
                            id="header.destinations"
                            defaultMessage="Destinations"
                        />
                    </a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/collections">
                    <a>
                        <FormattedMessage
                            id="header.collections"
                            defaultMessage="Collections"
                        />
                    </a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/articles">
                    <a>
                        <FormattedMessage
                            id="header.stories"
                            defaultMessage="Stories"
                        />
                    </a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/photo-fakeouts">
                    <a>
                        <FormattedMessage
                            id="header.photoFakeouts"
                            defaultMessage="Photo Fakeouts"
                        />
                    </a>
                </Link>
            </li>
        </ul>
    </div>;

export default withIntl(Header);
