const PREVIEW_SECRET = process.env.PREVIEW_SECRET;

export default async function handler(request, response) {
  if (request.query.secret !== PREVIEW_SECRET) {
    return response.status(401).json({ message: "Invalid token" });
  }

  const previousPage = request.headers.referer || "/";

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
