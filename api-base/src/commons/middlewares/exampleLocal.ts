/**
 * @name localInterceptor
 * @description Example interceptor middleware for local requests
 * @type LocalMiddleware
 * @param httpCtx {HttpContext}
 */
const localInterceptor: LocalMiddleware = function (httpCtx) {
  this.logger.debug('Example local interceptor running')
  if (httpCtx.res.body) {
    httpCtx.res.body = {
      ...httpCtx.res.body,
      message: `${httpCtx.res.body.message} intercepted for ${this.config.NODE_ENV} env`
    }
  }
}

export = localInterceptor
