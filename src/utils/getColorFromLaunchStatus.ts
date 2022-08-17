import { LaunchStatus } from "@prisma/client";

export function getColorFromLaunchStatus(launch: LaunchStatus | undefined) {
  switch (launch) {
    case LaunchStatus.GotInUpper:
      return 'pink';
    case LaunchStatus.GotInLower:
      return 'violet';
    case LaunchStatus.BounceOut:
      return 'orange';
    case LaunchStatus.MissClose:
      return 'cyan';
    case LaunchStatus.MissFar:
      return 'indigo';
    default:
      return 'gray';
  }
}