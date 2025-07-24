
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model PaymentProviders
 * 
 */
export type PaymentProviders = $Result.DefaultSelection<Prisma.$PaymentProvidersPayload>
/**
 * Model ProviderDetail
 * 
 */
export type ProviderDetail = $Result.DefaultSelection<Prisma.$ProviderDetailPayload>
/**
 * Model ProviderAuthentication
 * 
 */
export type ProviderAuthentication = $Result.DefaultSelection<Prisma.$ProviderAuthenticationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentProvidersType: {
  STRIPPER: 'STRIPPER',
  BRAINTREE: 'BRAINTREE'
};

export type PaymentProvidersType = (typeof PaymentProvidersType)[keyof typeof PaymentProvidersType]


export const AuthenticationType: {
  BASIC: 'BASIC',
  BEARER: 'BEARER',
  API_KEY: 'API_KEY',
  NONE: 'NONE'
};

export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType]

}

export type PaymentProvidersType = $Enums.PaymentProvidersType

export const PaymentProvidersType: typeof $Enums.PaymentProvidersType

export type AuthenticationType = $Enums.AuthenticationType

export const AuthenticationType: typeof $Enums.AuthenticationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentProviders`: Exposes CRUD operations for the **PaymentProviders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentProviders
    * const paymentProviders = await prisma.paymentProviders.findMany()
    * ```
    */
  get paymentProviders(): Prisma.PaymentProvidersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerDetail`: Exposes CRUD operations for the **ProviderDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderDetails
    * const providerDetails = await prisma.providerDetail.findMany()
    * ```
    */
  get providerDetail(): Prisma.ProviderDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerAuthentication`: Exposes CRUD operations for the **ProviderAuthentication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderAuthentications
    * const providerAuthentications = await prisma.providerAuthentication.findMany()
    * ```
    */
  get providerAuthentication(): Prisma.ProviderAuthenticationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tenant: 'Tenant',
    PaymentProviders: 'PaymentProviders',
    ProviderDetail: 'ProviderDetail',
    ProviderAuthentication: 'ProviderAuthentication'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "paymentProviders" | "providerDetail" | "providerAuthentication"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      PaymentProviders: {
        payload: Prisma.$PaymentProvidersPayload<ExtArgs>
        fields: Prisma.PaymentProvidersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentProvidersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProvidersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentProvidersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProvidersPayload>
          }
          findFirst: {
            args: Prisma.PaymentProvidersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProvidersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentProvidersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProvidersPayload>
          }
          findMany: {
            args: Prisma.PaymentProvidersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProvidersPayload>[]
          }
          create: {
            args: Prisma.PaymentProvidersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProvidersPayload>
          }
          createMany: {
            args: Prisma.PaymentProvidersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentProvidersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProvidersPayload>[]
          }
          delete: {
            args: Prisma.PaymentProvidersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProvidersPayload>
          }
          update: {
            args: Prisma.PaymentProvidersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProvidersPayload>
          }
          deleteMany: {
            args: Prisma.PaymentProvidersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentProvidersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentProvidersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProvidersPayload>[]
          }
          upsert: {
            args: Prisma.PaymentProvidersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProvidersPayload>
          }
          aggregate: {
            args: Prisma.PaymentProvidersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentProviders>
          }
          groupBy: {
            args: Prisma.PaymentProvidersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentProvidersGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentProvidersCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentProvidersCountAggregateOutputType> | number
          }
        }
      }
      ProviderDetail: {
        payload: Prisma.$ProviderDetailPayload<ExtArgs>
        fields: Prisma.ProviderDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDetailPayload>
          }
          findFirst: {
            args: Prisma.ProviderDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDetailPayload>
          }
          findMany: {
            args: Prisma.ProviderDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDetailPayload>[]
          }
          create: {
            args: Prisma.ProviderDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDetailPayload>
          }
          createMany: {
            args: Prisma.ProviderDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDetailPayload>[]
          }
          delete: {
            args: Prisma.ProviderDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDetailPayload>
          }
          update: {
            args: Prisma.ProviderDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDetailPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDetailPayload>[]
          }
          upsert: {
            args: Prisma.ProviderDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderDetailPayload>
          }
          aggregate: {
            args: Prisma.ProviderDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderDetail>
          }
          groupBy: {
            args: Prisma.ProviderDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderDetailCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderDetailCountAggregateOutputType> | number
          }
        }
      }
      ProviderAuthentication: {
        payload: Prisma.$ProviderAuthenticationPayload<ExtArgs>
        fields: Prisma.ProviderAuthenticationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderAuthenticationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAuthenticationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderAuthenticationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAuthenticationPayload>
          }
          findFirst: {
            args: Prisma.ProviderAuthenticationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAuthenticationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderAuthenticationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAuthenticationPayload>
          }
          findMany: {
            args: Prisma.ProviderAuthenticationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAuthenticationPayload>[]
          }
          create: {
            args: Prisma.ProviderAuthenticationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAuthenticationPayload>
          }
          createMany: {
            args: Prisma.ProviderAuthenticationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderAuthenticationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAuthenticationPayload>[]
          }
          delete: {
            args: Prisma.ProviderAuthenticationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAuthenticationPayload>
          }
          update: {
            args: Prisma.ProviderAuthenticationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAuthenticationPayload>
          }
          deleteMany: {
            args: Prisma.ProviderAuthenticationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderAuthenticationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderAuthenticationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAuthenticationPayload>[]
          }
          upsert: {
            args: Prisma.ProviderAuthenticationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderAuthenticationPayload>
          }
          aggregate: {
            args: Prisma.ProviderAuthenticationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderAuthentication>
          }
          groupBy: {
            args: Prisma.ProviderAuthenticationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderAuthenticationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderAuthenticationCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderAuthenticationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    paymentProviders?: PaymentProvidersOmit
    providerDetail?: ProviderDetailOmit
    providerAuthentication?: ProviderAuthenticationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    PaymentProviders: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PaymentProviders?: boolean | TenantCountOutputTypeCountPaymentProvidersArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPaymentProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentProvidersWhereInput
  }


  /**
   * Count Type ProviderDetailCountOutputType
   */

  export type ProviderDetailCountOutputType = {
    PaymentProviders: number
  }

  export type ProviderDetailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PaymentProviders?: boolean | ProviderDetailCountOutputTypeCountPaymentProvidersArgs
  }

  // Custom InputTypes
  /**
   * ProviderDetailCountOutputType without action
   */
  export type ProviderDetailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetailCountOutputType
     */
    select?: ProviderDetailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderDetailCountOutputType without action
   */
  export type ProviderDetailCountOutputTypeCountPaymentProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentProvidersWhereInput
  }


  /**
   * Count Type ProviderAuthenticationCountOutputType
   */

  export type ProviderAuthenticationCountOutputType = {
    ProviderDetail: number
  }

  export type ProviderAuthenticationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProviderDetail?: boolean | ProviderAuthenticationCountOutputTypeCountProviderDetailArgs
  }

  // Custom InputTypes
  /**
   * ProviderAuthenticationCountOutputType without action
   */
  export type ProviderAuthenticationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthenticationCountOutputType
     */
    select?: ProviderAuthenticationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderAuthenticationCountOutputType without action
   */
  export type ProviderAuthenticationCountOutputTypeCountProviderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    PaymentProviders?: boolean | Tenant$PaymentProvidersArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PaymentProviders?: boolean | Tenant$PaymentProvidersArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      PaymentProviders: Prisma.$PaymentProvidersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PaymentProviders<T extends Tenant$PaymentProvidersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$PaymentProvidersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.PaymentProviders
   */
  export type Tenant$PaymentProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersInclude<ExtArgs> | null
    where?: PaymentProvidersWhereInput
    orderBy?: PaymentProvidersOrderByWithRelationInput | PaymentProvidersOrderByWithRelationInput[]
    cursor?: PaymentProvidersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentProvidersScalarFieldEnum | PaymentProvidersScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model PaymentProviders
   */

  export type AggregatePaymentProviders = {
    _count: PaymentProvidersCountAggregateOutputType | null
    _avg: PaymentProvidersAvgAggregateOutputType | null
    _sum: PaymentProvidersSumAggregateOutputType | null
    _min: PaymentProvidersMinAggregateOutputType | null
    _max: PaymentProvidersMaxAggregateOutputType | null
  }

  export type PaymentProvidersAvgAggregateOutputType = {
    maxRetry: number | null
    timeout: number | null
  }

  export type PaymentProvidersSumAggregateOutputType = {
    maxRetry: number | null
    timeout: number | null
  }

  export type PaymentProvidersMinAggregateOutputType = {
    id: string | null
    maxRetry: number | null
    timeout: number | null
    name: string | null
    provider: $Enums.PaymentProvidersType | null
    detailid: string | null
    tenantId: string | null
  }

  export type PaymentProvidersMaxAggregateOutputType = {
    id: string | null
    maxRetry: number | null
    timeout: number | null
    name: string | null
    provider: $Enums.PaymentProvidersType | null
    detailid: string | null
    tenantId: string | null
  }

  export type PaymentProvidersCountAggregateOutputType = {
    id: number
    maxRetry: number
    timeout: number
    name: number
    provider: number
    detailid: number
    tenantId: number
    _all: number
  }


  export type PaymentProvidersAvgAggregateInputType = {
    maxRetry?: true
    timeout?: true
  }

  export type PaymentProvidersSumAggregateInputType = {
    maxRetry?: true
    timeout?: true
  }

  export type PaymentProvidersMinAggregateInputType = {
    id?: true
    maxRetry?: true
    timeout?: true
    name?: true
    provider?: true
    detailid?: true
    tenantId?: true
  }

  export type PaymentProvidersMaxAggregateInputType = {
    id?: true
    maxRetry?: true
    timeout?: true
    name?: true
    provider?: true
    detailid?: true
    tenantId?: true
  }

  export type PaymentProvidersCountAggregateInputType = {
    id?: true
    maxRetry?: true
    timeout?: true
    name?: true
    provider?: true
    detailid?: true
    tenantId?: true
    _all?: true
  }

  export type PaymentProvidersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentProviders to aggregate.
     */
    where?: PaymentProvidersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentProviders to fetch.
     */
    orderBy?: PaymentProvidersOrderByWithRelationInput | PaymentProvidersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentProvidersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentProviders
    **/
    _count?: true | PaymentProvidersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentProvidersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentProvidersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentProvidersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentProvidersMaxAggregateInputType
  }

  export type GetPaymentProvidersAggregateType<T extends PaymentProvidersAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentProviders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentProviders[P]>
      : GetScalarType<T[P], AggregatePaymentProviders[P]>
  }




  export type PaymentProvidersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentProvidersWhereInput
    orderBy?: PaymentProvidersOrderByWithAggregationInput | PaymentProvidersOrderByWithAggregationInput[]
    by: PaymentProvidersScalarFieldEnum[] | PaymentProvidersScalarFieldEnum
    having?: PaymentProvidersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentProvidersCountAggregateInputType | true
    _avg?: PaymentProvidersAvgAggregateInputType
    _sum?: PaymentProvidersSumAggregateInputType
    _min?: PaymentProvidersMinAggregateInputType
    _max?: PaymentProvidersMaxAggregateInputType
  }

  export type PaymentProvidersGroupByOutputType = {
    id: string
    maxRetry: number
    timeout: number
    name: string
    provider: $Enums.PaymentProvidersType
    detailid: string
    tenantId: string
    _count: PaymentProvidersCountAggregateOutputType | null
    _avg: PaymentProvidersAvgAggregateOutputType | null
    _sum: PaymentProvidersSumAggregateOutputType | null
    _min: PaymentProvidersMinAggregateOutputType | null
    _max: PaymentProvidersMaxAggregateOutputType | null
  }

  type GetPaymentProvidersGroupByPayload<T extends PaymentProvidersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentProvidersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentProvidersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentProvidersGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentProvidersGroupByOutputType[P]>
        }
      >
    >


  export type PaymentProvidersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maxRetry?: boolean
    timeout?: boolean
    name?: boolean
    provider?: boolean
    detailid?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    detail?: boolean | ProviderDetailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentProviders"]>

  export type PaymentProvidersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maxRetry?: boolean
    timeout?: boolean
    name?: boolean
    provider?: boolean
    detailid?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    detail?: boolean | ProviderDetailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentProviders"]>

  export type PaymentProvidersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maxRetry?: boolean
    timeout?: boolean
    name?: boolean
    provider?: boolean
    detailid?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    detail?: boolean | ProviderDetailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentProviders"]>

  export type PaymentProvidersSelectScalar = {
    id?: boolean
    maxRetry?: boolean
    timeout?: boolean
    name?: boolean
    provider?: boolean
    detailid?: boolean
    tenantId?: boolean
  }

  export type PaymentProvidersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "maxRetry" | "timeout" | "name" | "provider" | "detailid" | "tenantId", ExtArgs["result"]["paymentProviders"]>
  export type PaymentProvidersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    detail?: boolean | ProviderDetailDefaultArgs<ExtArgs>
  }
  export type PaymentProvidersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    detail?: boolean | ProviderDetailDefaultArgs<ExtArgs>
  }
  export type PaymentProvidersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    detail?: boolean | ProviderDetailDefaultArgs<ExtArgs>
  }

  export type $PaymentProvidersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentProviders"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      detail: Prisma.$ProviderDetailPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      maxRetry: number
      timeout: number
      name: string
      provider: $Enums.PaymentProvidersType
      detailid: string
      tenantId: string
    }, ExtArgs["result"]["paymentProviders"]>
    composites: {}
  }

  type PaymentProvidersGetPayload<S extends boolean | null | undefined | PaymentProvidersDefaultArgs> = $Result.GetResult<Prisma.$PaymentProvidersPayload, S>

  type PaymentProvidersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentProvidersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentProvidersCountAggregateInputType | true
    }

  export interface PaymentProvidersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentProviders'], meta: { name: 'PaymentProviders' } }
    /**
     * Find zero or one PaymentProviders that matches the filter.
     * @param {PaymentProvidersFindUniqueArgs} args - Arguments to find a PaymentProviders
     * @example
     * // Get one PaymentProviders
     * const paymentProviders = await prisma.paymentProviders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentProvidersFindUniqueArgs>(args: SelectSubset<T, PaymentProvidersFindUniqueArgs<ExtArgs>>): Prisma__PaymentProvidersClient<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentProviders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentProvidersFindUniqueOrThrowArgs} args - Arguments to find a PaymentProviders
     * @example
     * // Get one PaymentProviders
     * const paymentProviders = await prisma.paymentProviders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentProvidersFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentProvidersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentProvidersClient<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProvidersFindFirstArgs} args - Arguments to find a PaymentProviders
     * @example
     * // Get one PaymentProviders
     * const paymentProviders = await prisma.paymentProviders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentProvidersFindFirstArgs>(args?: SelectSubset<T, PaymentProvidersFindFirstArgs<ExtArgs>>): Prisma__PaymentProvidersClient<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentProviders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProvidersFindFirstOrThrowArgs} args - Arguments to find a PaymentProviders
     * @example
     * // Get one PaymentProviders
     * const paymentProviders = await prisma.paymentProviders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentProvidersFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentProvidersFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentProvidersClient<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProvidersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentProviders
     * const paymentProviders = await prisma.paymentProviders.findMany()
     * 
     * // Get first 10 PaymentProviders
     * const paymentProviders = await prisma.paymentProviders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentProvidersWithIdOnly = await prisma.paymentProviders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentProvidersFindManyArgs>(args?: SelectSubset<T, PaymentProvidersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentProviders.
     * @param {PaymentProvidersCreateArgs} args - Arguments to create a PaymentProviders.
     * @example
     * // Create one PaymentProviders
     * const PaymentProviders = await prisma.paymentProviders.create({
     *   data: {
     *     // ... data to create a PaymentProviders
     *   }
     * })
     * 
     */
    create<T extends PaymentProvidersCreateArgs>(args: SelectSubset<T, PaymentProvidersCreateArgs<ExtArgs>>): Prisma__PaymentProvidersClient<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentProviders.
     * @param {PaymentProvidersCreateManyArgs} args - Arguments to create many PaymentProviders.
     * @example
     * // Create many PaymentProviders
     * const paymentProviders = await prisma.paymentProviders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentProvidersCreateManyArgs>(args?: SelectSubset<T, PaymentProvidersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentProviders and returns the data saved in the database.
     * @param {PaymentProvidersCreateManyAndReturnArgs} args - Arguments to create many PaymentProviders.
     * @example
     * // Create many PaymentProviders
     * const paymentProviders = await prisma.paymentProviders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentProviders and only return the `id`
     * const paymentProvidersWithIdOnly = await prisma.paymentProviders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentProvidersCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentProvidersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentProviders.
     * @param {PaymentProvidersDeleteArgs} args - Arguments to delete one PaymentProviders.
     * @example
     * // Delete one PaymentProviders
     * const PaymentProviders = await prisma.paymentProviders.delete({
     *   where: {
     *     // ... filter to delete one PaymentProviders
     *   }
     * })
     * 
     */
    delete<T extends PaymentProvidersDeleteArgs>(args: SelectSubset<T, PaymentProvidersDeleteArgs<ExtArgs>>): Prisma__PaymentProvidersClient<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentProviders.
     * @param {PaymentProvidersUpdateArgs} args - Arguments to update one PaymentProviders.
     * @example
     * // Update one PaymentProviders
     * const paymentProviders = await prisma.paymentProviders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentProvidersUpdateArgs>(args: SelectSubset<T, PaymentProvidersUpdateArgs<ExtArgs>>): Prisma__PaymentProvidersClient<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentProviders.
     * @param {PaymentProvidersDeleteManyArgs} args - Arguments to filter PaymentProviders to delete.
     * @example
     * // Delete a few PaymentProviders
     * const { count } = await prisma.paymentProviders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentProvidersDeleteManyArgs>(args?: SelectSubset<T, PaymentProvidersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProvidersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentProviders
     * const paymentProviders = await prisma.paymentProviders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentProvidersUpdateManyArgs>(args: SelectSubset<T, PaymentProvidersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentProviders and returns the data updated in the database.
     * @param {PaymentProvidersUpdateManyAndReturnArgs} args - Arguments to update many PaymentProviders.
     * @example
     * // Update many PaymentProviders
     * const paymentProviders = await prisma.paymentProviders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentProviders and only return the `id`
     * const paymentProvidersWithIdOnly = await prisma.paymentProviders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentProvidersUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentProvidersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentProviders.
     * @param {PaymentProvidersUpsertArgs} args - Arguments to update or create a PaymentProviders.
     * @example
     * // Update or create a PaymentProviders
     * const paymentProviders = await prisma.paymentProviders.upsert({
     *   create: {
     *     // ... data to create a PaymentProviders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentProviders we want to update
     *   }
     * })
     */
    upsert<T extends PaymentProvidersUpsertArgs>(args: SelectSubset<T, PaymentProvidersUpsertArgs<ExtArgs>>): Prisma__PaymentProvidersClient<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProvidersCountArgs} args - Arguments to filter PaymentProviders to count.
     * @example
     * // Count the number of PaymentProviders
     * const count = await prisma.paymentProviders.count({
     *   where: {
     *     // ... the filter for the PaymentProviders we want to count
     *   }
     * })
    **/
    count<T extends PaymentProvidersCountArgs>(
      args?: Subset<T, PaymentProvidersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentProvidersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProvidersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentProvidersAggregateArgs>(args: Subset<T, PaymentProvidersAggregateArgs>): Prisma.PrismaPromise<GetPaymentProvidersAggregateType<T>>

    /**
     * Group by PaymentProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProvidersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentProvidersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentProvidersGroupByArgs['orderBy'] }
        : { orderBy?: PaymentProvidersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentProvidersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentProvidersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentProviders model
   */
  readonly fields: PaymentProvidersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentProviders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentProvidersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detail<T extends ProviderDetailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDetailDefaultArgs<ExtArgs>>): Prisma__ProviderDetailClient<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentProviders model
   */
  interface PaymentProvidersFieldRefs {
    readonly id: FieldRef<"PaymentProviders", 'String'>
    readonly maxRetry: FieldRef<"PaymentProviders", 'Int'>
    readonly timeout: FieldRef<"PaymentProviders", 'Int'>
    readonly name: FieldRef<"PaymentProviders", 'String'>
    readonly provider: FieldRef<"PaymentProviders", 'PaymentProvidersType'>
    readonly detailid: FieldRef<"PaymentProviders", 'String'>
    readonly tenantId: FieldRef<"PaymentProviders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentProviders findUnique
   */
  export type PaymentProvidersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProviders to fetch.
     */
    where: PaymentProvidersWhereUniqueInput
  }

  /**
   * PaymentProviders findUniqueOrThrow
   */
  export type PaymentProvidersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProviders to fetch.
     */
    where: PaymentProvidersWhereUniqueInput
  }

  /**
   * PaymentProviders findFirst
   */
  export type PaymentProvidersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProviders to fetch.
     */
    where?: PaymentProvidersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentProviders to fetch.
     */
    orderBy?: PaymentProvidersOrderByWithRelationInput | PaymentProvidersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentProviders.
     */
    cursor?: PaymentProvidersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentProviders.
     */
    distinct?: PaymentProvidersScalarFieldEnum | PaymentProvidersScalarFieldEnum[]
  }

  /**
   * PaymentProviders findFirstOrThrow
   */
  export type PaymentProvidersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProviders to fetch.
     */
    where?: PaymentProvidersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentProviders to fetch.
     */
    orderBy?: PaymentProvidersOrderByWithRelationInput | PaymentProvidersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentProviders.
     */
    cursor?: PaymentProvidersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentProviders.
     */
    distinct?: PaymentProvidersScalarFieldEnum | PaymentProvidersScalarFieldEnum[]
  }

  /**
   * PaymentProviders findMany
   */
  export type PaymentProvidersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProviders to fetch.
     */
    where?: PaymentProvidersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentProviders to fetch.
     */
    orderBy?: PaymentProvidersOrderByWithRelationInput | PaymentProvidersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentProviders.
     */
    cursor?: PaymentProvidersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentProviders.
     */
    skip?: number
    distinct?: PaymentProvidersScalarFieldEnum | PaymentProvidersScalarFieldEnum[]
  }

  /**
   * PaymentProviders create
   */
  export type PaymentProvidersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentProviders.
     */
    data: XOR<PaymentProvidersCreateInput, PaymentProvidersUncheckedCreateInput>
  }

  /**
   * PaymentProviders createMany
   */
  export type PaymentProvidersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentProviders.
     */
    data: PaymentProvidersCreateManyInput | PaymentProvidersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentProviders createManyAndReturn
   */
  export type PaymentProvidersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentProviders.
     */
    data: PaymentProvidersCreateManyInput | PaymentProvidersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentProviders update
   */
  export type PaymentProvidersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentProviders.
     */
    data: XOR<PaymentProvidersUpdateInput, PaymentProvidersUncheckedUpdateInput>
    /**
     * Choose, which PaymentProviders to update.
     */
    where: PaymentProvidersWhereUniqueInput
  }

  /**
   * PaymentProviders updateMany
   */
  export type PaymentProvidersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentProviders.
     */
    data: XOR<PaymentProvidersUpdateManyMutationInput, PaymentProvidersUncheckedUpdateManyInput>
    /**
     * Filter which PaymentProviders to update
     */
    where?: PaymentProvidersWhereInput
    /**
     * Limit how many PaymentProviders to update.
     */
    limit?: number
  }

  /**
   * PaymentProviders updateManyAndReturn
   */
  export type PaymentProvidersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * The data used to update PaymentProviders.
     */
    data: XOR<PaymentProvidersUpdateManyMutationInput, PaymentProvidersUncheckedUpdateManyInput>
    /**
     * Filter which PaymentProviders to update
     */
    where?: PaymentProvidersWhereInput
    /**
     * Limit how many PaymentProviders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentProviders upsert
   */
  export type PaymentProvidersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentProviders to update in case it exists.
     */
    where: PaymentProvidersWhereUniqueInput
    /**
     * In case the PaymentProviders found by the `where` argument doesn't exist, create a new PaymentProviders with this data.
     */
    create: XOR<PaymentProvidersCreateInput, PaymentProvidersUncheckedCreateInput>
    /**
     * In case the PaymentProviders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentProvidersUpdateInput, PaymentProvidersUncheckedUpdateInput>
  }

  /**
   * PaymentProviders delete
   */
  export type PaymentProvidersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersInclude<ExtArgs> | null
    /**
     * Filter which PaymentProviders to delete.
     */
    where: PaymentProvidersWhereUniqueInput
  }

  /**
   * PaymentProviders deleteMany
   */
  export type PaymentProvidersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentProviders to delete
     */
    where?: PaymentProvidersWhereInput
    /**
     * Limit how many PaymentProviders to delete.
     */
    limit?: number
  }

  /**
   * PaymentProviders without action
   */
  export type PaymentProvidersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersInclude<ExtArgs> | null
  }


  /**
   * Model ProviderDetail
   */

  export type AggregateProviderDetail = {
    _count: ProviderDetailCountAggregateOutputType | null
    _min: ProviderDetailMinAggregateOutputType | null
    _max: ProviderDetailMaxAggregateOutputType | null
  }

  export type ProviderDetailMinAggregateOutputType = {
    id: string | null
    url: string | null
    method: string | null
    requireAuthentication: boolean | null
    authenticationId: string | null
  }

  export type ProviderDetailMaxAggregateOutputType = {
    id: string | null
    url: string | null
    method: string | null
    requireAuthentication: boolean | null
    authenticationId: string | null
  }

  export type ProviderDetailCountAggregateOutputType = {
    id: number
    url: number
    method: number
    requireAuthentication: number
    authenticationId: number
    _all: number
  }


  export type ProviderDetailMinAggregateInputType = {
    id?: true
    url?: true
    method?: true
    requireAuthentication?: true
    authenticationId?: true
  }

  export type ProviderDetailMaxAggregateInputType = {
    id?: true
    url?: true
    method?: true
    requireAuthentication?: true
    authenticationId?: true
  }

  export type ProviderDetailCountAggregateInputType = {
    id?: true
    url?: true
    method?: true
    requireAuthentication?: true
    authenticationId?: true
    _all?: true
  }

  export type ProviderDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderDetail to aggregate.
     */
    where?: ProviderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderDetails to fetch.
     */
    orderBy?: ProviderDetailOrderByWithRelationInput | ProviderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderDetails
    **/
    _count?: true | ProviderDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderDetailMaxAggregateInputType
  }

  export type GetProviderDetailAggregateType<T extends ProviderDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderDetail[P]>
      : GetScalarType<T[P], AggregateProviderDetail[P]>
  }




  export type ProviderDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderDetailWhereInput
    orderBy?: ProviderDetailOrderByWithAggregationInput | ProviderDetailOrderByWithAggregationInput[]
    by: ProviderDetailScalarFieldEnum[] | ProviderDetailScalarFieldEnum
    having?: ProviderDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderDetailCountAggregateInputType | true
    _min?: ProviderDetailMinAggregateInputType
    _max?: ProviderDetailMaxAggregateInputType
  }

  export type ProviderDetailGroupByOutputType = {
    id: string
    url: string
    method: string
    requireAuthentication: boolean
    authenticationId: string
    _count: ProviderDetailCountAggregateOutputType | null
    _min: ProviderDetailMinAggregateOutputType | null
    _max: ProviderDetailMaxAggregateOutputType | null
  }

  type GetProviderDetailGroupByPayload<T extends ProviderDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderDetailGroupByOutputType[P]>
        }
      >
    >


  export type ProviderDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    method?: boolean
    requireAuthentication?: boolean
    authenticationId?: boolean
    authentication?: boolean | ProviderAuthenticationDefaultArgs<ExtArgs>
    PaymentProviders?: boolean | ProviderDetail$PaymentProvidersArgs<ExtArgs>
    _count?: boolean | ProviderDetailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerDetail"]>

  export type ProviderDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    method?: boolean
    requireAuthentication?: boolean
    authenticationId?: boolean
    authentication?: boolean | ProviderAuthenticationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerDetail"]>

  export type ProviderDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    method?: boolean
    requireAuthentication?: boolean
    authenticationId?: boolean
    authentication?: boolean | ProviderAuthenticationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerDetail"]>

  export type ProviderDetailSelectScalar = {
    id?: boolean
    url?: boolean
    method?: boolean
    requireAuthentication?: boolean
    authenticationId?: boolean
  }

  export type ProviderDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "method" | "requireAuthentication" | "authenticationId", ExtArgs["result"]["providerDetail"]>
  export type ProviderDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authentication?: boolean | ProviderAuthenticationDefaultArgs<ExtArgs>
    PaymentProviders?: boolean | ProviderDetail$PaymentProvidersArgs<ExtArgs>
    _count?: boolean | ProviderDetailCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authentication?: boolean | ProviderAuthenticationDefaultArgs<ExtArgs>
  }
  export type ProviderDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authentication?: boolean | ProviderAuthenticationDefaultArgs<ExtArgs>
  }

  export type $ProviderDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderDetail"
    objects: {
      authentication: Prisma.$ProviderAuthenticationPayload<ExtArgs>
      PaymentProviders: Prisma.$PaymentProvidersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      method: string
      requireAuthentication: boolean
      authenticationId: string
    }, ExtArgs["result"]["providerDetail"]>
    composites: {}
  }

  type ProviderDetailGetPayload<S extends boolean | null | undefined | ProviderDetailDefaultArgs> = $Result.GetResult<Prisma.$ProviderDetailPayload, S>

  type ProviderDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderDetailCountAggregateInputType | true
    }

  export interface ProviderDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderDetail'], meta: { name: 'ProviderDetail' } }
    /**
     * Find zero or one ProviderDetail that matches the filter.
     * @param {ProviderDetailFindUniqueArgs} args - Arguments to find a ProviderDetail
     * @example
     * // Get one ProviderDetail
     * const providerDetail = await prisma.providerDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderDetailFindUniqueArgs>(args: SelectSubset<T, ProviderDetailFindUniqueArgs<ExtArgs>>): Prisma__ProviderDetailClient<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderDetailFindUniqueOrThrowArgs} args - Arguments to find a ProviderDetail
     * @example
     * // Get one ProviderDetail
     * const providerDetail = await prisma.providerDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderDetailClient<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDetailFindFirstArgs} args - Arguments to find a ProviderDetail
     * @example
     * // Get one ProviderDetail
     * const providerDetail = await prisma.providerDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderDetailFindFirstArgs>(args?: SelectSubset<T, ProviderDetailFindFirstArgs<ExtArgs>>): Prisma__ProviderDetailClient<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDetailFindFirstOrThrowArgs} args - Arguments to find a ProviderDetail
     * @example
     * // Get one ProviderDetail
     * const providerDetail = await prisma.providerDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderDetailClient<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderDetails
     * const providerDetails = await prisma.providerDetail.findMany()
     * 
     * // Get first 10 ProviderDetails
     * const providerDetails = await prisma.providerDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerDetailWithIdOnly = await prisma.providerDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderDetailFindManyArgs>(args?: SelectSubset<T, ProviderDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderDetail.
     * @param {ProviderDetailCreateArgs} args - Arguments to create a ProviderDetail.
     * @example
     * // Create one ProviderDetail
     * const ProviderDetail = await prisma.providerDetail.create({
     *   data: {
     *     // ... data to create a ProviderDetail
     *   }
     * })
     * 
     */
    create<T extends ProviderDetailCreateArgs>(args: SelectSubset<T, ProviderDetailCreateArgs<ExtArgs>>): Prisma__ProviderDetailClient<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderDetails.
     * @param {ProviderDetailCreateManyArgs} args - Arguments to create many ProviderDetails.
     * @example
     * // Create many ProviderDetails
     * const providerDetail = await prisma.providerDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderDetailCreateManyArgs>(args?: SelectSubset<T, ProviderDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderDetails and returns the data saved in the database.
     * @param {ProviderDetailCreateManyAndReturnArgs} args - Arguments to create many ProviderDetails.
     * @example
     * // Create many ProviderDetails
     * const providerDetail = await prisma.providerDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderDetails and only return the `id`
     * const providerDetailWithIdOnly = await prisma.providerDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderDetail.
     * @param {ProviderDetailDeleteArgs} args - Arguments to delete one ProviderDetail.
     * @example
     * // Delete one ProviderDetail
     * const ProviderDetail = await prisma.providerDetail.delete({
     *   where: {
     *     // ... filter to delete one ProviderDetail
     *   }
     * })
     * 
     */
    delete<T extends ProviderDetailDeleteArgs>(args: SelectSubset<T, ProviderDetailDeleteArgs<ExtArgs>>): Prisma__ProviderDetailClient<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderDetail.
     * @param {ProviderDetailUpdateArgs} args - Arguments to update one ProviderDetail.
     * @example
     * // Update one ProviderDetail
     * const providerDetail = await prisma.providerDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderDetailUpdateArgs>(args: SelectSubset<T, ProviderDetailUpdateArgs<ExtArgs>>): Prisma__ProviderDetailClient<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderDetails.
     * @param {ProviderDetailDeleteManyArgs} args - Arguments to filter ProviderDetails to delete.
     * @example
     * // Delete a few ProviderDetails
     * const { count } = await prisma.providerDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDetailDeleteManyArgs>(args?: SelectSubset<T, ProviderDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderDetails
     * const providerDetail = await prisma.providerDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderDetailUpdateManyArgs>(args: SelectSubset<T, ProviderDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderDetails and returns the data updated in the database.
     * @param {ProviderDetailUpdateManyAndReturnArgs} args - Arguments to update many ProviderDetails.
     * @example
     * // Update many ProviderDetails
     * const providerDetail = await prisma.providerDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderDetails and only return the `id`
     * const providerDetailWithIdOnly = await prisma.providerDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderDetail.
     * @param {ProviderDetailUpsertArgs} args - Arguments to update or create a ProviderDetail.
     * @example
     * // Update or create a ProviderDetail
     * const providerDetail = await prisma.providerDetail.upsert({
     *   create: {
     *     // ... data to create a ProviderDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderDetail we want to update
     *   }
     * })
     */
    upsert<T extends ProviderDetailUpsertArgs>(args: SelectSubset<T, ProviderDetailUpsertArgs<ExtArgs>>): Prisma__ProviderDetailClient<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDetailCountArgs} args - Arguments to filter ProviderDetails to count.
     * @example
     * // Count the number of ProviderDetails
     * const count = await prisma.providerDetail.count({
     *   where: {
     *     // ... the filter for the ProviderDetails we want to count
     *   }
     * })
    **/
    count<T extends ProviderDetailCountArgs>(
      args?: Subset<T, ProviderDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderDetailAggregateArgs>(args: Subset<T, ProviderDetailAggregateArgs>): Prisma.PrismaPromise<GetProviderDetailAggregateType<T>>

    /**
     * Group by ProviderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderDetailGroupByArgs['orderBy'] }
        : { orderBy?: ProviderDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderDetail model
   */
  readonly fields: ProviderDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authentication<T extends ProviderAuthenticationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderAuthenticationDefaultArgs<ExtArgs>>): Prisma__ProviderAuthenticationClient<$Result.GetResult<Prisma.$ProviderAuthenticationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PaymentProviders<T extends ProviderDetail$PaymentProvidersArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDetail$PaymentProvidersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentProvidersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderDetail model
   */
  interface ProviderDetailFieldRefs {
    readonly id: FieldRef<"ProviderDetail", 'String'>
    readonly url: FieldRef<"ProviderDetail", 'String'>
    readonly method: FieldRef<"ProviderDetail", 'String'>
    readonly requireAuthentication: FieldRef<"ProviderDetail", 'Boolean'>
    readonly authenticationId: FieldRef<"ProviderDetail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProviderDetail findUnique
   */
  export type ProviderDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProviderDetail to fetch.
     */
    where: ProviderDetailWhereUniqueInput
  }

  /**
   * ProviderDetail findUniqueOrThrow
   */
  export type ProviderDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProviderDetail to fetch.
     */
    where: ProviderDetailWhereUniqueInput
  }

  /**
   * ProviderDetail findFirst
   */
  export type ProviderDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProviderDetail to fetch.
     */
    where?: ProviderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderDetails to fetch.
     */
    orderBy?: ProviderDetailOrderByWithRelationInput | ProviderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderDetails.
     */
    cursor?: ProviderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderDetails.
     */
    distinct?: ProviderDetailScalarFieldEnum | ProviderDetailScalarFieldEnum[]
  }

  /**
   * ProviderDetail findFirstOrThrow
   */
  export type ProviderDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProviderDetail to fetch.
     */
    where?: ProviderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderDetails to fetch.
     */
    orderBy?: ProviderDetailOrderByWithRelationInput | ProviderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderDetails.
     */
    cursor?: ProviderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderDetails.
     */
    distinct?: ProviderDetailScalarFieldEnum | ProviderDetailScalarFieldEnum[]
  }

  /**
   * ProviderDetail findMany
   */
  export type ProviderDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailInclude<ExtArgs> | null
    /**
     * Filter, which ProviderDetails to fetch.
     */
    where?: ProviderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderDetails to fetch.
     */
    orderBy?: ProviderDetailOrderByWithRelationInput | ProviderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderDetails.
     */
    cursor?: ProviderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderDetails.
     */
    skip?: number
    distinct?: ProviderDetailScalarFieldEnum | ProviderDetailScalarFieldEnum[]
  }

  /**
   * ProviderDetail create
   */
  export type ProviderDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderDetail.
     */
    data: XOR<ProviderDetailCreateInput, ProviderDetailUncheckedCreateInput>
  }

  /**
   * ProviderDetail createMany
   */
  export type ProviderDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderDetails.
     */
    data: ProviderDetailCreateManyInput | ProviderDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderDetail createManyAndReturn
   */
  export type ProviderDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderDetails.
     */
    data: ProviderDetailCreateManyInput | ProviderDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderDetail update
   */
  export type ProviderDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderDetail.
     */
    data: XOR<ProviderDetailUpdateInput, ProviderDetailUncheckedUpdateInput>
    /**
     * Choose, which ProviderDetail to update.
     */
    where: ProviderDetailWhereUniqueInput
  }

  /**
   * ProviderDetail updateMany
   */
  export type ProviderDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderDetails.
     */
    data: XOR<ProviderDetailUpdateManyMutationInput, ProviderDetailUncheckedUpdateManyInput>
    /**
     * Filter which ProviderDetails to update
     */
    where?: ProviderDetailWhereInput
    /**
     * Limit how many ProviderDetails to update.
     */
    limit?: number
  }

  /**
   * ProviderDetail updateManyAndReturn
   */
  export type ProviderDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * The data used to update ProviderDetails.
     */
    data: XOR<ProviderDetailUpdateManyMutationInput, ProviderDetailUncheckedUpdateManyInput>
    /**
     * Filter which ProviderDetails to update
     */
    where?: ProviderDetailWhereInput
    /**
     * Limit how many ProviderDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderDetail upsert
   */
  export type ProviderDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderDetail to update in case it exists.
     */
    where: ProviderDetailWhereUniqueInput
    /**
     * In case the ProviderDetail found by the `where` argument doesn't exist, create a new ProviderDetail with this data.
     */
    create: XOR<ProviderDetailCreateInput, ProviderDetailUncheckedCreateInput>
    /**
     * In case the ProviderDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderDetailUpdateInput, ProviderDetailUncheckedUpdateInput>
  }

  /**
   * ProviderDetail delete
   */
  export type ProviderDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailInclude<ExtArgs> | null
    /**
     * Filter which ProviderDetail to delete.
     */
    where: ProviderDetailWhereUniqueInput
  }

  /**
   * ProviderDetail deleteMany
   */
  export type ProviderDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderDetails to delete
     */
    where?: ProviderDetailWhereInput
    /**
     * Limit how many ProviderDetails to delete.
     */
    limit?: number
  }

  /**
   * ProviderDetail.PaymentProviders
   */
  export type ProviderDetail$PaymentProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProviders
     */
    select?: PaymentProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProviders
     */
    omit?: PaymentProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProvidersInclude<ExtArgs> | null
    where?: PaymentProvidersWhereInput
    orderBy?: PaymentProvidersOrderByWithRelationInput | PaymentProvidersOrderByWithRelationInput[]
    cursor?: PaymentProvidersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentProvidersScalarFieldEnum | PaymentProvidersScalarFieldEnum[]
  }

  /**
   * ProviderDetail without action
   */
  export type ProviderDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailInclude<ExtArgs> | null
  }


  /**
   * Model ProviderAuthentication
   */

  export type AggregateProviderAuthentication = {
    _count: ProviderAuthenticationCountAggregateOutputType | null
    _min: ProviderAuthenticationMinAggregateOutputType | null
    _max: ProviderAuthenticationMaxAggregateOutputType | null
  }

  export type ProviderAuthenticationMinAggregateOutputType = {
    id: string | null
    url: string | null
    type: $Enums.AuthenticationType | null
    username: string | null
    password: string | null
  }

  export type ProviderAuthenticationMaxAggregateOutputType = {
    id: string | null
    url: string | null
    type: $Enums.AuthenticationType | null
    username: string | null
    password: string | null
  }

  export type ProviderAuthenticationCountAggregateOutputType = {
    id: number
    url: number
    type: number
    username: number
    password: number
    _all: number
  }


  export type ProviderAuthenticationMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    username?: true
    password?: true
  }

  export type ProviderAuthenticationMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    username?: true
    password?: true
  }

  export type ProviderAuthenticationCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    username?: true
    password?: true
    _all?: true
  }

  export type ProviderAuthenticationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderAuthentication to aggregate.
     */
    where?: ProviderAuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderAuthentications to fetch.
     */
    orderBy?: ProviderAuthenticationOrderByWithRelationInput | ProviderAuthenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderAuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderAuthentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderAuthentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderAuthentications
    **/
    _count?: true | ProviderAuthenticationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderAuthenticationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderAuthenticationMaxAggregateInputType
  }

  export type GetProviderAuthenticationAggregateType<T extends ProviderAuthenticationAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderAuthentication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderAuthentication[P]>
      : GetScalarType<T[P], AggregateProviderAuthentication[P]>
  }




  export type ProviderAuthenticationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderAuthenticationWhereInput
    orderBy?: ProviderAuthenticationOrderByWithAggregationInput | ProviderAuthenticationOrderByWithAggregationInput[]
    by: ProviderAuthenticationScalarFieldEnum[] | ProviderAuthenticationScalarFieldEnum
    having?: ProviderAuthenticationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderAuthenticationCountAggregateInputType | true
    _min?: ProviderAuthenticationMinAggregateInputType
    _max?: ProviderAuthenticationMaxAggregateInputType
  }

  export type ProviderAuthenticationGroupByOutputType = {
    id: string
    url: string
    type: $Enums.AuthenticationType
    username: string | null
    password: string | null
    _count: ProviderAuthenticationCountAggregateOutputType | null
    _min: ProviderAuthenticationMinAggregateOutputType | null
    _max: ProviderAuthenticationMaxAggregateOutputType | null
  }

  type GetProviderAuthenticationGroupByPayload<T extends ProviderAuthenticationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderAuthenticationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderAuthenticationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderAuthenticationGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderAuthenticationGroupByOutputType[P]>
        }
      >
    >


  export type ProviderAuthenticationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    username?: boolean
    password?: boolean
    ProviderDetail?: boolean | ProviderAuthentication$ProviderDetailArgs<ExtArgs>
    _count?: boolean | ProviderAuthenticationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerAuthentication"]>

  export type ProviderAuthenticationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["providerAuthentication"]>

  export type ProviderAuthenticationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    type?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["providerAuthentication"]>

  export type ProviderAuthenticationSelectScalar = {
    id?: boolean
    url?: boolean
    type?: boolean
    username?: boolean
    password?: boolean
  }

  export type ProviderAuthenticationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "type" | "username" | "password", ExtArgs["result"]["providerAuthentication"]>
  export type ProviderAuthenticationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProviderDetail?: boolean | ProviderAuthentication$ProviderDetailArgs<ExtArgs>
    _count?: boolean | ProviderAuthenticationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderAuthenticationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProviderAuthenticationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProviderAuthenticationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderAuthentication"
    objects: {
      ProviderDetail: Prisma.$ProviderDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      type: $Enums.AuthenticationType
      username: string | null
      password: string | null
    }, ExtArgs["result"]["providerAuthentication"]>
    composites: {}
  }

  type ProviderAuthenticationGetPayload<S extends boolean | null | undefined | ProviderAuthenticationDefaultArgs> = $Result.GetResult<Prisma.$ProviderAuthenticationPayload, S>

  type ProviderAuthenticationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderAuthenticationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderAuthenticationCountAggregateInputType | true
    }

  export interface ProviderAuthenticationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderAuthentication'], meta: { name: 'ProviderAuthentication' } }
    /**
     * Find zero or one ProviderAuthentication that matches the filter.
     * @param {ProviderAuthenticationFindUniqueArgs} args - Arguments to find a ProviderAuthentication
     * @example
     * // Get one ProviderAuthentication
     * const providerAuthentication = await prisma.providerAuthentication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderAuthenticationFindUniqueArgs>(args: SelectSubset<T, ProviderAuthenticationFindUniqueArgs<ExtArgs>>): Prisma__ProviderAuthenticationClient<$Result.GetResult<Prisma.$ProviderAuthenticationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderAuthentication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderAuthenticationFindUniqueOrThrowArgs} args - Arguments to find a ProviderAuthentication
     * @example
     * // Get one ProviderAuthentication
     * const providerAuthentication = await prisma.providerAuthentication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderAuthenticationFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderAuthenticationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderAuthenticationClient<$Result.GetResult<Prisma.$ProviderAuthenticationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderAuthentication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAuthenticationFindFirstArgs} args - Arguments to find a ProviderAuthentication
     * @example
     * // Get one ProviderAuthentication
     * const providerAuthentication = await prisma.providerAuthentication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderAuthenticationFindFirstArgs>(args?: SelectSubset<T, ProviderAuthenticationFindFirstArgs<ExtArgs>>): Prisma__ProviderAuthenticationClient<$Result.GetResult<Prisma.$ProviderAuthenticationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderAuthentication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAuthenticationFindFirstOrThrowArgs} args - Arguments to find a ProviderAuthentication
     * @example
     * // Get one ProviderAuthentication
     * const providerAuthentication = await prisma.providerAuthentication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderAuthenticationFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderAuthenticationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderAuthenticationClient<$Result.GetResult<Prisma.$ProviderAuthenticationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderAuthentications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAuthenticationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderAuthentications
     * const providerAuthentications = await prisma.providerAuthentication.findMany()
     * 
     * // Get first 10 ProviderAuthentications
     * const providerAuthentications = await prisma.providerAuthentication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerAuthenticationWithIdOnly = await prisma.providerAuthentication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderAuthenticationFindManyArgs>(args?: SelectSubset<T, ProviderAuthenticationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderAuthenticationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderAuthentication.
     * @param {ProviderAuthenticationCreateArgs} args - Arguments to create a ProviderAuthentication.
     * @example
     * // Create one ProviderAuthentication
     * const ProviderAuthentication = await prisma.providerAuthentication.create({
     *   data: {
     *     // ... data to create a ProviderAuthentication
     *   }
     * })
     * 
     */
    create<T extends ProviderAuthenticationCreateArgs>(args: SelectSubset<T, ProviderAuthenticationCreateArgs<ExtArgs>>): Prisma__ProviderAuthenticationClient<$Result.GetResult<Prisma.$ProviderAuthenticationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderAuthentications.
     * @param {ProviderAuthenticationCreateManyArgs} args - Arguments to create many ProviderAuthentications.
     * @example
     * // Create many ProviderAuthentications
     * const providerAuthentication = await prisma.providerAuthentication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderAuthenticationCreateManyArgs>(args?: SelectSubset<T, ProviderAuthenticationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderAuthentications and returns the data saved in the database.
     * @param {ProviderAuthenticationCreateManyAndReturnArgs} args - Arguments to create many ProviderAuthentications.
     * @example
     * // Create many ProviderAuthentications
     * const providerAuthentication = await prisma.providerAuthentication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderAuthentications and only return the `id`
     * const providerAuthenticationWithIdOnly = await prisma.providerAuthentication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderAuthenticationCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderAuthenticationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderAuthenticationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderAuthentication.
     * @param {ProviderAuthenticationDeleteArgs} args - Arguments to delete one ProviderAuthentication.
     * @example
     * // Delete one ProviderAuthentication
     * const ProviderAuthentication = await prisma.providerAuthentication.delete({
     *   where: {
     *     // ... filter to delete one ProviderAuthentication
     *   }
     * })
     * 
     */
    delete<T extends ProviderAuthenticationDeleteArgs>(args: SelectSubset<T, ProviderAuthenticationDeleteArgs<ExtArgs>>): Prisma__ProviderAuthenticationClient<$Result.GetResult<Prisma.$ProviderAuthenticationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderAuthentication.
     * @param {ProviderAuthenticationUpdateArgs} args - Arguments to update one ProviderAuthentication.
     * @example
     * // Update one ProviderAuthentication
     * const providerAuthentication = await prisma.providerAuthentication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderAuthenticationUpdateArgs>(args: SelectSubset<T, ProviderAuthenticationUpdateArgs<ExtArgs>>): Prisma__ProviderAuthenticationClient<$Result.GetResult<Prisma.$ProviderAuthenticationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderAuthentications.
     * @param {ProviderAuthenticationDeleteManyArgs} args - Arguments to filter ProviderAuthentications to delete.
     * @example
     * // Delete a few ProviderAuthentications
     * const { count } = await prisma.providerAuthentication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderAuthenticationDeleteManyArgs>(args?: SelectSubset<T, ProviderAuthenticationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderAuthentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAuthenticationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderAuthentications
     * const providerAuthentication = await prisma.providerAuthentication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderAuthenticationUpdateManyArgs>(args: SelectSubset<T, ProviderAuthenticationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderAuthentications and returns the data updated in the database.
     * @param {ProviderAuthenticationUpdateManyAndReturnArgs} args - Arguments to update many ProviderAuthentications.
     * @example
     * // Update many ProviderAuthentications
     * const providerAuthentication = await prisma.providerAuthentication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderAuthentications and only return the `id`
     * const providerAuthenticationWithIdOnly = await prisma.providerAuthentication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderAuthenticationUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderAuthenticationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderAuthenticationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderAuthentication.
     * @param {ProviderAuthenticationUpsertArgs} args - Arguments to update or create a ProviderAuthentication.
     * @example
     * // Update or create a ProviderAuthentication
     * const providerAuthentication = await prisma.providerAuthentication.upsert({
     *   create: {
     *     // ... data to create a ProviderAuthentication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderAuthentication we want to update
     *   }
     * })
     */
    upsert<T extends ProviderAuthenticationUpsertArgs>(args: SelectSubset<T, ProviderAuthenticationUpsertArgs<ExtArgs>>): Prisma__ProviderAuthenticationClient<$Result.GetResult<Prisma.$ProviderAuthenticationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderAuthentications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAuthenticationCountArgs} args - Arguments to filter ProviderAuthentications to count.
     * @example
     * // Count the number of ProviderAuthentications
     * const count = await prisma.providerAuthentication.count({
     *   where: {
     *     // ... the filter for the ProviderAuthentications we want to count
     *   }
     * })
    **/
    count<T extends ProviderAuthenticationCountArgs>(
      args?: Subset<T, ProviderAuthenticationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderAuthenticationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderAuthentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAuthenticationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderAuthenticationAggregateArgs>(args: Subset<T, ProviderAuthenticationAggregateArgs>): Prisma.PrismaPromise<GetProviderAuthenticationAggregateType<T>>

    /**
     * Group by ProviderAuthentication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAuthenticationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderAuthenticationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderAuthenticationGroupByArgs['orderBy'] }
        : { orderBy?: ProviderAuthenticationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderAuthenticationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderAuthenticationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderAuthentication model
   */
  readonly fields: ProviderAuthenticationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderAuthentication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderAuthenticationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProviderDetail<T extends ProviderAuthentication$ProviderDetailArgs<ExtArgs> = {}>(args?: Subset<T, ProviderAuthentication$ProviderDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderAuthentication model
   */
  interface ProviderAuthenticationFieldRefs {
    readonly id: FieldRef<"ProviderAuthentication", 'String'>
    readonly url: FieldRef<"ProviderAuthentication", 'String'>
    readonly type: FieldRef<"ProviderAuthentication", 'AuthenticationType'>
    readonly username: FieldRef<"ProviderAuthentication", 'String'>
    readonly password: FieldRef<"ProviderAuthentication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProviderAuthentication findUnique
   */
  export type ProviderAuthenticationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthentication
     */
    select?: ProviderAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAuthentication
     */
    omit?: ProviderAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAuthentication to fetch.
     */
    where: ProviderAuthenticationWhereUniqueInput
  }

  /**
   * ProviderAuthentication findUniqueOrThrow
   */
  export type ProviderAuthenticationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthentication
     */
    select?: ProviderAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAuthentication
     */
    omit?: ProviderAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAuthentication to fetch.
     */
    where: ProviderAuthenticationWhereUniqueInput
  }

  /**
   * ProviderAuthentication findFirst
   */
  export type ProviderAuthenticationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthentication
     */
    select?: ProviderAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAuthentication
     */
    omit?: ProviderAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAuthentication to fetch.
     */
    where?: ProviderAuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderAuthentications to fetch.
     */
    orderBy?: ProviderAuthenticationOrderByWithRelationInput | ProviderAuthenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderAuthentications.
     */
    cursor?: ProviderAuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderAuthentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderAuthentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderAuthentications.
     */
    distinct?: ProviderAuthenticationScalarFieldEnum | ProviderAuthenticationScalarFieldEnum[]
  }

  /**
   * ProviderAuthentication findFirstOrThrow
   */
  export type ProviderAuthenticationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthentication
     */
    select?: ProviderAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAuthentication
     */
    omit?: ProviderAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAuthentication to fetch.
     */
    where?: ProviderAuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderAuthentications to fetch.
     */
    orderBy?: ProviderAuthenticationOrderByWithRelationInput | ProviderAuthenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderAuthentications.
     */
    cursor?: ProviderAuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderAuthentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderAuthentications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderAuthentications.
     */
    distinct?: ProviderAuthenticationScalarFieldEnum | ProviderAuthenticationScalarFieldEnum[]
  }

  /**
   * ProviderAuthentication findMany
   */
  export type ProviderAuthenticationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthentication
     */
    select?: ProviderAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAuthentication
     */
    omit?: ProviderAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAuthenticationInclude<ExtArgs> | null
    /**
     * Filter, which ProviderAuthentications to fetch.
     */
    where?: ProviderAuthenticationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderAuthentications to fetch.
     */
    orderBy?: ProviderAuthenticationOrderByWithRelationInput | ProviderAuthenticationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderAuthentications.
     */
    cursor?: ProviderAuthenticationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderAuthentications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderAuthentications.
     */
    skip?: number
    distinct?: ProviderAuthenticationScalarFieldEnum | ProviderAuthenticationScalarFieldEnum[]
  }

  /**
   * ProviderAuthentication create
   */
  export type ProviderAuthenticationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthentication
     */
    select?: ProviderAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAuthentication
     */
    omit?: ProviderAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAuthenticationInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderAuthentication.
     */
    data: XOR<ProviderAuthenticationCreateInput, ProviderAuthenticationUncheckedCreateInput>
  }

  /**
   * ProviderAuthentication createMany
   */
  export type ProviderAuthenticationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderAuthentications.
     */
    data: ProviderAuthenticationCreateManyInput | ProviderAuthenticationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderAuthentication createManyAndReturn
   */
  export type ProviderAuthenticationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthentication
     */
    select?: ProviderAuthenticationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAuthentication
     */
    omit?: ProviderAuthenticationOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderAuthentications.
     */
    data: ProviderAuthenticationCreateManyInput | ProviderAuthenticationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderAuthentication update
   */
  export type ProviderAuthenticationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthentication
     */
    select?: ProviderAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAuthentication
     */
    omit?: ProviderAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAuthenticationInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderAuthentication.
     */
    data: XOR<ProviderAuthenticationUpdateInput, ProviderAuthenticationUncheckedUpdateInput>
    /**
     * Choose, which ProviderAuthentication to update.
     */
    where: ProviderAuthenticationWhereUniqueInput
  }

  /**
   * ProviderAuthentication updateMany
   */
  export type ProviderAuthenticationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderAuthentications.
     */
    data: XOR<ProviderAuthenticationUpdateManyMutationInput, ProviderAuthenticationUncheckedUpdateManyInput>
    /**
     * Filter which ProviderAuthentications to update
     */
    where?: ProviderAuthenticationWhereInput
    /**
     * Limit how many ProviderAuthentications to update.
     */
    limit?: number
  }

  /**
   * ProviderAuthentication updateManyAndReturn
   */
  export type ProviderAuthenticationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthentication
     */
    select?: ProviderAuthenticationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAuthentication
     */
    omit?: ProviderAuthenticationOmit<ExtArgs> | null
    /**
     * The data used to update ProviderAuthentications.
     */
    data: XOR<ProviderAuthenticationUpdateManyMutationInput, ProviderAuthenticationUncheckedUpdateManyInput>
    /**
     * Filter which ProviderAuthentications to update
     */
    where?: ProviderAuthenticationWhereInput
    /**
     * Limit how many ProviderAuthentications to update.
     */
    limit?: number
  }

  /**
   * ProviderAuthentication upsert
   */
  export type ProviderAuthenticationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthentication
     */
    select?: ProviderAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAuthentication
     */
    omit?: ProviderAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAuthenticationInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderAuthentication to update in case it exists.
     */
    where: ProviderAuthenticationWhereUniqueInput
    /**
     * In case the ProviderAuthentication found by the `where` argument doesn't exist, create a new ProviderAuthentication with this data.
     */
    create: XOR<ProviderAuthenticationCreateInput, ProviderAuthenticationUncheckedCreateInput>
    /**
     * In case the ProviderAuthentication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderAuthenticationUpdateInput, ProviderAuthenticationUncheckedUpdateInput>
  }

  /**
   * ProviderAuthentication delete
   */
  export type ProviderAuthenticationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthentication
     */
    select?: ProviderAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAuthentication
     */
    omit?: ProviderAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAuthenticationInclude<ExtArgs> | null
    /**
     * Filter which ProviderAuthentication to delete.
     */
    where: ProviderAuthenticationWhereUniqueInput
  }

  /**
   * ProviderAuthentication deleteMany
   */
  export type ProviderAuthenticationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderAuthentications to delete
     */
    where?: ProviderAuthenticationWhereInput
    /**
     * Limit how many ProviderAuthentications to delete.
     */
    limit?: number
  }

  /**
   * ProviderAuthentication.ProviderDetail
   */
  export type ProviderAuthentication$ProviderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderDetail
     */
    select?: ProviderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderDetail
     */
    omit?: ProviderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderDetailInclude<ExtArgs> | null
    where?: ProviderDetailWhereInput
    orderBy?: ProviderDetailOrderByWithRelationInput | ProviderDetailOrderByWithRelationInput[]
    cursor?: ProviderDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderDetailScalarFieldEnum | ProviderDetailScalarFieldEnum[]
  }

  /**
   * ProviderAuthentication without action
   */
  export type ProviderAuthenticationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderAuthentication
     */
    select?: ProviderAuthenticationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderAuthentication
     */
    omit?: ProviderAuthenticationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderAuthenticationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const PaymentProvidersScalarFieldEnum: {
    id: 'id',
    maxRetry: 'maxRetry',
    timeout: 'timeout',
    name: 'name',
    provider: 'provider',
    detailid: 'detailid',
    tenantId: 'tenantId'
  };

  export type PaymentProvidersScalarFieldEnum = (typeof PaymentProvidersScalarFieldEnum)[keyof typeof PaymentProvidersScalarFieldEnum]


  export const ProviderDetailScalarFieldEnum: {
    id: 'id',
    url: 'url',
    method: 'method',
    requireAuthentication: 'requireAuthentication',
    authenticationId: 'authenticationId'
  };

  export type ProviderDetailScalarFieldEnum = (typeof ProviderDetailScalarFieldEnum)[keyof typeof ProviderDetailScalarFieldEnum]


  export const ProviderAuthenticationScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    username: 'username',
    password: 'password'
  };

  export type ProviderAuthenticationScalarFieldEnum = (typeof ProviderAuthenticationScalarFieldEnum)[keyof typeof ProviderAuthenticationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PaymentProvidersType'
   */
  export type EnumPaymentProvidersTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvidersType'>
    


  /**
   * Reference to a field of type 'PaymentProvidersType[]'
   */
  export type ListEnumPaymentProvidersTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvidersType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuthenticationType'
   */
  export type EnumAuthenticationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthenticationType'>
    


  /**
   * Reference to a field of type 'AuthenticationType[]'
   */
  export type ListEnumAuthenticationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthenticationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    PaymentProviders?: PaymentProvidersListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    PaymentProviders?: PaymentProvidersOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    PaymentProviders?: PaymentProvidersListRelationFilter
  }, "id" | "name">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
  }

  export type PaymentProvidersWhereInput = {
    AND?: PaymentProvidersWhereInput | PaymentProvidersWhereInput[]
    OR?: PaymentProvidersWhereInput[]
    NOT?: PaymentProvidersWhereInput | PaymentProvidersWhereInput[]
    id?: StringFilter<"PaymentProviders"> | string
    maxRetry?: IntFilter<"PaymentProviders"> | number
    timeout?: IntFilter<"PaymentProviders"> | number
    name?: StringFilter<"PaymentProviders"> | string
    provider?: EnumPaymentProvidersTypeFilter<"PaymentProviders"> | $Enums.PaymentProvidersType
    detailid?: StringFilter<"PaymentProviders"> | string
    tenantId?: StringFilter<"PaymentProviders"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    detail?: XOR<ProviderDetailScalarRelationFilter, ProviderDetailWhereInput>
  }

  export type PaymentProvidersOrderByWithRelationInput = {
    id?: SortOrder
    maxRetry?: SortOrder
    timeout?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    detailid?: SortOrder
    tenantId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    detail?: ProviderDetailOrderByWithRelationInput
  }

  export type PaymentProvidersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PaymentProvidersWhereInput | PaymentProvidersWhereInput[]
    OR?: PaymentProvidersWhereInput[]
    NOT?: PaymentProvidersWhereInput | PaymentProvidersWhereInput[]
    maxRetry?: IntFilter<"PaymentProviders"> | number
    timeout?: IntFilter<"PaymentProviders"> | number
    provider?: EnumPaymentProvidersTypeFilter<"PaymentProviders"> | $Enums.PaymentProvidersType
    detailid?: StringFilter<"PaymentProviders"> | string
    tenantId?: StringFilter<"PaymentProviders"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    detail?: XOR<ProviderDetailScalarRelationFilter, ProviderDetailWhereInput>
  }, "id" | "name">

  export type PaymentProvidersOrderByWithAggregationInput = {
    id?: SortOrder
    maxRetry?: SortOrder
    timeout?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    detailid?: SortOrder
    tenantId?: SortOrder
    _count?: PaymentProvidersCountOrderByAggregateInput
    _avg?: PaymentProvidersAvgOrderByAggregateInput
    _max?: PaymentProvidersMaxOrderByAggregateInput
    _min?: PaymentProvidersMinOrderByAggregateInput
    _sum?: PaymentProvidersSumOrderByAggregateInput
  }

  export type PaymentProvidersScalarWhereWithAggregatesInput = {
    AND?: PaymentProvidersScalarWhereWithAggregatesInput | PaymentProvidersScalarWhereWithAggregatesInput[]
    OR?: PaymentProvidersScalarWhereWithAggregatesInput[]
    NOT?: PaymentProvidersScalarWhereWithAggregatesInput | PaymentProvidersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentProviders"> | string
    maxRetry?: IntWithAggregatesFilter<"PaymentProviders"> | number
    timeout?: IntWithAggregatesFilter<"PaymentProviders"> | number
    name?: StringWithAggregatesFilter<"PaymentProviders"> | string
    provider?: EnumPaymentProvidersTypeWithAggregatesFilter<"PaymentProviders"> | $Enums.PaymentProvidersType
    detailid?: StringWithAggregatesFilter<"PaymentProviders"> | string
    tenantId?: StringWithAggregatesFilter<"PaymentProviders"> | string
  }

  export type ProviderDetailWhereInput = {
    AND?: ProviderDetailWhereInput | ProviderDetailWhereInput[]
    OR?: ProviderDetailWhereInput[]
    NOT?: ProviderDetailWhereInput | ProviderDetailWhereInput[]
    id?: StringFilter<"ProviderDetail"> | string
    url?: StringFilter<"ProviderDetail"> | string
    method?: StringFilter<"ProviderDetail"> | string
    requireAuthentication?: BoolFilter<"ProviderDetail"> | boolean
    authenticationId?: StringFilter<"ProviderDetail"> | string
    authentication?: XOR<ProviderAuthenticationScalarRelationFilter, ProviderAuthenticationWhereInput>
    PaymentProviders?: PaymentProvidersListRelationFilter
  }

  export type ProviderDetailOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    requireAuthentication?: SortOrder
    authenticationId?: SortOrder
    authentication?: ProviderAuthenticationOrderByWithRelationInput
    PaymentProviders?: PaymentProvidersOrderByRelationAggregateInput
  }

  export type ProviderDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProviderDetailWhereInput | ProviderDetailWhereInput[]
    OR?: ProviderDetailWhereInput[]
    NOT?: ProviderDetailWhereInput | ProviderDetailWhereInput[]
    url?: StringFilter<"ProviderDetail"> | string
    method?: StringFilter<"ProviderDetail"> | string
    requireAuthentication?: BoolFilter<"ProviderDetail"> | boolean
    authenticationId?: StringFilter<"ProviderDetail"> | string
    authentication?: XOR<ProviderAuthenticationScalarRelationFilter, ProviderAuthenticationWhereInput>
    PaymentProviders?: PaymentProvidersListRelationFilter
  }, "id">

  export type ProviderDetailOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    requireAuthentication?: SortOrder
    authenticationId?: SortOrder
    _count?: ProviderDetailCountOrderByAggregateInput
    _max?: ProviderDetailMaxOrderByAggregateInput
    _min?: ProviderDetailMinOrderByAggregateInput
  }

  export type ProviderDetailScalarWhereWithAggregatesInput = {
    AND?: ProviderDetailScalarWhereWithAggregatesInput | ProviderDetailScalarWhereWithAggregatesInput[]
    OR?: ProviderDetailScalarWhereWithAggregatesInput[]
    NOT?: ProviderDetailScalarWhereWithAggregatesInput | ProviderDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProviderDetail"> | string
    url?: StringWithAggregatesFilter<"ProviderDetail"> | string
    method?: StringWithAggregatesFilter<"ProviderDetail"> | string
    requireAuthentication?: BoolWithAggregatesFilter<"ProviderDetail"> | boolean
    authenticationId?: StringWithAggregatesFilter<"ProviderDetail"> | string
  }

  export type ProviderAuthenticationWhereInput = {
    AND?: ProviderAuthenticationWhereInput | ProviderAuthenticationWhereInput[]
    OR?: ProviderAuthenticationWhereInput[]
    NOT?: ProviderAuthenticationWhereInput | ProviderAuthenticationWhereInput[]
    id?: StringFilter<"ProviderAuthentication"> | string
    url?: StringFilter<"ProviderAuthentication"> | string
    type?: EnumAuthenticationTypeFilter<"ProviderAuthentication"> | $Enums.AuthenticationType
    username?: StringNullableFilter<"ProviderAuthentication"> | string | null
    password?: StringNullableFilter<"ProviderAuthentication"> | string | null
    ProviderDetail?: ProviderDetailListRelationFilter
  }

  export type ProviderAuthenticationOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    ProviderDetail?: ProviderDetailOrderByRelationAggregateInput
  }

  export type ProviderAuthenticationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProviderAuthenticationWhereInput | ProviderAuthenticationWhereInput[]
    OR?: ProviderAuthenticationWhereInput[]
    NOT?: ProviderAuthenticationWhereInput | ProviderAuthenticationWhereInput[]
    url?: StringFilter<"ProviderAuthentication"> | string
    type?: EnumAuthenticationTypeFilter<"ProviderAuthentication"> | $Enums.AuthenticationType
    username?: StringNullableFilter<"ProviderAuthentication"> | string | null
    password?: StringNullableFilter<"ProviderAuthentication"> | string | null
    ProviderDetail?: ProviderDetailListRelationFilter
  }, "id">

  export type ProviderAuthenticationOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: ProviderAuthenticationCountOrderByAggregateInput
    _max?: ProviderAuthenticationMaxOrderByAggregateInput
    _min?: ProviderAuthenticationMinOrderByAggregateInput
  }

  export type ProviderAuthenticationScalarWhereWithAggregatesInput = {
    AND?: ProviderAuthenticationScalarWhereWithAggregatesInput | ProviderAuthenticationScalarWhereWithAggregatesInput[]
    OR?: ProviderAuthenticationScalarWhereWithAggregatesInput[]
    NOT?: ProviderAuthenticationScalarWhereWithAggregatesInput | ProviderAuthenticationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProviderAuthentication"> | string
    url?: StringWithAggregatesFilter<"ProviderAuthentication"> | string
    type?: EnumAuthenticationTypeWithAggregatesFilter<"ProviderAuthentication"> | $Enums.AuthenticationType
    username?: StringNullableWithAggregatesFilter<"ProviderAuthentication"> | string | null
    password?: StringNullableWithAggregatesFilter<"ProviderAuthentication"> | string | null
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    PaymentProviders?: PaymentProvidersCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    PaymentProviders?: PaymentProvidersUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PaymentProviders?: PaymentProvidersUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PaymentProviders?: PaymentProvidersUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentProvidersCreateInput = {
    id?: string
    maxRetry: number
    timeout: number
    name: string
    provider: $Enums.PaymentProvidersType
    tenant: TenantCreateNestedOneWithoutPaymentProvidersInput
    detail: ProviderDetailCreateNestedOneWithoutPaymentProvidersInput
  }

  export type PaymentProvidersUncheckedCreateInput = {
    id?: string
    maxRetry: number
    timeout: number
    name: string
    provider: $Enums.PaymentProvidersType
    detailid: string
    tenantId: string
  }

  export type PaymentProvidersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxRetry?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersTypeFieldUpdateOperationsInput | $Enums.PaymentProvidersType
    tenant?: TenantUpdateOneRequiredWithoutPaymentProvidersNestedInput
    detail?: ProviderDetailUpdateOneRequiredWithoutPaymentProvidersNestedInput
  }

  export type PaymentProvidersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxRetry?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersTypeFieldUpdateOperationsInput | $Enums.PaymentProvidersType
    detailid?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentProvidersCreateManyInput = {
    id?: string
    maxRetry: number
    timeout: number
    name: string
    provider: $Enums.PaymentProvidersType
    detailid: string
    tenantId: string
  }

  export type PaymentProvidersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxRetry?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersTypeFieldUpdateOperationsInput | $Enums.PaymentProvidersType
  }

  export type PaymentProvidersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxRetry?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersTypeFieldUpdateOperationsInput | $Enums.PaymentProvidersType
    detailid?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderDetailCreateInput = {
    id?: string
    url: string
    method: string
    requireAuthentication?: boolean
    authentication: ProviderAuthenticationCreateNestedOneWithoutProviderDetailInput
    PaymentProviders?: PaymentProvidersCreateNestedManyWithoutDetailInput
  }

  export type ProviderDetailUncheckedCreateInput = {
    id?: string
    url: string
    method: string
    requireAuthentication?: boolean
    authenticationId: string
    PaymentProviders?: PaymentProvidersUncheckedCreateNestedManyWithoutDetailInput
  }

  export type ProviderDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requireAuthentication?: BoolFieldUpdateOperationsInput | boolean
    authentication?: ProviderAuthenticationUpdateOneRequiredWithoutProviderDetailNestedInput
    PaymentProviders?: PaymentProvidersUpdateManyWithoutDetailNestedInput
  }

  export type ProviderDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requireAuthentication?: BoolFieldUpdateOperationsInput | boolean
    authenticationId?: StringFieldUpdateOperationsInput | string
    PaymentProviders?: PaymentProvidersUncheckedUpdateManyWithoutDetailNestedInput
  }

  export type ProviderDetailCreateManyInput = {
    id?: string
    url: string
    method: string
    requireAuthentication?: boolean
    authenticationId: string
  }

  export type ProviderDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requireAuthentication?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProviderDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requireAuthentication?: BoolFieldUpdateOperationsInput | boolean
    authenticationId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderAuthenticationCreateInput = {
    id?: string
    url: string
    type?: $Enums.AuthenticationType
    username?: string | null
    password?: string | null
    ProviderDetail?: ProviderDetailCreateNestedManyWithoutAuthenticationInput
  }

  export type ProviderAuthenticationUncheckedCreateInput = {
    id?: string
    url: string
    type?: $Enums.AuthenticationType
    username?: string | null
    password?: string | null
    ProviderDetail?: ProviderDetailUncheckedCreateNestedManyWithoutAuthenticationInput
  }

  export type ProviderAuthenticationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationTypeFieldUpdateOperationsInput | $Enums.AuthenticationType
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    ProviderDetail?: ProviderDetailUpdateManyWithoutAuthenticationNestedInput
  }

  export type ProviderAuthenticationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationTypeFieldUpdateOperationsInput | $Enums.AuthenticationType
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    ProviderDetail?: ProviderDetailUncheckedUpdateManyWithoutAuthenticationNestedInput
  }

  export type ProviderAuthenticationCreateManyInput = {
    id?: string
    url: string
    type?: $Enums.AuthenticationType
    username?: string | null
    password?: string | null
  }

  export type ProviderAuthenticationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationTypeFieldUpdateOperationsInput | $Enums.AuthenticationType
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProviderAuthenticationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationTypeFieldUpdateOperationsInput | $Enums.AuthenticationType
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PaymentProvidersListRelationFilter = {
    every?: PaymentProvidersWhereInput
    some?: PaymentProvidersWhereInput
    none?: PaymentProvidersWhereInput
  }

  export type PaymentProvidersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPaymentProvidersTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvidersType | EnumPaymentProvidersTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvidersType[] | ListEnumPaymentProvidersTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvidersType[] | ListEnumPaymentProvidersTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProvidersTypeFilter<$PrismaModel> | $Enums.PaymentProvidersType
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type ProviderDetailScalarRelationFilter = {
    is?: ProviderDetailWhereInput
    isNot?: ProviderDetailWhereInput
  }

  export type PaymentProvidersCountOrderByAggregateInput = {
    id?: SortOrder
    maxRetry?: SortOrder
    timeout?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    detailid?: SortOrder
    tenantId?: SortOrder
  }

  export type PaymentProvidersAvgOrderByAggregateInput = {
    maxRetry?: SortOrder
    timeout?: SortOrder
  }

  export type PaymentProvidersMaxOrderByAggregateInput = {
    id?: SortOrder
    maxRetry?: SortOrder
    timeout?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    detailid?: SortOrder
    tenantId?: SortOrder
  }

  export type PaymentProvidersMinOrderByAggregateInput = {
    id?: SortOrder
    maxRetry?: SortOrder
    timeout?: SortOrder
    name?: SortOrder
    provider?: SortOrder
    detailid?: SortOrder
    tenantId?: SortOrder
  }

  export type PaymentProvidersSumOrderByAggregateInput = {
    maxRetry?: SortOrder
    timeout?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPaymentProvidersTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvidersType | EnumPaymentProvidersTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvidersType[] | ListEnumPaymentProvidersTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvidersType[] | ListEnumPaymentProvidersTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProvidersTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvidersType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProvidersTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentProvidersTypeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProviderAuthenticationScalarRelationFilter = {
    is?: ProviderAuthenticationWhereInput
    isNot?: ProviderAuthenticationWhereInput
  }

  export type ProviderDetailCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    requireAuthentication?: SortOrder
    authenticationId?: SortOrder
  }

  export type ProviderDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    requireAuthentication?: SortOrder
    authenticationId?: SortOrder
  }

  export type ProviderDetailMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    method?: SortOrder
    requireAuthentication?: SortOrder
    authenticationId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAuthenticationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthenticationType | EnumAuthenticationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthenticationType[] | ListEnumAuthenticationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthenticationType[] | ListEnumAuthenticationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthenticationTypeFilter<$PrismaModel> | $Enums.AuthenticationType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProviderDetailListRelationFilter = {
    every?: ProviderDetailWhereInput
    some?: ProviderDetailWhereInput
    none?: ProviderDetailWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProviderDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderAuthenticationCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type ProviderAuthenticationMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type ProviderAuthenticationMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type EnumAuthenticationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthenticationType | EnumAuthenticationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthenticationType[] | ListEnumAuthenticationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthenticationType[] | ListEnumAuthenticationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthenticationTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthenticationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthenticationTypeFilter<$PrismaModel>
    _max?: NestedEnumAuthenticationTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PaymentProvidersCreateNestedManyWithoutTenantInput = {
    create?: XOR<PaymentProvidersCreateWithoutTenantInput, PaymentProvidersUncheckedCreateWithoutTenantInput> | PaymentProvidersCreateWithoutTenantInput[] | PaymentProvidersUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentProvidersCreateOrConnectWithoutTenantInput | PaymentProvidersCreateOrConnectWithoutTenantInput[]
    createMany?: PaymentProvidersCreateManyTenantInputEnvelope
    connect?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
  }

  export type PaymentProvidersUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PaymentProvidersCreateWithoutTenantInput, PaymentProvidersUncheckedCreateWithoutTenantInput> | PaymentProvidersCreateWithoutTenantInput[] | PaymentProvidersUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentProvidersCreateOrConnectWithoutTenantInput | PaymentProvidersCreateOrConnectWithoutTenantInput[]
    createMany?: PaymentProvidersCreateManyTenantInputEnvelope
    connect?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PaymentProvidersUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PaymentProvidersCreateWithoutTenantInput, PaymentProvidersUncheckedCreateWithoutTenantInput> | PaymentProvidersCreateWithoutTenantInput[] | PaymentProvidersUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentProvidersCreateOrConnectWithoutTenantInput | PaymentProvidersCreateOrConnectWithoutTenantInput[]
    upsert?: PaymentProvidersUpsertWithWhereUniqueWithoutTenantInput | PaymentProvidersUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PaymentProvidersCreateManyTenantInputEnvelope
    set?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    disconnect?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    delete?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    connect?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    update?: PaymentProvidersUpdateWithWhereUniqueWithoutTenantInput | PaymentProvidersUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PaymentProvidersUpdateManyWithWhereWithoutTenantInput | PaymentProvidersUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PaymentProvidersScalarWhereInput | PaymentProvidersScalarWhereInput[]
  }

  export type PaymentProvidersUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PaymentProvidersCreateWithoutTenantInput, PaymentProvidersUncheckedCreateWithoutTenantInput> | PaymentProvidersCreateWithoutTenantInput[] | PaymentProvidersUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PaymentProvidersCreateOrConnectWithoutTenantInput | PaymentProvidersCreateOrConnectWithoutTenantInput[]
    upsert?: PaymentProvidersUpsertWithWhereUniqueWithoutTenantInput | PaymentProvidersUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PaymentProvidersCreateManyTenantInputEnvelope
    set?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    disconnect?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    delete?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    connect?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    update?: PaymentProvidersUpdateWithWhereUniqueWithoutTenantInput | PaymentProvidersUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PaymentProvidersUpdateManyWithWhereWithoutTenantInput | PaymentProvidersUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PaymentProvidersScalarWhereInput | PaymentProvidersScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutPaymentProvidersInput = {
    create?: XOR<TenantCreateWithoutPaymentProvidersInput, TenantUncheckedCreateWithoutPaymentProvidersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPaymentProvidersInput
    connect?: TenantWhereUniqueInput
  }

  export type ProviderDetailCreateNestedOneWithoutPaymentProvidersInput = {
    create?: XOR<ProviderDetailCreateWithoutPaymentProvidersInput, ProviderDetailUncheckedCreateWithoutPaymentProvidersInput>
    connectOrCreate?: ProviderDetailCreateOrConnectWithoutPaymentProvidersInput
    connect?: ProviderDetailWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentProvidersTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentProvidersType
  }

  export type TenantUpdateOneRequiredWithoutPaymentProvidersNestedInput = {
    create?: XOR<TenantCreateWithoutPaymentProvidersInput, TenantUncheckedCreateWithoutPaymentProvidersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPaymentProvidersInput
    upsert?: TenantUpsertWithoutPaymentProvidersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPaymentProvidersInput, TenantUpdateWithoutPaymentProvidersInput>, TenantUncheckedUpdateWithoutPaymentProvidersInput>
  }

  export type ProviderDetailUpdateOneRequiredWithoutPaymentProvidersNestedInput = {
    create?: XOR<ProviderDetailCreateWithoutPaymentProvidersInput, ProviderDetailUncheckedCreateWithoutPaymentProvidersInput>
    connectOrCreate?: ProviderDetailCreateOrConnectWithoutPaymentProvidersInput
    upsert?: ProviderDetailUpsertWithoutPaymentProvidersInput
    connect?: ProviderDetailWhereUniqueInput
    update?: XOR<XOR<ProviderDetailUpdateToOneWithWhereWithoutPaymentProvidersInput, ProviderDetailUpdateWithoutPaymentProvidersInput>, ProviderDetailUncheckedUpdateWithoutPaymentProvidersInput>
  }

  export type ProviderAuthenticationCreateNestedOneWithoutProviderDetailInput = {
    create?: XOR<ProviderAuthenticationCreateWithoutProviderDetailInput, ProviderAuthenticationUncheckedCreateWithoutProviderDetailInput>
    connectOrCreate?: ProviderAuthenticationCreateOrConnectWithoutProviderDetailInput
    connect?: ProviderAuthenticationWhereUniqueInput
  }

  export type PaymentProvidersCreateNestedManyWithoutDetailInput = {
    create?: XOR<PaymentProvidersCreateWithoutDetailInput, PaymentProvidersUncheckedCreateWithoutDetailInput> | PaymentProvidersCreateWithoutDetailInput[] | PaymentProvidersUncheckedCreateWithoutDetailInput[]
    connectOrCreate?: PaymentProvidersCreateOrConnectWithoutDetailInput | PaymentProvidersCreateOrConnectWithoutDetailInput[]
    createMany?: PaymentProvidersCreateManyDetailInputEnvelope
    connect?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
  }

  export type PaymentProvidersUncheckedCreateNestedManyWithoutDetailInput = {
    create?: XOR<PaymentProvidersCreateWithoutDetailInput, PaymentProvidersUncheckedCreateWithoutDetailInput> | PaymentProvidersCreateWithoutDetailInput[] | PaymentProvidersUncheckedCreateWithoutDetailInput[]
    connectOrCreate?: PaymentProvidersCreateOrConnectWithoutDetailInput | PaymentProvidersCreateOrConnectWithoutDetailInput[]
    createMany?: PaymentProvidersCreateManyDetailInputEnvelope
    connect?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProviderAuthenticationUpdateOneRequiredWithoutProviderDetailNestedInput = {
    create?: XOR<ProviderAuthenticationCreateWithoutProviderDetailInput, ProviderAuthenticationUncheckedCreateWithoutProviderDetailInput>
    connectOrCreate?: ProviderAuthenticationCreateOrConnectWithoutProviderDetailInput
    upsert?: ProviderAuthenticationUpsertWithoutProviderDetailInput
    connect?: ProviderAuthenticationWhereUniqueInput
    update?: XOR<XOR<ProviderAuthenticationUpdateToOneWithWhereWithoutProviderDetailInput, ProviderAuthenticationUpdateWithoutProviderDetailInput>, ProviderAuthenticationUncheckedUpdateWithoutProviderDetailInput>
  }

  export type PaymentProvidersUpdateManyWithoutDetailNestedInput = {
    create?: XOR<PaymentProvidersCreateWithoutDetailInput, PaymentProvidersUncheckedCreateWithoutDetailInput> | PaymentProvidersCreateWithoutDetailInput[] | PaymentProvidersUncheckedCreateWithoutDetailInput[]
    connectOrCreate?: PaymentProvidersCreateOrConnectWithoutDetailInput | PaymentProvidersCreateOrConnectWithoutDetailInput[]
    upsert?: PaymentProvidersUpsertWithWhereUniqueWithoutDetailInput | PaymentProvidersUpsertWithWhereUniqueWithoutDetailInput[]
    createMany?: PaymentProvidersCreateManyDetailInputEnvelope
    set?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    disconnect?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    delete?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    connect?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    update?: PaymentProvidersUpdateWithWhereUniqueWithoutDetailInput | PaymentProvidersUpdateWithWhereUniqueWithoutDetailInput[]
    updateMany?: PaymentProvidersUpdateManyWithWhereWithoutDetailInput | PaymentProvidersUpdateManyWithWhereWithoutDetailInput[]
    deleteMany?: PaymentProvidersScalarWhereInput | PaymentProvidersScalarWhereInput[]
  }

  export type PaymentProvidersUncheckedUpdateManyWithoutDetailNestedInput = {
    create?: XOR<PaymentProvidersCreateWithoutDetailInput, PaymentProvidersUncheckedCreateWithoutDetailInput> | PaymentProvidersCreateWithoutDetailInput[] | PaymentProvidersUncheckedCreateWithoutDetailInput[]
    connectOrCreate?: PaymentProvidersCreateOrConnectWithoutDetailInput | PaymentProvidersCreateOrConnectWithoutDetailInput[]
    upsert?: PaymentProvidersUpsertWithWhereUniqueWithoutDetailInput | PaymentProvidersUpsertWithWhereUniqueWithoutDetailInput[]
    createMany?: PaymentProvidersCreateManyDetailInputEnvelope
    set?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    disconnect?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    delete?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    connect?: PaymentProvidersWhereUniqueInput | PaymentProvidersWhereUniqueInput[]
    update?: PaymentProvidersUpdateWithWhereUniqueWithoutDetailInput | PaymentProvidersUpdateWithWhereUniqueWithoutDetailInput[]
    updateMany?: PaymentProvidersUpdateManyWithWhereWithoutDetailInput | PaymentProvidersUpdateManyWithWhereWithoutDetailInput[]
    deleteMany?: PaymentProvidersScalarWhereInput | PaymentProvidersScalarWhereInput[]
  }

  export type ProviderDetailCreateNestedManyWithoutAuthenticationInput = {
    create?: XOR<ProviderDetailCreateWithoutAuthenticationInput, ProviderDetailUncheckedCreateWithoutAuthenticationInput> | ProviderDetailCreateWithoutAuthenticationInput[] | ProviderDetailUncheckedCreateWithoutAuthenticationInput[]
    connectOrCreate?: ProviderDetailCreateOrConnectWithoutAuthenticationInput | ProviderDetailCreateOrConnectWithoutAuthenticationInput[]
    createMany?: ProviderDetailCreateManyAuthenticationInputEnvelope
    connect?: ProviderDetailWhereUniqueInput | ProviderDetailWhereUniqueInput[]
  }

  export type ProviderDetailUncheckedCreateNestedManyWithoutAuthenticationInput = {
    create?: XOR<ProviderDetailCreateWithoutAuthenticationInput, ProviderDetailUncheckedCreateWithoutAuthenticationInput> | ProviderDetailCreateWithoutAuthenticationInput[] | ProviderDetailUncheckedCreateWithoutAuthenticationInput[]
    connectOrCreate?: ProviderDetailCreateOrConnectWithoutAuthenticationInput | ProviderDetailCreateOrConnectWithoutAuthenticationInput[]
    createMany?: ProviderDetailCreateManyAuthenticationInputEnvelope
    connect?: ProviderDetailWhereUniqueInput | ProviderDetailWhereUniqueInput[]
  }

  export type EnumAuthenticationTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuthenticationType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProviderDetailUpdateManyWithoutAuthenticationNestedInput = {
    create?: XOR<ProviderDetailCreateWithoutAuthenticationInput, ProviderDetailUncheckedCreateWithoutAuthenticationInput> | ProviderDetailCreateWithoutAuthenticationInput[] | ProviderDetailUncheckedCreateWithoutAuthenticationInput[]
    connectOrCreate?: ProviderDetailCreateOrConnectWithoutAuthenticationInput | ProviderDetailCreateOrConnectWithoutAuthenticationInput[]
    upsert?: ProviderDetailUpsertWithWhereUniqueWithoutAuthenticationInput | ProviderDetailUpsertWithWhereUniqueWithoutAuthenticationInput[]
    createMany?: ProviderDetailCreateManyAuthenticationInputEnvelope
    set?: ProviderDetailWhereUniqueInput | ProviderDetailWhereUniqueInput[]
    disconnect?: ProviderDetailWhereUniqueInput | ProviderDetailWhereUniqueInput[]
    delete?: ProviderDetailWhereUniqueInput | ProviderDetailWhereUniqueInput[]
    connect?: ProviderDetailWhereUniqueInput | ProviderDetailWhereUniqueInput[]
    update?: ProviderDetailUpdateWithWhereUniqueWithoutAuthenticationInput | ProviderDetailUpdateWithWhereUniqueWithoutAuthenticationInput[]
    updateMany?: ProviderDetailUpdateManyWithWhereWithoutAuthenticationInput | ProviderDetailUpdateManyWithWhereWithoutAuthenticationInput[]
    deleteMany?: ProviderDetailScalarWhereInput | ProviderDetailScalarWhereInput[]
  }

  export type ProviderDetailUncheckedUpdateManyWithoutAuthenticationNestedInput = {
    create?: XOR<ProviderDetailCreateWithoutAuthenticationInput, ProviderDetailUncheckedCreateWithoutAuthenticationInput> | ProviderDetailCreateWithoutAuthenticationInput[] | ProviderDetailUncheckedCreateWithoutAuthenticationInput[]
    connectOrCreate?: ProviderDetailCreateOrConnectWithoutAuthenticationInput | ProviderDetailCreateOrConnectWithoutAuthenticationInput[]
    upsert?: ProviderDetailUpsertWithWhereUniqueWithoutAuthenticationInput | ProviderDetailUpsertWithWhereUniqueWithoutAuthenticationInput[]
    createMany?: ProviderDetailCreateManyAuthenticationInputEnvelope
    set?: ProviderDetailWhereUniqueInput | ProviderDetailWhereUniqueInput[]
    disconnect?: ProviderDetailWhereUniqueInput | ProviderDetailWhereUniqueInput[]
    delete?: ProviderDetailWhereUniqueInput | ProviderDetailWhereUniqueInput[]
    connect?: ProviderDetailWhereUniqueInput | ProviderDetailWhereUniqueInput[]
    update?: ProviderDetailUpdateWithWhereUniqueWithoutAuthenticationInput | ProviderDetailUpdateWithWhereUniqueWithoutAuthenticationInput[]
    updateMany?: ProviderDetailUpdateManyWithWhereWithoutAuthenticationInput | ProviderDetailUpdateManyWithWhereWithoutAuthenticationInput[]
    deleteMany?: ProviderDetailScalarWhereInput | ProviderDetailScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumPaymentProvidersTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvidersType | EnumPaymentProvidersTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvidersType[] | ListEnumPaymentProvidersTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvidersType[] | ListEnumPaymentProvidersTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProvidersTypeFilter<$PrismaModel> | $Enums.PaymentProvidersType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPaymentProvidersTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvidersType | EnumPaymentProvidersTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvidersType[] | ListEnumPaymentProvidersTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvidersType[] | ListEnumPaymentProvidersTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProvidersTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvidersType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProvidersTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentProvidersTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAuthenticationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthenticationType | EnumAuthenticationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthenticationType[] | ListEnumAuthenticationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthenticationType[] | ListEnumAuthenticationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthenticationTypeFilter<$PrismaModel> | $Enums.AuthenticationType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAuthenticationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthenticationType | EnumAuthenticationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthenticationType[] | ListEnumAuthenticationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthenticationType[] | ListEnumAuthenticationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthenticationTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthenticationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthenticationTypeFilter<$PrismaModel>
    _max?: NestedEnumAuthenticationTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PaymentProvidersCreateWithoutTenantInput = {
    id?: string
    maxRetry: number
    timeout: number
    name: string
    provider: $Enums.PaymentProvidersType
    detail: ProviderDetailCreateNestedOneWithoutPaymentProvidersInput
  }

  export type PaymentProvidersUncheckedCreateWithoutTenantInput = {
    id?: string
    maxRetry: number
    timeout: number
    name: string
    provider: $Enums.PaymentProvidersType
    detailid: string
  }

  export type PaymentProvidersCreateOrConnectWithoutTenantInput = {
    where: PaymentProvidersWhereUniqueInput
    create: XOR<PaymentProvidersCreateWithoutTenantInput, PaymentProvidersUncheckedCreateWithoutTenantInput>
  }

  export type PaymentProvidersCreateManyTenantInputEnvelope = {
    data: PaymentProvidersCreateManyTenantInput | PaymentProvidersCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type PaymentProvidersUpsertWithWhereUniqueWithoutTenantInput = {
    where: PaymentProvidersWhereUniqueInput
    update: XOR<PaymentProvidersUpdateWithoutTenantInput, PaymentProvidersUncheckedUpdateWithoutTenantInput>
    create: XOR<PaymentProvidersCreateWithoutTenantInput, PaymentProvidersUncheckedCreateWithoutTenantInput>
  }

  export type PaymentProvidersUpdateWithWhereUniqueWithoutTenantInput = {
    where: PaymentProvidersWhereUniqueInput
    data: XOR<PaymentProvidersUpdateWithoutTenantInput, PaymentProvidersUncheckedUpdateWithoutTenantInput>
  }

  export type PaymentProvidersUpdateManyWithWhereWithoutTenantInput = {
    where: PaymentProvidersScalarWhereInput
    data: XOR<PaymentProvidersUpdateManyMutationInput, PaymentProvidersUncheckedUpdateManyWithoutTenantInput>
  }

  export type PaymentProvidersScalarWhereInput = {
    AND?: PaymentProvidersScalarWhereInput | PaymentProvidersScalarWhereInput[]
    OR?: PaymentProvidersScalarWhereInput[]
    NOT?: PaymentProvidersScalarWhereInput | PaymentProvidersScalarWhereInput[]
    id?: StringFilter<"PaymentProviders"> | string
    maxRetry?: IntFilter<"PaymentProviders"> | number
    timeout?: IntFilter<"PaymentProviders"> | number
    name?: StringFilter<"PaymentProviders"> | string
    provider?: EnumPaymentProvidersTypeFilter<"PaymentProviders"> | $Enums.PaymentProvidersType
    detailid?: StringFilter<"PaymentProviders"> | string
    tenantId?: StringFilter<"PaymentProviders"> | string
  }

  export type TenantCreateWithoutPaymentProvidersInput = {
    id?: string
    name: string
  }

  export type TenantUncheckedCreateWithoutPaymentProvidersInput = {
    id?: string
    name: string
  }

  export type TenantCreateOrConnectWithoutPaymentProvidersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPaymentProvidersInput, TenantUncheckedCreateWithoutPaymentProvidersInput>
  }

  export type ProviderDetailCreateWithoutPaymentProvidersInput = {
    id?: string
    url: string
    method: string
    requireAuthentication?: boolean
    authentication: ProviderAuthenticationCreateNestedOneWithoutProviderDetailInput
  }

  export type ProviderDetailUncheckedCreateWithoutPaymentProvidersInput = {
    id?: string
    url: string
    method: string
    requireAuthentication?: boolean
    authenticationId: string
  }

  export type ProviderDetailCreateOrConnectWithoutPaymentProvidersInput = {
    where: ProviderDetailWhereUniqueInput
    create: XOR<ProviderDetailCreateWithoutPaymentProvidersInput, ProviderDetailUncheckedCreateWithoutPaymentProvidersInput>
  }

  export type TenantUpsertWithoutPaymentProvidersInput = {
    update: XOR<TenantUpdateWithoutPaymentProvidersInput, TenantUncheckedUpdateWithoutPaymentProvidersInput>
    create: XOR<TenantCreateWithoutPaymentProvidersInput, TenantUncheckedCreateWithoutPaymentProvidersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPaymentProvidersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPaymentProvidersInput, TenantUncheckedUpdateWithoutPaymentProvidersInput>
  }

  export type TenantUpdateWithoutPaymentProvidersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TenantUncheckedUpdateWithoutPaymentProvidersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderDetailUpsertWithoutPaymentProvidersInput = {
    update: XOR<ProviderDetailUpdateWithoutPaymentProvidersInput, ProviderDetailUncheckedUpdateWithoutPaymentProvidersInput>
    create: XOR<ProviderDetailCreateWithoutPaymentProvidersInput, ProviderDetailUncheckedCreateWithoutPaymentProvidersInput>
    where?: ProviderDetailWhereInput
  }

  export type ProviderDetailUpdateToOneWithWhereWithoutPaymentProvidersInput = {
    where?: ProviderDetailWhereInput
    data: XOR<ProviderDetailUpdateWithoutPaymentProvidersInput, ProviderDetailUncheckedUpdateWithoutPaymentProvidersInput>
  }

  export type ProviderDetailUpdateWithoutPaymentProvidersInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requireAuthentication?: BoolFieldUpdateOperationsInput | boolean
    authentication?: ProviderAuthenticationUpdateOneRequiredWithoutProviderDetailNestedInput
  }

  export type ProviderDetailUncheckedUpdateWithoutPaymentProvidersInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requireAuthentication?: BoolFieldUpdateOperationsInput | boolean
    authenticationId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderAuthenticationCreateWithoutProviderDetailInput = {
    id?: string
    url: string
    type?: $Enums.AuthenticationType
    username?: string | null
    password?: string | null
  }

  export type ProviderAuthenticationUncheckedCreateWithoutProviderDetailInput = {
    id?: string
    url: string
    type?: $Enums.AuthenticationType
    username?: string | null
    password?: string | null
  }

  export type ProviderAuthenticationCreateOrConnectWithoutProviderDetailInput = {
    where: ProviderAuthenticationWhereUniqueInput
    create: XOR<ProviderAuthenticationCreateWithoutProviderDetailInput, ProviderAuthenticationUncheckedCreateWithoutProviderDetailInput>
  }

  export type PaymentProvidersCreateWithoutDetailInput = {
    id?: string
    maxRetry: number
    timeout: number
    name: string
    provider: $Enums.PaymentProvidersType
    tenant: TenantCreateNestedOneWithoutPaymentProvidersInput
  }

  export type PaymentProvidersUncheckedCreateWithoutDetailInput = {
    id?: string
    maxRetry: number
    timeout: number
    name: string
    provider: $Enums.PaymentProvidersType
    tenantId: string
  }

  export type PaymentProvidersCreateOrConnectWithoutDetailInput = {
    where: PaymentProvidersWhereUniqueInput
    create: XOR<PaymentProvidersCreateWithoutDetailInput, PaymentProvidersUncheckedCreateWithoutDetailInput>
  }

  export type PaymentProvidersCreateManyDetailInputEnvelope = {
    data: PaymentProvidersCreateManyDetailInput | PaymentProvidersCreateManyDetailInput[]
    skipDuplicates?: boolean
  }

  export type ProviderAuthenticationUpsertWithoutProviderDetailInput = {
    update: XOR<ProviderAuthenticationUpdateWithoutProviderDetailInput, ProviderAuthenticationUncheckedUpdateWithoutProviderDetailInput>
    create: XOR<ProviderAuthenticationCreateWithoutProviderDetailInput, ProviderAuthenticationUncheckedCreateWithoutProviderDetailInput>
    where?: ProviderAuthenticationWhereInput
  }

  export type ProviderAuthenticationUpdateToOneWithWhereWithoutProviderDetailInput = {
    where?: ProviderAuthenticationWhereInput
    data: XOR<ProviderAuthenticationUpdateWithoutProviderDetailInput, ProviderAuthenticationUncheckedUpdateWithoutProviderDetailInput>
  }

  export type ProviderAuthenticationUpdateWithoutProviderDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationTypeFieldUpdateOperationsInput | $Enums.AuthenticationType
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProviderAuthenticationUncheckedUpdateWithoutProviderDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumAuthenticationTypeFieldUpdateOperationsInput | $Enums.AuthenticationType
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentProvidersUpsertWithWhereUniqueWithoutDetailInput = {
    where: PaymentProvidersWhereUniqueInput
    update: XOR<PaymentProvidersUpdateWithoutDetailInput, PaymentProvidersUncheckedUpdateWithoutDetailInput>
    create: XOR<PaymentProvidersCreateWithoutDetailInput, PaymentProvidersUncheckedCreateWithoutDetailInput>
  }

  export type PaymentProvidersUpdateWithWhereUniqueWithoutDetailInput = {
    where: PaymentProvidersWhereUniqueInput
    data: XOR<PaymentProvidersUpdateWithoutDetailInput, PaymentProvidersUncheckedUpdateWithoutDetailInput>
  }

  export type PaymentProvidersUpdateManyWithWhereWithoutDetailInput = {
    where: PaymentProvidersScalarWhereInput
    data: XOR<PaymentProvidersUpdateManyMutationInput, PaymentProvidersUncheckedUpdateManyWithoutDetailInput>
  }

  export type ProviderDetailCreateWithoutAuthenticationInput = {
    id?: string
    url: string
    method: string
    requireAuthentication?: boolean
    PaymentProviders?: PaymentProvidersCreateNestedManyWithoutDetailInput
  }

  export type ProviderDetailUncheckedCreateWithoutAuthenticationInput = {
    id?: string
    url: string
    method: string
    requireAuthentication?: boolean
    PaymentProviders?: PaymentProvidersUncheckedCreateNestedManyWithoutDetailInput
  }

  export type ProviderDetailCreateOrConnectWithoutAuthenticationInput = {
    where: ProviderDetailWhereUniqueInput
    create: XOR<ProviderDetailCreateWithoutAuthenticationInput, ProviderDetailUncheckedCreateWithoutAuthenticationInput>
  }

  export type ProviderDetailCreateManyAuthenticationInputEnvelope = {
    data: ProviderDetailCreateManyAuthenticationInput | ProviderDetailCreateManyAuthenticationInput[]
    skipDuplicates?: boolean
  }

  export type ProviderDetailUpsertWithWhereUniqueWithoutAuthenticationInput = {
    where: ProviderDetailWhereUniqueInput
    update: XOR<ProviderDetailUpdateWithoutAuthenticationInput, ProviderDetailUncheckedUpdateWithoutAuthenticationInput>
    create: XOR<ProviderDetailCreateWithoutAuthenticationInput, ProviderDetailUncheckedCreateWithoutAuthenticationInput>
  }

  export type ProviderDetailUpdateWithWhereUniqueWithoutAuthenticationInput = {
    where: ProviderDetailWhereUniqueInput
    data: XOR<ProviderDetailUpdateWithoutAuthenticationInput, ProviderDetailUncheckedUpdateWithoutAuthenticationInput>
  }

  export type ProviderDetailUpdateManyWithWhereWithoutAuthenticationInput = {
    where: ProviderDetailScalarWhereInput
    data: XOR<ProviderDetailUpdateManyMutationInput, ProviderDetailUncheckedUpdateManyWithoutAuthenticationInput>
  }

  export type ProviderDetailScalarWhereInput = {
    AND?: ProviderDetailScalarWhereInput | ProviderDetailScalarWhereInput[]
    OR?: ProviderDetailScalarWhereInput[]
    NOT?: ProviderDetailScalarWhereInput | ProviderDetailScalarWhereInput[]
    id?: StringFilter<"ProviderDetail"> | string
    url?: StringFilter<"ProviderDetail"> | string
    method?: StringFilter<"ProviderDetail"> | string
    requireAuthentication?: BoolFilter<"ProviderDetail"> | boolean
    authenticationId?: StringFilter<"ProviderDetail"> | string
  }

  export type PaymentProvidersCreateManyTenantInput = {
    id?: string
    maxRetry: number
    timeout: number
    name: string
    provider: $Enums.PaymentProvidersType
    detailid: string
  }

  export type PaymentProvidersUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxRetry?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersTypeFieldUpdateOperationsInput | $Enums.PaymentProvidersType
    detail?: ProviderDetailUpdateOneRequiredWithoutPaymentProvidersNestedInput
  }

  export type PaymentProvidersUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxRetry?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersTypeFieldUpdateOperationsInput | $Enums.PaymentProvidersType
    detailid?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentProvidersUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxRetry?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersTypeFieldUpdateOperationsInput | $Enums.PaymentProvidersType
    detailid?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentProvidersCreateManyDetailInput = {
    id?: string
    maxRetry: number
    timeout: number
    name: string
    provider: $Enums.PaymentProvidersType
    tenantId: string
  }

  export type PaymentProvidersUpdateWithoutDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxRetry?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersTypeFieldUpdateOperationsInput | $Enums.PaymentProvidersType
    tenant?: TenantUpdateOneRequiredWithoutPaymentProvidersNestedInput
  }

  export type PaymentProvidersUncheckedUpdateWithoutDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxRetry?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersTypeFieldUpdateOperationsInput | $Enums.PaymentProvidersType
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentProvidersUncheckedUpdateManyWithoutDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    maxRetry?: IntFieldUpdateOperationsInput | number
    timeout?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProvidersTypeFieldUpdateOperationsInput | $Enums.PaymentProvidersType
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderDetailCreateManyAuthenticationInput = {
    id?: string
    url: string
    method: string
    requireAuthentication?: boolean
  }

  export type ProviderDetailUpdateWithoutAuthenticationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requireAuthentication?: BoolFieldUpdateOperationsInput | boolean
    PaymentProviders?: PaymentProvidersUpdateManyWithoutDetailNestedInput
  }

  export type ProviderDetailUncheckedUpdateWithoutAuthenticationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requireAuthentication?: BoolFieldUpdateOperationsInput | boolean
    PaymentProviders?: PaymentProvidersUncheckedUpdateManyWithoutDetailNestedInput
  }

  export type ProviderDetailUncheckedUpdateManyWithoutAuthenticationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    requireAuthentication?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}