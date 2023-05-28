/**
 * @name testPipe
 * @description Pipe middleware for global requests
 * @type GlobalMiddleware
 * @param httpCtx {HttpContext}
 */
export const testPipe: GlobalMiddleware = function (httpCtx) {
  this.logger.info('Prueba testPipe global', httpCtx.req.url)
}
