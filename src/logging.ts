import type { Package } from '@-xun/project-types';
import type { ExtendedLogger } from 'rejoinder';

/**
 * Hard-coded maximum reporting depth of the causal stack when fatal errors
 * occur.
 */
export const MAX_LOG_ERROR_ENTRIES = 10;

/**
 * The success message commands should output when a command succeeds.
 */
export const standardSuccessMessage = '✅ Succeeded!';

/**
 * Well-known {@link ExtendedLogger} tags for filtering output automatically
 * depending on program state.
 */
export enum LogTag {
  IF_NOT_SILENCED = 'lens-cli:if-not-silenced',
  IF_NOT_QUIETED = 'lens-cli:if-not-quieted',
  IF_NOT_HUSHED = 'lens-cli:if-not-hushed'
}

/**
 * Prints a timestamp indicating the beginning of execution.
 */
export function logStartTime({
  package: {
    json: { name: packageName, version: packageVersion }
  },
  standardLog,
  startTime,
  isUsingLocalInstallation
}: {
  package: Package;
  standardLog: ExtendedLogger;
  startTime: Date;
  isUsingLocalInstallation: boolean;
}) {
  standardLog.extend(isUsingLocalInstallation ? '🏠local' : '🌎GLOBAL')(
    [LogTag.IF_NOT_QUIETED],
    `Execution of ${packageName}${packageVersion ? `@${packageVersion}` : ''} began on`,
    startTime.toLocaleDateString(),
    'at',
    startTime.toLocaleTimeString()
  );
}
