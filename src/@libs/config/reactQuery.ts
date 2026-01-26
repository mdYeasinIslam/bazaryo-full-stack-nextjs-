import { QueryClient, UseMutationOptions } from "@tanstack/react-query";

export type PromiseValue<
  PromiseType,
  Otherwise = PromiseType
> = PromiseType extends Promise<infer Value>
  ? { 0: PromiseValue<Value>; 1: Value }[PromiseType extends Promise<unknown>
      ? 0
      : 1]
  : Otherwise;

export const queryClient = new QueryClient()
  
export type MutationConfig<FetcherFnType extends (...args: any) => any> =
  UseMutationOptions<PromiseValue<ReturnType<FetcherFnType>>,
    Error,
    Parameters<FetcherFnType>[0]
  >;
