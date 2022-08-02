import { LaunchStatus } from "@prisma/client";

export function calculateLaunchPointValue(launches: LaunchStatus[]) {
  let value = 0;
  launches.forEach(launch => {
    if (launch === 'GotInUpper')  { 
      value+= 2;
    } else if (launch === 'GotInLower') {
      value+= 1;
    }
  });

  return value;
}