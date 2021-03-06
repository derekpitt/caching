import { Cache } from "./cache";

import {
  LocalOrSession,
  getVal,
  removeVal,
  setVal,
} from "./local-session-utils";

export class LocalStorageCache implements Cache {
  public set<T>(key: string, value: T, durationMS?: number): void {
    return setVal<T>(LocalOrSession.Local, key, value, durationMS);
  }

  public get<T>(key: string): T {
    return getVal<T>(LocalOrSession.Local, key);
  }

  public remove(key: string): void {
    return removeVal(LocalOrSession.Local, key);
  }
}
