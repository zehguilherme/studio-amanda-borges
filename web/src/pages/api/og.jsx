import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler(request) {
  const projectName = request.nextUrl.searchParams.get("projectName");
  const projectYear = request.nextUrl.searchParams.get("projectYear");
  const projectImage = request.nextUrl.searchParams.get("projectImage");

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: `url('${projectImage}')`,
          objectPosition: "center",
          objectFit: "cover",
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            padding: 24,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(0deg, rgba(17,24,39,1) 0%, rgba(17,24,39,0) 100%, rgba(0,212,255,1) 100%)",
          }}
        >
          <h1 style={{ color: "white", fontSize: 35 }}>{projectName}</h1>

          <h2 style={{ color: "white", fontSize: 25 }}>{projectYear}</h2>
        </div>
      </div>
    ),
    {
      width: 526,
      height: 275,
    }
  );
}
