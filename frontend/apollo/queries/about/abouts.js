import gql from 'graphql-tag'

const ABOUT_QUERY = gql`
  query Abouts {
    abouts {
      id
      title
      text
      image {
        url
      }
    }
  }
`

export default ABOUT_QUERY
