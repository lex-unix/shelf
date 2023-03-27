import S from 'fluent-json-schema'

const Goal = S.object()
  .prop('id', S.string().required())
  .prop('name', S.string().required())

const getAll = {
  response: {
    200: S.object().prop('goals', S.array().items(Goal).required())
  }
}

const getOne = {
  response: {
    200: S.object().prop('goal', Goal),
    404: S.object().prop('message', S.string())
  }
}

const insert = {
  body: S.object().prop('goal', S.object().prop('name', S.string().required())),
  response: {
    201: S.object().prop('goal', Goal)
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
  del
}
