import { createRouter } from "./context";
import { z } from "zod";

export const scoutRouter = createRouter()
  .query("push", {
    input: z.object({
      name: z.string(),
      tournament: z.string(),
      weWin: z.enum(["Win", "Tie", "Lose"]),
      ourTeam: z.enum(["Blue", "Red"]),
      markers: z.object({
        create: z.array(z.object({
          isAuto: z.boolean(),
          pointType: z.string(),
          pointValue: z.number(),
          left: z.number().nullish(),
          top: z.number().nullish(),
          launches: z.object({
            create: z.array(z.object({
              type: z.enum(["GotInLower", "GotInUpper", "BounceOut", "MissClose", "MissFar", "NoLaunch"]),
            }))
          })
        }))
      }),
      rankingPoints: z.object({
        create: z.array(z.object({
          type: z.string(),
          numberScore: z.number(),
          maxScore: z.number(),
          minScore: z.number(),
        }))
      }),
        
    }),
    async resolve({ ctx, input }) {
      // push game data to database
      return await ctx.prisma.game.create({
        data: {...input}
      })
    }
  })