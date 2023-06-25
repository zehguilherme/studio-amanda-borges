export default async function handler(request, response) {
  const previousPage = request.headers.referer;

  // Turn off preview if it's on
  if (request.preview) {
    response.clearPreviewData();
    response.writeHead(307, { Location: previousPage });
    return response.end();
  }

  // Turn on preview if it's off
  response.setPreviewData({});
  response.writeHead(307, { Location: previousPage });
  return response.end();
}
