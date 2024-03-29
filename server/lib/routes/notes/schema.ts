import S from 'fluent-json-schema'

const Note = S.object()
  .prop('id', S.number().required())
  .prop('title', S.string().required())
  .prop('body', S.object().additionalProperties(true).required())

const getAll = {
  response: {
    200: S.object().prop('notes', S.array().items(Note).required())
  }
}

const getOne = {
  response: {
    200: S.object().prop('note', Note),
    404: S.object().prop('message', S.string())
  }
}

const insert = {
  body: S.object().prop('title').required(),
  response: {
    201: S.object().prop('id', S.string().required())
  }
}

const update = {
  body: S.object().prop(
    'note',
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
