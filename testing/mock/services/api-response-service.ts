import { defer, of } from "rxjs";

export const observableSucess = (object: any) => defer(() => of(object));
export const promisesSucess = (object: any) => defer(() => Promise.resolve(object));


