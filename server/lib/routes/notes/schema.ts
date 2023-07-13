import S from 'fluent-json-schema'

const Note = S.object()
  .prop('id', S.number().required())
  .prop('body', S.object().additionalProperties(true).required())
  .prop('bookId', S.number().required())

const getAll = {
  response: {
    200: S.object().prop('notes', S.array().items(Note).required()),
    404: S.object().prop('message', S.string())
  }
}

const getOne = {
  response: {
    200: S.object().prop('note', Note),
    404: S.object().prop('message', S.string())
  }
}

const insert = {
  body: S.object()
    .prop('body', S.object().additionalProperties(true).required())
    .prop('bookId', S.number().required())
}

const update = {
  body: S.object().prop(
    'goal',
    S.object().prop('body', S.object().additionalProperties(true).required())
  ),
  response: {
    404: S.object().prop('message', S.string())
  }
}

const del = {
  response: {
    404: S.object().prop('message', S.string())
  }
}

export const schema = {
  getAll,
  getOne,
  insert,
  update,
  del
}
