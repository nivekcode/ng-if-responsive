import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public getBreakPointFromConfig(
    config: { [key: string]: number } | null,
    breakPointName: string | number
  ): number | null {
    if (typeof breakPointName === 'string') {
      if (!config) {
        console.error(
          'Please provide a breakpoint configuration via the RESPONSIVE_NG_IF_CONFIG injection token'
        );
        return null;
      }

      if (!config.hasOwnProperty(breakPointName)) {
        console.error(
          `Couldn't find a breakpoint named ${breakPointName} in the configuration provided via the RESPONSIVE_NG_IF_CONFIG injecton token`
        );
        return null;
      }
      return config[breakPointName];
    } else {
      return breakPointName;
    }
  }
}
