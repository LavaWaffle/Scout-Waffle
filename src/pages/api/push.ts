import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db/client";
import { useGameContext } from "@/context/GameContext";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const { getGame } = useGameContext();
  const game = getGame();
  
  if (game === undefined) return res.status(400).json({ success: false, message: "No game found" });

  const examples = await prisma.game.create({
    data: {
      ...game
    }
  });
  res.status(200).json({ success: true, message: "Game pushed to database" });
};

export default examples;