'useGlobalPipe'

/**
 * @name exampleGlobalPipe
 * @description Example Pipe middleware for global requests
 * @type GlobalMiddleware
 * @param httpCtx {HttpContext}
 */
const exampleGlobalPipe: GlobalMiddleware = function (httpCtx) {
  this.logger.debug('Example global pipe running')
  httpCtx.req.body = {
    ...httpCtx.req.body,
    piped: 'Value injected by global pipe'
  }
}

export = exampleGlobalPipe
