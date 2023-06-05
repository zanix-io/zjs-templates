/**
 * @name localInterceptor
 * @description Example interceptor middleware for local requests
 * @type LocalMiddleware
 * @param httpCtx {HttpContext}
 */
const localInterceptor: LocalMiddleware = function (httpCtx) {
  this.logger.debug('Example local interceptor running')
  const { message } = httpCtx.res.body as never
  httpCtx.res.body = {
    ...(httpCtx.res.body as object),
    message: `${message} intercepted for ${this.config.NODE_ENV} env`
  }
}

export = localInterceptor
