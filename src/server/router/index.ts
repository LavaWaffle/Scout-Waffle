// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { scoutRouter } from "./scout";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("scout.", scoutRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
