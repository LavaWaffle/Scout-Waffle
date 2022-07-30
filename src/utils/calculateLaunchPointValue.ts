import { LaunchStatus } from "@prisma/client";

export function calculateLaunchPointValue(launchOne: LaunchStatus, launchTwo: LaunchStatus) {
  let value = 0;
  if (launchOne === 'GotInUpper') {
    value += 2;
  } else if (launchOne === 'GotInLower') {
    value += 1;
  }
  if (launchTwo === 'GotInUpper') {
    value += 2;
  } else if (launchTwo === 'GotInLower') {
    value += 1;
  }

  return value;
}