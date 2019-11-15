/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImage = `query GetImage($id: ID!) {
  getImage(id: $id) {
    id
    image
  }
}
`;
export const listImages = `query ListImages(
  $filter: ModelImageFilterInput
  $limit: Int
  $nextToken: String
) {
  listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      image
    }
    nextToken
  }
}
`;
