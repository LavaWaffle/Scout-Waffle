import type { ClimbBar } from "@/contexts/GameContext";

export default function calculateClimbPointValue(bar: ClimbBar) {
  if (bar === 'Low') return 4;
  if (bar === 'Middle') return 6;
  if (bar === 'High') return 10;
  if (bar === 'Traversal') return 15;
  return 0;
}