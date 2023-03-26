import S from 'fluent-json-schema'

const User = S.object()
  .prop('id', S.string().required())
  .prop('name', S.string().required())
  .prop('email', S.string().required())

const register = {
  body: S.object()
    .prop('name', S.string().required())
    .prop('password', S.string().required())
    .prop('email', S.string().required()),
  response: {
    200: S.object().prop('user', User),
    409: S.object().prop('message', S.string()).prop('field', S.string())
  }
}

const login = {
  body: S.object()
    .prop('email', S.string().required())
    .prop('password', S.string().required()),
  response: {
    200: S.object().prop('user', User),
    404: S.object().prop('message', S.string()),
    401: S.object().prop('message', S.string()).prop('field', S.string())
  }
}

const update = {
  body: S.object().prop(
    'user',
    S.object()
      .prop('name', S.string().required())
      .prop('email', S.string().required())
  ),
  response: {
    200: S.object().prop('user', User),
    404: S.object().prop('message', S.string()),
    409: S.object()
      .prop('message', S.string().required())
      .prop('field', S.string().required())
  }
}

export const schema = {
  register,
  login,
  update
}
