import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next.js App Router
const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  // Optional custom configuration
  // config: { ... },
});

export { GET, POST };
