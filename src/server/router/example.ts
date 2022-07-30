import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("test", {
    async resolve({ ctx }) {
      return await ctx.prisma.game.create({
        data: {
          name: "test",
          tournament: "riot",
          markers: {
            create: [
              {
                isAuto: true,
                pointType: "auto",
                pointValue: 1,
                left: 0,
                top: 0,
                launches: {
                  create: [
                    {
                      type: "GotInLower",
                    }
                  ]
                }
              },
              {
                isAuto: false,
                pointType: "teleop",
                pointValue: 2,
                left: 2,
                top: 2,
                launches: {
                  create: [
                    {
                      type: "GotInLower"
                    },
                    {
                      type: "GotInLower"
                    }
                  ]
                }
              }
            ]
          },
          rankingPoints: {
            create: [
              {
                type: "Climb",
                numberScore: 1,
                maxScore: 1,
                minScore: 0,
              },
              {
                type: "Cargo",
                numberScore: 1,
                maxScore: 1,
                minScore: 0,
              }
            ]
          },
          weWin: "Win",
          ourTeam: "Blue",
        }
      })
    },
  });
