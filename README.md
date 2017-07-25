Ideas
* Prefetch data
  * http://dev.apollodata.com/react/prefetching.html
  * http://dev.apollodata.com/react/server-side-rendering.html#store-rehydration
  * https://github.com/zeit/next.js/issues/740
* Add pricing to hotels on graph.cool

# Query to retrieve all hotels with a given tag
`query {
  allHotels(filter: {tags_some: {key: "Beach"}}) {
    name
    tags {
      key
    }
  }
}`

# Query to retrieve all articles that contain a certain string
`query {
  allArticles(filter: {content_contains: "Lorem"}) {
    id
    title
  }
}
`
