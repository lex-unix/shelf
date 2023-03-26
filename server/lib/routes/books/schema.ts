import S from 'fluent-json-schema'

const Book = S.object()
  .prop('id', S.number().required())
  .prop('author', S.string().required())
  .prop('title', S.string().required())

const getBooks = {
  response: {
    200: S.object().prop('books', S.array().items(Book).required())
  }
}

const insert = {
  body: S.object().prop(
    'book',
    S.object()
      .prop('author', S.string().required())
      .prop('title', S.string().required())
  ),
  response: {
    201: S.object().prop('book', Book)
  }
}

export const schema = {
  getBooks,
  insert
}
