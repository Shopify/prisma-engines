import { Result } from "./types";

export function mapResult<T, U>(result: Result<T>, mapper: (arg: T) => U): Result<U> {
    if (!result.ok) {
        return result
    }
    return { ok: true, value: mapper(result.value)}
}