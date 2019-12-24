import * as Mousetrap from 'mousetrap';
import {useCallback, useEffect} from "react";

type CallbackFn = (event: KeyboardEvent, handler: HotkeysEvent) => void;

export function useMousetrap(keys: string, callback: CallbackFn, deps: any[] = []) {
  const memoisedCallback = useCallback(callback, deps);

  useEffect(() => {
    Mousetrap.bind(keys, memoisedCallback);

    return () => Mousetrap.unbind(keys, memoisedCallback);
  }, [memoisedCallback]);
}
