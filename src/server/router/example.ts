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
          cargoRP: 0,
          ourTeam: 'Blue',
          weWin: 'Tie',
          createdAt: new Date(),
          updatedAt: new Date(),
          markers: {
            create: [
              {
                top: 0,
                left: 0,
                launchOne: 'GotIn',
                launchTwo: 'GotIn',
              }
            ]
          },
          climbBar: "Low",
          climbRP: 0,
          autoBalls: {
            create: {
              launchOne: 'BounceOut',
              launchTwo: 'BounceOut',
            }
          }
        }
      })
    },
  });
