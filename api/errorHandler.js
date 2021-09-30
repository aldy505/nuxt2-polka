/**
 * Simple error handler
 * @param {Error} err 
 * @param {import('polka').Request} req 
 * @param {import('polka').Response} res 
 */
export function errorHandler(err, req, res) {
  console.error(err);
  res.writeHead(500, { 'Content-Type': 'application/json' }).end(JSON.stringify({ msg: 'Oh no, an error!' }))
}