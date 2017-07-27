import shuffle from 'lodash.shuffle';

const PROVIDERS = [
    'Travelocity',
    'Booking.com',
    'Expedia',
    'Hotels.com',
    'Orbitz',
    'Hotwire'
];

function getMillisOrZero(d) {
    return d ? d.getMilliseconds() : 0;
}

// https://stackoverflow.com/a/19303725
function randomish(from, to) {
    const seed = getMillisOrZero(from) + getMillisOrZero(to);
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// generates pseudo-random pricing numbers
// should return same pricing for same from/to
export function getMetaPricing(from, to) {
    const providers = shuffle(PROVIDERS);
    from &&
        to &&
        providers.map(provider => {
            const price = randomish(from, to) * 200 + 300; // random number between 300 and 500
            return {
                provider,
                price
            };
        });
}
