import { useCallback, useRef } from "react";
import isEqual from "lodash/isEqual";

export function useDeepCompareCallback<T extends (...args: any[]) => any>(
    callback: T,
    dependencies: any[]
): T {
    const previousDepsRef = useRef<any[]>([]);

    // Если массив зависимостей глубоко изменился — обновляем ref
    if (!isEqual(previousDepsRef.current, dependencies)) {
        previousDepsRef.current = dependencies;
    }

    // Возвращаем мемоизированный callback, зависящий и от самой функции, и от «глубоко» сравненных deps
    return useCallback(callback, [callback, ...previousDepsRef.current]);
}
