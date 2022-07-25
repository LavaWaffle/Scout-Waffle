import { createRouter } from "./context";
import { z } from "zod";

export const scoutRouter = createRouter()
  .query("scout", {
    input: z.object({
      text: z.string().nullish(),
    })
    .nullish(),
    resolve({ input }) {
      return {
        scout: `Scout ${input?.text ?? "world"}`,
      }
    }
  })