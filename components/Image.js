// https://github.com/graphcool/feature-requests/issues/173#issuecomment-298876093
// graph.cool exposes an image manipulation API at images.graph.cool, but doesn't expose that url on the File type
const getImageUrl = (url, width, height, forceResize) => {
    const imageSize =
        (width || height) &&
        `${width || ''}x${height || ''}${forceResize ? '!' : ''}`;
    const baseUrl = url.replace(
        'https://files.graph.cool/',
        'https://images.graph.cool/'
    );
    return `${baseUrl}/${imageSize || ''}`;
};

export default ({ url, width, height, forceResize = false }) =>
    <img src={getImageUrl(url, width, height, forceResize)} />;
