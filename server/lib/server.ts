import type { FastifyPluginCallback } from 'fastify'
import fp from 'fastify-plugin'
import autoload from '@fastify/autoload'
import path from 'node:path'
import cookie from '@fastify/cookie'
import cors from '@fastify/cors'
import type { Config } from './config/config'

const plugin: FastifyPluginCallback<Config> = async (server, config, done) => {
  server.register(cookie)
  server.register(cors, {
    origin: config.corsOrigin,
    credentials: true
  })

  server.register(autoload, {
    dir: path.join(__dirname, 'plugins'),
    options: config
  })

  server.register(autoload, {
    dir: path.join(__dirname, 'routes'),
    dirNameRoutePrefix: false,
    options: config
  })

  server.addHook('onRequest', async req => {
    if (
      req.headers['content-type'] === 'application/json' &&
      req.headers['content-length'] === '0'
    ) {
      req.headers['content-type'] = 'empty'
    }
  })
  server.addContentTypeParser('empty', (_request, _body, next) => {
    next(null, {})
  })

  done()
}

export default fp(plugin)
