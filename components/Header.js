import Link from 'next/link';

export default () =>
    <div>
        <ul>
            <li>
                <Link prefetch href="/">
                    <a>Home</a>
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
