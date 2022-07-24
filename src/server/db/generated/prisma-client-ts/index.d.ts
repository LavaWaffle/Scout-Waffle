
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Game
 * 
 */
export type Game = {
  id: string
  name: string
  cargoRP: number
  climbBar: ClimbBar
  climpRP: number
  weWin: Win
  ourTeam: Team
  createdAt: Date
  updatedAt: Date
}

/**
 * Model AutoLaunch
 * 
 */
export type AutoLaunch = {
  id: string
  launchOne: Launch
  launchTwo: Launch
  gameId: string
}

/**
 * Model Marker
 * 
 */
export type Marker = {
  id: string
  left: number
  top: number
  launchOne: Launch
  launchTwo: Launch
  gameId: string | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const ClimbBar: {
  Low: 'Low',
  Middle: 'Middle',
  High: 'High',
  Traversal: 'Traversal'
};

export type ClimbBar = (typeof ClimbBar)[keyof typeof ClimbBar]


export const Win: {
  Win: 'Win',
  Lose: 'Lose',
  Tie: 'Tie'
};

export type Win = (typeof Win)[keyof typeof Win]


export const Team: {
  Red: 'Red',
  Blue: 'Blue'
};

export type Team = (typeof Team)[keyof typeof Team]


export const Launch: {
  GotIn: 'GotIn',
  BounceOut: 'BounceOut',
  MissClose: 'MissClose',
  MissFar: 'MissFar',
  NoLaunch: 'NoLaunch'
};

export type Launch = (typeof Launch)[keyof typeof Launch]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Games
 * const games = await prisma.game.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Games
   * const games = await prisma.game.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<GlobalReject>;

  /**
   * `prisma.autoLaunch`: Exposes CRUD operations for the **AutoLaunch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutoLaunches
    * const autoLaunches = await prisma.autoLaunch.findMany()
    * ```
    */
  get autoLaunch(): Prisma.AutoLaunchDelegate<GlobalReject>;

  /**
   * `prisma.marker`: Exposes CRUD operations for the **Marker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markers
    * const markers = await prisma.marker.findMany()
    * ```
    */
  get marker(): Prisma.MarkerDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.1.0
   * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Game: 'Game',
    AutoLaunch: 'AutoLaunch',
    Marker: 'Marker'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GameCountOutputType
   */


  export type GameCountOutputType = {
    markers: number
  }

  export type GameCountOutputTypeSelect = {
    markers?: boolean
  }

  export type GameCountOutputTypeGetPayload<
    S extends boolean | null | undefined | GameCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? GameCountOutputType
    : S extends undefined
    ? never
    : S extends GameCountOutputTypeArgs
    ?'include' extends U
    ? GameCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof GameCountOutputType ? GameCountOutputType[P] : never
  } 
    : GameCountOutputType
  : GameCountOutputType




  // Custom InputTypes

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     * 
    **/
    select?: GameCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Game
   */


  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    cargoRP: number | null
    climpRP: number | null
  }

  export type GameSumAggregateOutputType = {
    cargoRP: number | null
    climpRP: number | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    name: string | null
    cargoRP: number | null
    climbBar: ClimbBar | null
    climpRP: number | null
    weWin: Win | null
    ourTeam: Team | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cargoRP: number | null
    climbBar: ClimbBar | null
    climpRP: number | null
    weWin: Win | null
    ourTeam: Team | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    name: number
    cargoRP: number
    climbBar: number
    climpRP: number
    weWin: number
    ourTeam: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    cargoRP?: true
    climpRP?: true
  }

  export type GameSumAggregateInputType = {
    cargoRP?: true
    climpRP?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    name?: true
    cargoRP?: true
    climbBar?: true
    climpRP?: true
    weWin?: true
    ourTeam?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    name?: true
    cargoRP?: true
    climbBar?: true
    climpRP?: true
    weWin?: true
    ourTeam?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    name?: true
    cargoRP?: true
    climbBar?: true
    climpRP?: true
    weWin?: true
    ourTeam?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs = {
    /**
     * Filter which Game to aggregate.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs = {
    where?: GameWhereInput
    orderBy?: Enumerable<GameOrderByWithAggregationInput>
    by: Array<GameScalarFieldEnum>
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }


  export type GameGroupByOutputType = {
    id: string
    name: string
    cargoRP: number
    climbBar: ClimbBar
    climpRP: number
    weWin: Win
    ourTeam: Team
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect = {
    id?: boolean
    name?: boolean
    autoBalls?: boolean | AutoLaunchArgs
    markers?: boolean | MarkerFindManyArgs
    cargoRP?: boolean
    climbBar?: boolean
    climpRP?: boolean
    weWin?: boolean
    ourTeam?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | GameCountOutputTypeArgs
  }

  export type GameInclude = {
    autoBalls?: boolean | AutoLaunchArgs
    markers?: boolean | MarkerFindManyArgs
    _count?: boolean | GameCountOutputTypeArgs
  }

  export type GameGetPayload<
    S extends boolean | null | undefined | GameArgs,
    U = keyof S
      > = S extends true
        ? Game
    : S extends undefined
    ? never
    : S extends GameArgs | GameFindManyArgs
    ?'include' extends U
    ? Game  & {
    [P in TrueKeys<S['include']>]:
        P extends 'autoBalls' ? AutoLaunchGetPayload<S['include'][P]> | null :
        P extends 'markers' ? Array < MarkerGetPayload<S['include'][P]>>  :
        P extends '_count' ? GameCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'autoBalls' ? AutoLaunchGetPayload<S['select'][P]> | null :
        P extends 'markers' ? Array < MarkerGetPayload<S['select'][P]>>  :
        P extends '_count' ? GameCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Game ? Game[P] : never
  } 
    : Game
  : Game


  type GameCountArgs = Merge<
    Omit<GameFindManyArgs, 'select' | 'include'> & {
      select?: GameCountAggregateInputType | true
    }
  >

  export interface GameDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Game'> extends True ? CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>> : CheckSelect<T, Prisma__GameClient<Game | null >, Prisma__GameClient<GameGetPayload<T> | null >>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Game'> extends True ? CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>> : CheckSelect<T, Prisma__GameClient<Game | null >, Prisma__GameClient<GameGetPayload<T> | null >>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameFindManyArgs>(
      args?: SelectSubset<T, GameFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Game>>, PrismaPromise<Array<GameGetPayload<T>>>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
    **/
    create<T extends GameCreateArgs>(
      args: SelectSubset<T, GameCreateArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Create many Games.
     *     @param {GameCreateManyArgs} args - Arguments to create many Games.
     *     @example
     *     // Create many Games
     *     const game = await prisma.game.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameCreateManyArgs>(
      args?: SelectSubset<T, GameCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
    **/
    delete<T extends GameDeleteArgs>(
      args: SelectSubset<T, GameDeleteArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameUpdateArgs>(
      args: SelectSubset<T, GameUpdateArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameDeleteManyArgs>(
      args?: SelectSubset<T, GameDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameUpdateManyArgs>(
      args: SelectSubset<T, GameUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
    **/
    upsert<T extends GameUpsertArgs>(
      args: SelectSubset<T, GameUpsertArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Find one Game that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GameFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Find the first Game that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GameFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__GameClient<Game>, Prisma__GameClient<GameGetPayload<T>>>

    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    autoBalls<T extends AutoLaunchArgs = {}>(args?: Subset<T, AutoLaunchArgs>): CheckSelect<T, Prisma__AutoLaunchClient<AutoLaunch | null >, Prisma__AutoLaunchClient<AutoLaunchGetPayload<T> | null >>;

    markers<T extends MarkerFindManyArgs = {}>(args?: Subset<T, MarkerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Marker>>, PrismaPromise<Array<MarkerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Game base type for findUnique actions
   */
  export type GameFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Game to fetch.
     * 
    **/
    where: GameWhereUniqueInput
  }

  /**
   * Game: findUnique
   */
  export interface GameFindUniqueArgs extends GameFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Game base type for findFirst actions
   */
  export type GameFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Game to fetch.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     * 
    **/
    distinct?: Enumerable<GameScalarFieldEnum>
  }

  /**
   * Game: findFirst
   */
  export interface GameFindFirstArgs extends GameFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Game findMany
   */
  export type GameFindManyArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter, which Games to fetch.
     * 
    **/
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     * 
    **/
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     * 
    **/
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * Game create
   */
  export type GameCreateArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The data needed to create a Game.
     * 
    **/
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }


  /**
   * Game createMany
   */
  export type GameCreateManyArgs = {
    /**
     * The data used to create many Games.
     * 
    **/
    data: Enumerable<GameCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Game update
   */
  export type GameUpdateArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The data needed to update a Game.
     * 
    **/
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     * 
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs = {
    /**
     * The data used to update Games.
     * 
    **/
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     * 
    **/
    where?: GameWhereInput
  }


  /**
   * Game upsert
   */
  export type GameUpsertArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * The filter to search for the Game to update in case it exists.
     * 
    **/
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     * 
    **/
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }


  /**
   * Game delete
   */
  export type GameDeleteArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
    /**
     * Filter which Game to delete.
     * 
    **/
    where: GameWhereUniqueInput
  }


  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs = {
    /**
     * Filter which Games to delete
     * 
    **/
    where?: GameWhereInput
  }


  /**
   * Game: findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs = GameFindUniqueArgsBase
      

  /**
   * Game: findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs = GameFindFirstArgsBase
      

  /**
   * Game without action
   */
  export type GameArgs = {
    /**
     * Select specific fields to fetch from the Game
     * 
    **/
    select?: GameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GameInclude | null
  }



  /**
   * Model AutoLaunch
   */


  export type AggregateAutoLaunch = {
    _count: AutoLaunchCountAggregateOutputType | null
    _min: AutoLaunchMinAggregateOutputType | null
    _max: AutoLaunchMaxAggregateOutputType | null
  }

  export type AutoLaunchMinAggregateOutputType = {
    id: string | null
    launchOne: Launch | null
    launchTwo: Launch | null
    gameId: string | null
  }

  export type AutoLaunchMaxAggregateOutputType = {
    id: string | null
    launchOne: Launch | null
    launchTwo: Launch | null
    gameId: string | null
  }

  export type AutoLaunchCountAggregateOutputType = {
    id: number
    launchOne: number
    launchTwo: number
    gameId: number
    _all: number
  }


  export type AutoLaunchMinAggregateInputType = {
    id?: true
    launchOne?: true
    launchTwo?: true
    gameId?: true
  }

  export type AutoLaunchMaxAggregateInputType = {
    id?: true
    launchOne?: true
    launchTwo?: true
    gameId?: true
  }

  export type AutoLaunchCountAggregateInputType = {
    id?: true
    launchOne?: true
    launchTwo?: true
    gameId?: true
    _all?: true
  }

  export type AutoLaunchAggregateArgs = {
    /**
     * Filter which AutoLaunch to aggregate.
     * 
    **/
    where?: AutoLaunchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoLaunches to fetch.
     * 
    **/
    orderBy?: Enumerable<AutoLaunchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AutoLaunchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoLaunches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoLaunches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutoLaunches
    **/
    _count?: true | AutoLaunchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutoLaunchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutoLaunchMaxAggregateInputType
  }

  export type GetAutoLaunchAggregateType<T extends AutoLaunchAggregateArgs> = {
        [P in keyof T & keyof AggregateAutoLaunch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutoLaunch[P]>
      : GetScalarType<T[P], AggregateAutoLaunch[P]>
  }




  export type AutoLaunchGroupByArgs = {
    where?: AutoLaunchWhereInput
    orderBy?: Enumerable<AutoLaunchOrderByWithAggregationInput>
    by: Array<AutoLaunchScalarFieldEnum>
    having?: AutoLaunchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutoLaunchCountAggregateInputType | true
    _min?: AutoLaunchMinAggregateInputType
    _max?: AutoLaunchMaxAggregateInputType
  }


  export type AutoLaunchGroupByOutputType = {
    id: string
    launchOne: Launch
    launchTwo: Launch
    gameId: string
    _count: AutoLaunchCountAggregateOutputType | null
    _min: AutoLaunchMinAggregateOutputType | null
    _max: AutoLaunchMaxAggregateOutputType | null
  }

  type GetAutoLaunchGroupByPayload<T extends AutoLaunchGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AutoLaunchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutoLaunchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutoLaunchGroupByOutputType[P]>
            : GetScalarType<T[P], AutoLaunchGroupByOutputType[P]>
        }
      >
    >


  export type AutoLaunchSelect = {
    id?: boolean
    launchOne?: boolean
    launchTwo?: boolean
    game?: boolean | GameArgs
    gameId?: boolean
  }

  export type AutoLaunchInclude = {
    game?: boolean | GameArgs
  }

  export type AutoLaunchGetPayload<
    S extends boolean | null | undefined | AutoLaunchArgs,
    U = keyof S
      > = S extends true
        ? AutoLaunch
    : S extends undefined
    ? never
    : S extends AutoLaunchArgs | AutoLaunchFindManyArgs
    ?'include' extends U
    ? AutoLaunch  & {
    [P in TrueKeys<S['include']>]:
        P extends 'game' ? GameGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'game' ? GameGetPayload<S['select'][P]> :  P extends keyof AutoLaunch ? AutoLaunch[P] : never
  } 
    : AutoLaunch
  : AutoLaunch


  type AutoLaunchCountArgs = Merge<
    Omit<AutoLaunchFindManyArgs, 'select' | 'include'> & {
      select?: AutoLaunchCountAggregateInputType | true
    }
  >

  export interface AutoLaunchDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one AutoLaunch that matches the filter.
     * @param {AutoLaunchFindUniqueArgs} args - Arguments to find a AutoLaunch
     * @example
     * // Get one AutoLaunch
     * const autoLaunch = await prisma.autoLaunch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AutoLaunchFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AutoLaunchFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AutoLaunch'> extends True ? CheckSelect<T, Prisma__AutoLaunchClient<AutoLaunch>, Prisma__AutoLaunchClient<AutoLaunchGetPayload<T>>> : CheckSelect<T, Prisma__AutoLaunchClient<AutoLaunch | null >, Prisma__AutoLaunchClient<AutoLaunchGetPayload<T> | null >>

    /**
     * Find the first AutoLaunch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoLaunchFindFirstArgs} args - Arguments to find a AutoLaunch
     * @example
     * // Get one AutoLaunch
     * const autoLaunch = await prisma.autoLaunch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AutoLaunchFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AutoLaunchFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AutoLaunch'> extends True ? CheckSelect<T, Prisma__AutoLaunchClient<AutoLaunch>, Prisma__AutoLaunchClient<AutoLaunchGetPayload<T>>> : CheckSelect<T, Prisma__AutoLaunchClient<AutoLaunch | null >, Prisma__AutoLaunchClient<AutoLaunchGetPayload<T> | null >>

    /**
     * Find zero or more AutoLaunches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoLaunchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutoLaunches
     * const autoLaunches = await prisma.autoLaunch.findMany()
     * 
     * // Get first 10 AutoLaunches
     * const autoLaunches = await prisma.autoLaunch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autoLaunchWithIdOnly = await prisma.autoLaunch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AutoLaunchFindManyArgs>(
      args?: SelectSubset<T, AutoLaunchFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<AutoLaunch>>, PrismaPromise<Array<AutoLaunchGetPayload<T>>>>

    /**
     * Create a AutoLaunch.
     * @param {AutoLaunchCreateArgs} args - Arguments to create a AutoLaunch.
     * @example
     * // Create one AutoLaunch
     * const AutoLaunch = await prisma.autoLaunch.create({
     *   data: {
     *     // ... data to create a AutoLaunch
     *   }
     * })
     * 
    **/
    create<T extends AutoLaunchCreateArgs>(
      args: SelectSubset<T, AutoLaunchCreateArgs>
    ): CheckSelect<T, Prisma__AutoLaunchClient<AutoLaunch>, Prisma__AutoLaunchClient<AutoLaunchGetPayload<T>>>

    /**
     * Create many AutoLaunches.
     *     @param {AutoLaunchCreateManyArgs} args - Arguments to create many AutoLaunches.
     *     @example
     *     // Create many AutoLaunches
     *     const autoLaunch = await prisma.autoLaunch.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AutoLaunchCreateManyArgs>(
      args?: SelectSubset<T, AutoLaunchCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AutoLaunch.
     * @param {AutoLaunchDeleteArgs} args - Arguments to delete one AutoLaunch.
     * @example
     * // Delete one AutoLaunch
     * const AutoLaunch = await prisma.autoLaunch.delete({
     *   where: {
     *     // ... filter to delete one AutoLaunch
     *   }
     * })
     * 
    **/
    delete<T extends AutoLaunchDeleteArgs>(
      args: SelectSubset<T, AutoLaunchDeleteArgs>
    ): CheckSelect<T, Prisma__AutoLaunchClient<AutoLaunch>, Prisma__AutoLaunchClient<AutoLaunchGetPayload<T>>>

    /**
     * Update one AutoLaunch.
     * @param {AutoLaunchUpdateArgs} args - Arguments to update one AutoLaunch.
     * @example
     * // Update one AutoLaunch
     * const autoLaunch = await prisma.autoLaunch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AutoLaunchUpdateArgs>(
      args: SelectSubset<T, AutoLaunchUpdateArgs>
    ): CheckSelect<T, Prisma__AutoLaunchClient<AutoLaunch>, Prisma__AutoLaunchClient<AutoLaunchGetPayload<T>>>

    /**
     * Delete zero or more AutoLaunches.
     * @param {AutoLaunchDeleteManyArgs} args - Arguments to filter AutoLaunches to delete.
     * @example
     * // Delete a few AutoLaunches
     * const { count } = await prisma.autoLaunch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AutoLaunchDeleteManyArgs>(
      args?: SelectSubset<T, AutoLaunchDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutoLaunches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoLaunchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutoLaunches
     * const autoLaunch = await prisma.autoLaunch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AutoLaunchUpdateManyArgs>(
      args: SelectSubset<T, AutoLaunchUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AutoLaunch.
     * @param {AutoLaunchUpsertArgs} args - Arguments to update or create a AutoLaunch.
     * @example
     * // Update or create a AutoLaunch
     * const autoLaunch = await prisma.autoLaunch.upsert({
     *   create: {
     *     // ... data to create a AutoLaunch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutoLaunch we want to update
     *   }
     * })
    **/
    upsert<T extends AutoLaunchUpsertArgs>(
      args: SelectSubset<T, AutoLaunchUpsertArgs>
    ): CheckSelect<T, Prisma__AutoLaunchClient<AutoLaunch>, Prisma__AutoLaunchClient<AutoLaunchGetPayload<T>>>

    /**
     * Find one AutoLaunch that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AutoLaunchFindUniqueOrThrowArgs} args - Arguments to find a AutoLaunch
     * @example
     * // Get one AutoLaunch
     * const autoLaunch = await prisma.autoLaunch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AutoLaunchFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AutoLaunchFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AutoLaunchClient<AutoLaunch>, Prisma__AutoLaunchClient<AutoLaunchGetPayload<T>>>

    /**
     * Find the first AutoLaunch that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoLaunchFindFirstOrThrowArgs} args - Arguments to find a AutoLaunch
     * @example
     * // Get one AutoLaunch
     * const autoLaunch = await prisma.autoLaunch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AutoLaunchFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AutoLaunchFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AutoLaunchClient<AutoLaunch>, Prisma__AutoLaunchClient<AutoLaunchGetPayload<T>>>

    /**
     * Count the number of AutoLaunches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoLaunchCountArgs} args - Arguments to filter AutoLaunches to count.
     * @example
     * // Count the number of AutoLaunches
     * const count = await prisma.autoLaunch.count({
     *   where: {
     *     // ... the filter for the AutoLaunches we want to count
     *   }
     * })
    **/
    count<T extends AutoLaunchCountArgs>(
      args?: Subset<T, AutoLaunchCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutoLaunchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutoLaunch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoLaunchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutoLaunchAggregateArgs>(args: Subset<T, AutoLaunchAggregateArgs>): PrismaPromise<GetAutoLaunchAggregateType<T>>

    /**
     * Group by AutoLaunch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoLaunchGroupByArgs} args - Group by arguments.
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
      T extends AutoLaunchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutoLaunchGroupByArgs['orderBy'] }
        : { orderBy?: AutoLaunchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AutoLaunchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutoLaunchGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutoLaunch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AutoLaunchClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    game<T extends GameArgs = {}>(args?: Subset<T, GameArgs>): CheckSelect<T, Prisma__GameClient<Game | null >, Prisma__GameClient<GameGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * AutoLaunch base type for findUnique actions
   */
  export type AutoLaunchFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AutoLaunch
     * 
    **/
    select?: AutoLaunchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AutoLaunchInclude | null
    /**
     * Filter, which AutoLaunch to fetch.
     * 
    **/
    where: AutoLaunchWhereUniqueInput
  }

  /**
   * AutoLaunch: findUnique
   */
  export interface AutoLaunchFindUniqueArgs extends AutoLaunchFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AutoLaunch base type for findFirst actions
   */
  export type AutoLaunchFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AutoLaunch
     * 
    **/
    select?: AutoLaunchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AutoLaunchInclude | null
    /**
     * Filter, which AutoLaunch to fetch.
     * 
    **/
    where?: AutoLaunchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoLaunches to fetch.
     * 
    **/
    orderBy?: Enumerable<AutoLaunchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutoLaunches.
     * 
    **/
    cursor?: AutoLaunchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoLaunches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoLaunches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutoLaunches.
     * 
    **/
    distinct?: Enumerable<AutoLaunchScalarFieldEnum>
  }

  /**
   * AutoLaunch: findFirst
   */
  export interface AutoLaunchFindFirstArgs extends AutoLaunchFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AutoLaunch findMany
   */
  export type AutoLaunchFindManyArgs = {
    /**
     * Select specific fields to fetch from the AutoLaunch
     * 
    **/
    select?: AutoLaunchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AutoLaunchInclude | null
    /**
     * Filter, which AutoLaunches to fetch.
     * 
    **/
    where?: AutoLaunchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoLaunches to fetch.
     * 
    **/
    orderBy?: Enumerable<AutoLaunchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutoLaunches.
     * 
    **/
    cursor?: AutoLaunchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoLaunches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoLaunches.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AutoLaunchScalarFieldEnum>
  }


  /**
   * AutoLaunch create
   */
  export type AutoLaunchCreateArgs = {
    /**
     * Select specific fields to fetch from the AutoLaunch
     * 
    **/
    select?: AutoLaunchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AutoLaunchInclude | null
    /**
     * The data needed to create a AutoLaunch.
     * 
    **/
    data: XOR<AutoLaunchCreateInput, AutoLaunchUncheckedCreateInput>
  }


  /**
   * AutoLaunch createMany
   */
  export type AutoLaunchCreateManyArgs = {
    /**
     * The data used to create many AutoLaunches.
     * 
    **/
    data: Enumerable<AutoLaunchCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AutoLaunch update
   */
  export type AutoLaunchUpdateArgs = {
    /**
     * Select specific fields to fetch from the AutoLaunch
     * 
    **/
    select?: AutoLaunchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AutoLaunchInclude | null
    /**
     * The data needed to update a AutoLaunch.
     * 
    **/
    data: XOR<AutoLaunchUpdateInput, AutoLaunchUncheckedUpdateInput>
    /**
     * Choose, which AutoLaunch to update.
     * 
    **/
    where: AutoLaunchWhereUniqueInput
  }


  /**
   * AutoLaunch updateMany
   */
  export type AutoLaunchUpdateManyArgs = {
    /**
     * The data used to update AutoLaunches.
     * 
    **/
    data: XOR<AutoLaunchUpdateManyMutationInput, AutoLaunchUncheckedUpdateManyInput>
    /**
     * Filter which AutoLaunches to update
     * 
    **/
    where?: AutoLaunchWhereInput
  }


  /**
   * AutoLaunch upsert
   */
  export type AutoLaunchUpsertArgs = {
    /**
     * Select specific fields to fetch from the AutoLaunch
     * 
    **/
    select?: AutoLaunchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AutoLaunchInclude | null
    /**
     * The filter to search for the AutoLaunch to update in case it exists.
     * 
    **/
    where: AutoLaunchWhereUniqueInput
    /**
     * In case the AutoLaunch found by the `where` argument doesn't exist, create a new AutoLaunch with this data.
     * 
    **/
    create: XOR<AutoLaunchCreateInput, AutoLaunchUncheckedCreateInput>
    /**
     * In case the AutoLaunch was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AutoLaunchUpdateInput, AutoLaunchUncheckedUpdateInput>
  }


  /**
   * AutoLaunch delete
   */
  export type AutoLaunchDeleteArgs = {
    /**
     * Select specific fields to fetch from the AutoLaunch
     * 
    **/
    select?: AutoLaunchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AutoLaunchInclude | null
    /**
     * Filter which AutoLaunch to delete.
     * 
    **/
    where: AutoLaunchWhereUniqueInput
  }


  /**
   * AutoLaunch deleteMany
   */
  export type AutoLaunchDeleteManyArgs = {
    /**
     * Filter which AutoLaunches to delete
     * 
    **/
    where?: AutoLaunchWhereInput
  }


  /**
   * AutoLaunch: findUniqueOrThrow
   */
  export type AutoLaunchFindUniqueOrThrowArgs = AutoLaunchFindUniqueArgsBase
      

  /**
   * AutoLaunch: findFirstOrThrow
   */
  export type AutoLaunchFindFirstOrThrowArgs = AutoLaunchFindFirstArgsBase
      

  /**
   * AutoLaunch without action
   */
  export type AutoLaunchArgs = {
    /**
     * Select specific fields to fetch from the AutoLaunch
     * 
    **/
    select?: AutoLaunchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AutoLaunchInclude | null
  }



  /**
   * Model Marker
   */


  export type AggregateMarker = {
    _count: MarkerCountAggregateOutputType | null
    _avg: MarkerAvgAggregateOutputType | null
    _sum: MarkerSumAggregateOutputType | null
    _min: MarkerMinAggregateOutputType | null
    _max: MarkerMaxAggregateOutputType | null
  }

  export type MarkerAvgAggregateOutputType = {
    left: number | null
    top: number | null
  }

  export type MarkerSumAggregateOutputType = {
    left: number | null
    top: number | null
  }

  export type MarkerMinAggregateOutputType = {
    id: string | null
    left: number | null
    top: number | null
    launchOne: Launch | null
    launchTwo: Launch | null
    gameId: string | null
  }

  export type MarkerMaxAggregateOutputType = {
    id: string | null
    left: number | null
    top: number | null
    launchOne: Launch | null
    launchTwo: Launch | null
    gameId: string | null
  }

  export type MarkerCountAggregateOutputType = {
    id: number
    left: number
    top: number
    launchOne: number
    launchTwo: number
    gameId: number
    _all: number
  }


  export type MarkerAvgAggregateInputType = {
    left?: true
    top?: true
  }

  export type MarkerSumAggregateInputType = {
    left?: true
    top?: true
  }

  export type MarkerMinAggregateInputType = {
    id?: true
    left?: true
    top?: true
    launchOne?: true
    launchTwo?: true
    gameId?: true
  }

  export type MarkerMaxAggregateInputType = {
    id?: true
    left?: true
    top?: true
    launchOne?: true
    launchTwo?: true
    gameId?: true
  }

  export type MarkerCountAggregateInputType = {
    id?: true
    left?: true
    top?: true
    launchOne?: true
    launchTwo?: true
    gameId?: true
    _all?: true
  }

  export type MarkerAggregateArgs = {
    /**
     * Filter which Marker to aggregate.
     * 
    **/
    where?: MarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markers to fetch.
     * 
    **/
    orderBy?: Enumerable<MarkerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markers
    **/
    _count?: true | MarkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarkerMaxAggregateInputType
  }

  export type GetMarkerAggregateType<T extends MarkerAggregateArgs> = {
        [P in keyof T & keyof AggregateMarker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarker[P]>
      : GetScalarType<T[P], AggregateMarker[P]>
  }




  export type MarkerGroupByArgs = {
    where?: MarkerWhereInput
    orderBy?: Enumerable<MarkerOrderByWithAggregationInput>
    by: Array<MarkerScalarFieldEnum>
    having?: MarkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarkerCountAggregateInputType | true
    _avg?: MarkerAvgAggregateInputType
    _sum?: MarkerSumAggregateInputType
    _min?: MarkerMinAggregateInputType
    _max?: MarkerMaxAggregateInputType
  }


  export type MarkerGroupByOutputType = {
    id: string
    left: number
    top: number
    launchOne: Launch
    launchTwo: Launch
    gameId: string | null
    _count: MarkerCountAggregateOutputType | null
    _avg: MarkerAvgAggregateOutputType | null
    _sum: MarkerSumAggregateOutputType | null
    _min: MarkerMinAggregateOutputType | null
    _max: MarkerMaxAggregateOutputType | null
  }

  type GetMarkerGroupByPayload<T extends MarkerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MarkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarkerGroupByOutputType[P]>
            : GetScalarType<T[P], MarkerGroupByOutputType[P]>
        }
      >
    >


  export type MarkerSelect = {
    id?: boolean
    left?: boolean
    top?: boolean
    launchOne?: boolean
    launchTwo?: boolean
    Game?: boolean | GameArgs
    gameId?: boolean
  }

  export type MarkerInclude = {
    Game?: boolean | GameArgs
  }

  export type MarkerGetPayload<
    S extends boolean | null | undefined | MarkerArgs,
    U = keyof S
      > = S extends true
        ? Marker
    : S extends undefined
    ? never
    : S extends MarkerArgs | MarkerFindManyArgs
    ?'include' extends U
    ? Marker  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Game' ? GameGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Game' ? GameGetPayload<S['select'][P]> | null :  P extends keyof Marker ? Marker[P] : never
  } 
    : Marker
  : Marker


  type MarkerCountArgs = Merge<
    Omit<MarkerFindManyArgs, 'select' | 'include'> & {
      select?: MarkerCountAggregateInputType | true
    }
  >

  export interface MarkerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Marker that matches the filter.
     * @param {MarkerFindUniqueArgs} args - Arguments to find a Marker
     * @example
     * // Get one Marker
     * const marker = await prisma.marker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MarkerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MarkerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Marker'> extends True ? CheckSelect<T, Prisma__MarkerClient<Marker>, Prisma__MarkerClient<MarkerGetPayload<T>>> : CheckSelect<T, Prisma__MarkerClient<Marker | null >, Prisma__MarkerClient<MarkerGetPayload<T> | null >>

    /**
     * Find the first Marker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerFindFirstArgs} args - Arguments to find a Marker
     * @example
     * // Get one Marker
     * const marker = await prisma.marker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MarkerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MarkerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Marker'> extends True ? CheckSelect<T, Prisma__MarkerClient<Marker>, Prisma__MarkerClient<MarkerGetPayload<T>>> : CheckSelect<T, Prisma__MarkerClient<Marker | null >, Prisma__MarkerClient<MarkerGetPayload<T> | null >>

    /**
     * Find zero or more Markers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markers
     * const markers = await prisma.marker.findMany()
     * 
     * // Get first 10 Markers
     * const markers = await prisma.marker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const markerWithIdOnly = await prisma.marker.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MarkerFindManyArgs>(
      args?: SelectSubset<T, MarkerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Marker>>, PrismaPromise<Array<MarkerGetPayload<T>>>>

    /**
     * Create a Marker.
     * @param {MarkerCreateArgs} args - Arguments to create a Marker.
     * @example
     * // Create one Marker
     * const Marker = await prisma.marker.create({
     *   data: {
     *     // ... data to create a Marker
     *   }
     * })
     * 
    **/
    create<T extends MarkerCreateArgs>(
      args: SelectSubset<T, MarkerCreateArgs>
    ): CheckSelect<T, Prisma__MarkerClient<Marker>, Prisma__MarkerClient<MarkerGetPayload<T>>>

    /**
     * Create many Markers.
     *     @param {MarkerCreateManyArgs} args - Arguments to create many Markers.
     *     @example
     *     // Create many Markers
     *     const marker = await prisma.marker.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MarkerCreateManyArgs>(
      args?: SelectSubset<T, MarkerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Marker.
     * @param {MarkerDeleteArgs} args - Arguments to delete one Marker.
     * @example
     * // Delete one Marker
     * const Marker = await prisma.marker.delete({
     *   where: {
     *     // ... filter to delete one Marker
     *   }
     * })
     * 
    **/
    delete<T extends MarkerDeleteArgs>(
      args: SelectSubset<T, MarkerDeleteArgs>
    ): CheckSelect<T, Prisma__MarkerClient<Marker>, Prisma__MarkerClient<MarkerGetPayload<T>>>

    /**
     * Update one Marker.
     * @param {MarkerUpdateArgs} args - Arguments to update one Marker.
     * @example
     * // Update one Marker
     * const marker = await prisma.marker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MarkerUpdateArgs>(
      args: SelectSubset<T, MarkerUpdateArgs>
    ): CheckSelect<T, Prisma__MarkerClient<Marker>, Prisma__MarkerClient<MarkerGetPayload<T>>>

    /**
     * Delete zero or more Markers.
     * @param {MarkerDeleteManyArgs} args - Arguments to filter Markers to delete.
     * @example
     * // Delete a few Markers
     * const { count } = await prisma.marker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MarkerDeleteManyArgs>(
      args?: SelectSubset<T, MarkerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markers
     * const marker = await prisma.marker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MarkerUpdateManyArgs>(
      args: SelectSubset<T, MarkerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Marker.
     * @param {MarkerUpsertArgs} args - Arguments to update or create a Marker.
     * @example
     * // Update or create a Marker
     * const marker = await prisma.marker.upsert({
     *   create: {
     *     // ... data to create a Marker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marker we want to update
     *   }
     * })
    **/
    upsert<T extends MarkerUpsertArgs>(
      args: SelectSubset<T, MarkerUpsertArgs>
    ): CheckSelect<T, Prisma__MarkerClient<Marker>, Prisma__MarkerClient<MarkerGetPayload<T>>>

    /**
     * Find one Marker that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MarkerFindUniqueOrThrowArgs} args - Arguments to find a Marker
     * @example
     * // Get one Marker
     * const marker = await prisma.marker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MarkerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MarkerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MarkerClient<Marker>, Prisma__MarkerClient<MarkerGetPayload<T>>>

    /**
     * Find the first Marker that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerFindFirstOrThrowArgs} args - Arguments to find a Marker
     * @example
     * // Get one Marker
     * const marker = await prisma.marker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MarkerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MarkerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MarkerClient<Marker>, Prisma__MarkerClient<MarkerGetPayload<T>>>

    /**
     * Count the number of Markers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerCountArgs} args - Arguments to filter Markers to count.
     * @example
     * // Count the number of Markers
     * const count = await prisma.marker.count({
     *   where: {
     *     // ... the filter for the Markers we want to count
     *   }
     * })
    **/
    count<T extends MarkerCountArgs>(
      args?: Subset<T, MarkerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarkerAggregateArgs>(args: Subset<T, MarkerAggregateArgs>): PrismaPromise<GetMarkerAggregateType<T>>

    /**
     * Group by Marker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerGroupByArgs} args - Group by arguments.
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
      T extends MarkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarkerGroupByArgs['orderBy'] }
        : { orderBy?: MarkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MarkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarkerGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MarkerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Game<T extends GameArgs = {}>(args?: Subset<T, GameArgs>): CheckSelect<T, Prisma__GameClient<Game | null >, Prisma__GameClient<GameGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Marker base type for findUnique actions
   */
  export type MarkerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Marker
     * 
    **/
    select?: MarkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarkerInclude | null
    /**
     * Filter, which Marker to fetch.
     * 
    **/
    where: MarkerWhereUniqueInput
  }

  /**
   * Marker: findUnique
   */
  export interface MarkerFindUniqueArgs extends MarkerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Marker base type for findFirst actions
   */
  export type MarkerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Marker
     * 
    **/
    select?: MarkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarkerInclude | null
    /**
     * Filter, which Marker to fetch.
     * 
    **/
    where?: MarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markers to fetch.
     * 
    **/
    orderBy?: Enumerable<MarkerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markers.
     * 
    **/
    cursor?: MarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markers.
     * 
    **/
    distinct?: Enumerable<MarkerScalarFieldEnum>
  }

  /**
   * Marker: findFirst
   */
  export interface MarkerFindFirstArgs extends MarkerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Marker findMany
   */
  export type MarkerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Marker
     * 
    **/
    select?: MarkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarkerInclude | null
    /**
     * Filter, which Markers to fetch.
     * 
    **/
    where?: MarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markers to fetch.
     * 
    **/
    orderBy?: Enumerable<MarkerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markers.
     * 
    **/
    cursor?: MarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MarkerScalarFieldEnum>
  }


  /**
   * Marker create
   */
  export type MarkerCreateArgs = {
    /**
     * Select specific fields to fetch from the Marker
     * 
    **/
    select?: MarkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarkerInclude | null
    /**
     * The data needed to create a Marker.
     * 
    **/
    data: XOR<MarkerCreateInput, MarkerUncheckedCreateInput>
  }


  /**
   * Marker createMany
   */
  export type MarkerCreateManyArgs = {
    /**
     * The data used to create many Markers.
     * 
    **/
    data: Enumerable<MarkerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Marker update
   */
  export type MarkerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Marker
     * 
    **/
    select?: MarkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarkerInclude | null
    /**
     * The data needed to update a Marker.
     * 
    **/
    data: XOR<MarkerUpdateInput, MarkerUncheckedUpdateInput>
    /**
     * Choose, which Marker to update.
     * 
    **/
    where: MarkerWhereUniqueInput
  }


  /**
   * Marker updateMany
   */
  export type MarkerUpdateManyArgs = {
    /**
     * The data used to update Markers.
     * 
    **/
    data: XOR<MarkerUpdateManyMutationInput, MarkerUncheckedUpdateManyInput>
    /**
     * Filter which Markers to update
     * 
    **/
    where?: MarkerWhereInput
  }


  /**
   * Marker upsert
   */
  export type MarkerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Marker
     * 
    **/
    select?: MarkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarkerInclude | null
    /**
     * The filter to search for the Marker to update in case it exists.
     * 
    **/
    where: MarkerWhereUniqueInput
    /**
     * In case the Marker found by the `where` argument doesn't exist, create a new Marker with this data.
     * 
    **/
    create: XOR<MarkerCreateInput, MarkerUncheckedCreateInput>
    /**
     * In case the Marker was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MarkerUpdateInput, MarkerUncheckedUpdateInput>
  }


  /**
   * Marker delete
   */
  export type MarkerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Marker
     * 
    **/
    select?: MarkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarkerInclude | null
    /**
     * Filter which Marker to delete.
     * 
    **/
    where: MarkerWhereUniqueInput
  }


  /**
   * Marker deleteMany
   */
  export type MarkerDeleteManyArgs = {
    /**
     * Filter which Markers to delete
     * 
    **/
    where?: MarkerWhereInput
  }


  /**
   * Marker: findUniqueOrThrow
   */
  export type MarkerFindUniqueOrThrowArgs = MarkerFindUniqueArgsBase
      

  /**
   * Marker: findFirstOrThrow
   */
  export type MarkerFindFirstOrThrowArgs = MarkerFindFirstArgsBase
      

  /**
   * Marker without action
   */
  export type MarkerArgs = {
    /**
     * Select specific fields to fetch from the Marker
     * 
    **/
    select?: MarkerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarkerInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const GameScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cargoRP: 'cargoRP',
    climbBar: 'climbBar',
    climpRP: 'climpRP',
    weWin: 'weWin',
    ourTeam: 'ourTeam',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const AutoLaunchScalarFieldEnum: {
    id: 'id',
    launchOne: 'launchOne',
    launchTwo: 'launchTwo',
    gameId: 'gameId'
  };

  export type AutoLaunchScalarFieldEnum = (typeof AutoLaunchScalarFieldEnum)[keyof typeof AutoLaunchScalarFieldEnum]


  export const MarkerScalarFieldEnum: {
    id: 'id',
    left: 'left',
    top: 'top',
    launchOne: 'launchOne',
    launchTwo: 'launchTwo',
    gameId: 'gameId'
  };

  export type MarkerScalarFieldEnum = (typeof MarkerScalarFieldEnum)[keyof typeof MarkerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type GameWhereInput = {
    AND?: Enumerable<GameWhereInput>
    OR?: Enumerable<GameWhereInput>
    NOT?: Enumerable<GameWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    autoBalls?: XOR<AutoLaunchRelationFilter, AutoLaunchWhereInput> | null
    markers?: MarkerListRelationFilter
    cargoRP?: IntFilter | number
    climbBar?: EnumClimbBarFilter | ClimbBar
    climpRP?: IntFilter | number
    weWin?: EnumWinFilter | Win
    ourTeam?: EnumTeamFilter | Team
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    autoBalls?: AutoLaunchOrderByWithRelationInput
    markers?: MarkerOrderByRelationAggregateInput
    cargoRP?: SortOrder
    climbBar?: SortOrder
    climpRP?: SortOrder
    weWin?: SortOrder
    ourTeam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameWhereUniqueInput = {
    id?: string
  }

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cargoRP?: SortOrder
    climbBar?: SortOrder
    climpRP?: SortOrder
    weWin?: SortOrder
    ourTeam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    cargoRP?: IntWithAggregatesFilter | number
    climbBar?: EnumClimbBarWithAggregatesFilter | ClimbBar
    climpRP?: IntWithAggregatesFilter | number
    weWin?: EnumWinWithAggregatesFilter | Win
    ourTeam?: EnumTeamWithAggregatesFilter | Team
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AutoLaunchWhereInput = {
    AND?: Enumerable<AutoLaunchWhereInput>
    OR?: Enumerable<AutoLaunchWhereInput>
    NOT?: Enumerable<AutoLaunchWhereInput>
    id?: StringFilter | string
    launchOne?: EnumLaunchFilter | Launch
    launchTwo?: EnumLaunchFilter | Launch
    game?: XOR<GameRelationFilter, GameWhereInput>
    gameId?: StringFilter | string
  }

  export type AutoLaunchOrderByWithRelationInput = {
    id?: SortOrder
    launchOne?: SortOrder
    launchTwo?: SortOrder
    game?: GameOrderByWithRelationInput
    gameId?: SortOrder
  }

  export type AutoLaunchWhereUniqueInput = {
    id?: string
    gameId?: string
  }

  export type AutoLaunchOrderByWithAggregationInput = {
    id?: SortOrder
    launchOne?: SortOrder
    launchTwo?: SortOrder
    gameId?: SortOrder
    _count?: AutoLaunchCountOrderByAggregateInput
    _max?: AutoLaunchMaxOrderByAggregateInput
    _min?: AutoLaunchMinOrderByAggregateInput
  }

  export type AutoLaunchScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AutoLaunchScalarWhereWithAggregatesInput>
    OR?: Enumerable<AutoLaunchScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AutoLaunchScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    launchOne?: EnumLaunchWithAggregatesFilter | Launch
    launchTwo?: EnumLaunchWithAggregatesFilter | Launch
    gameId?: StringWithAggregatesFilter | string
  }

  export type MarkerWhereInput = {
    AND?: Enumerable<MarkerWhereInput>
    OR?: Enumerable<MarkerWhereInput>
    NOT?: Enumerable<MarkerWhereInput>
    id?: StringFilter | string
    left?: FloatFilter | number
    top?: FloatFilter | number
    launchOne?: EnumLaunchFilter | Launch
    launchTwo?: EnumLaunchFilter | Launch
    Game?: XOR<GameRelationFilter, GameWhereInput> | null
    gameId?: StringNullableFilter | string | null
  }

  export type MarkerOrderByWithRelationInput = {
    id?: SortOrder
    left?: SortOrder
    top?: SortOrder
    launchOne?: SortOrder
    launchTwo?: SortOrder
    Game?: GameOrderByWithRelationInput
    gameId?: SortOrder
  }

  export type MarkerWhereUniqueInput = {
    id?: string
  }

  export type MarkerOrderByWithAggregationInput = {
    id?: SortOrder
    left?: SortOrder
    top?: SortOrder
    launchOne?: SortOrder
    launchTwo?: SortOrder
    gameId?: SortOrder
    _count?: MarkerCountOrderByAggregateInput
    _avg?: MarkerAvgOrderByAggregateInput
    _max?: MarkerMaxOrderByAggregateInput
    _min?: MarkerMinOrderByAggregateInput
    _sum?: MarkerSumOrderByAggregateInput
  }

  export type MarkerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MarkerScalarWhereWithAggregatesInput>
    OR?: Enumerable<MarkerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MarkerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    left?: FloatWithAggregatesFilter | number
    top?: FloatWithAggregatesFilter | number
    launchOne?: EnumLaunchWithAggregatesFilter | Launch
    launchTwo?: EnumLaunchWithAggregatesFilter | Launch
    gameId?: StringNullableWithAggregatesFilter | string | null
  }

  export type GameCreateInput = {
    id?: string
    name: string
    autoBalls?: AutoLaunchCreateNestedOneWithoutGameInput
    markers?: MarkerCreateNestedManyWithoutGameInput
    cargoRP: number
    climbBar: ClimbBar
    climpRP: number
    weWin: Win
    ourTeam: Team
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUncheckedCreateInput = {
    id?: string
    name: string
    autoBalls?: AutoLaunchUncheckedCreateNestedOneWithoutGameInput
    markers?: MarkerUncheckedCreateNestedManyWithoutGameInput
    cargoRP: number
    climbBar: ClimbBar
    climpRP: number
    weWin: Win
    ourTeam: Team
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    autoBalls?: AutoLaunchUpdateOneWithoutGameNestedInput
    markers?: MarkerUpdateManyWithoutGameNestedInput
    cargoRP?: IntFieldUpdateOperationsInput | number
    climbBar?: EnumClimbBarFieldUpdateOperationsInput | ClimbBar
    climpRP?: IntFieldUpdateOperationsInput | number
    weWin?: EnumWinFieldUpdateOperationsInput | Win
    ourTeam?: EnumTeamFieldUpdateOperationsInput | Team
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    autoBalls?: AutoLaunchUncheckedUpdateOneWithoutGameNestedInput
    markers?: MarkerUncheckedUpdateManyWithoutGameNestedInput
    cargoRP?: IntFieldUpdateOperationsInput | number
    climbBar?: EnumClimbBarFieldUpdateOperationsInput | ClimbBar
    climpRP?: IntFieldUpdateOperationsInput | number
    weWin?: EnumWinFieldUpdateOperationsInput | Win
    ourTeam?: EnumTeamFieldUpdateOperationsInput | Team
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateManyInput = {
    id?: string
    name: string
    cargoRP: number
    climbBar: ClimbBar
    climpRP: number
    weWin: Win
    ourTeam: Team
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cargoRP?: IntFieldUpdateOperationsInput | number
    climbBar?: EnumClimbBarFieldUpdateOperationsInput | ClimbBar
    climpRP?: IntFieldUpdateOperationsInput | number
    weWin?: EnumWinFieldUpdateOperationsInput | Win
    ourTeam?: EnumTeamFieldUpdateOperationsInput | Team
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cargoRP?: IntFieldUpdateOperationsInput | number
    climbBar?: EnumClimbBarFieldUpdateOperationsInput | ClimbBar
    climpRP?: IntFieldUpdateOperationsInput | number
    weWin?: EnumWinFieldUpdateOperationsInput | Win
    ourTeam?: EnumTeamFieldUpdateOperationsInput | Team
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutoLaunchCreateInput = {
    id?: string
    launchOne: Launch
    launchTwo: Launch
    game: GameCreateNestedOneWithoutAutoBallsInput
  }

  export type AutoLaunchUncheckedCreateInput = {
    id?: string
    launchOne: Launch
    launchTwo: Launch
    gameId: string
  }

  export type AutoLaunchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
    game?: GameUpdateOneRequiredWithoutAutoBallsNestedInput
  }

  export type AutoLaunchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type AutoLaunchCreateManyInput = {
    id?: string
    launchOne: Launch
    launchTwo: Launch
    gameId: string
  }

  export type AutoLaunchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
  }

  export type AutoLaunchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
    gameId?: StringFieldUpdateOperationsInput | string
  }

  export type MarkerCreateInput = {
    id?: string
    left: number
    top: number
    launchOne: Launch
    launchTwo: Launch
    Game?: GameCreateNestedOneWithoutMarkersInput
  }

  export type MarkerUncheckedCreateInput = {
    id?: string
    left: number
    top: number
    launchOne: Launch
    launchTwo: Launch
    gameId?: string | null
  }

  export type MarkerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
    Game?: GameUpdateOneWithoutMarkersNestedInput
  }

  export type MarkerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarkerCreateManyInput = {
    id?: string
    left: number
    top: number
    launchOne: Launch
    launchTwo: Launch
    gameId?: string | null
  }

  export type MarkerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
  }

  export type MarkerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
    gameId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type AutoLaunchRelationFilter = {
    is?: AutoLaunchWhereInput | null
    isNot?: AutoLaunchWhereInput | null
  }

  export type MarkerListRelationFilter = {
    every?: MarkerWhereInput
    some?: MarkerWhereInput
    none?: MarkerWhereInput
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumClimbBarFilter = {
    equals?: ClimbBar
    in?: Enumerable<ClimbBar>
    notIn?: Enumerable<ClimbBar>
    not?: NestedEnumClimbBarFilter | ClimbBar
  }

  export type EnumWinFilter = {
    equals?: Win
    in?: Enumerable<Win>
    notIn?: Enumerable<Win>
    not?: NestedEnumWinFilter | Win
  }

  export type EnumTeamFilter = {
    equals?: Team
    in?: Enumerable<Team>
    notIn?: Enumerable<Team>
    not?: NestedEnumTeamFilter | Team
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type MarkerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cargoRP?: SortOrder
    climbBar?: SortOrder
    climpRP?: SortOrder
    weWin?: SortOrder
    ourTeam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    cargoRP?: SortOrder
    climpRP?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cargoRP?: SortOrder
    climbBar?: SortOrder
    climpRP?: SortOrder
    weWin?: SortOrder
    ourTeam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cargoRP?: SortOrder
    climbBar?: SortOrder
    climpRP?: SortOrder
    weWin?: SortOrder
    ourTeam?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    cargoRP?: SortOrder
    climpRP?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumClimbBarWithAggregatesFilter = {
    equals?: ClimbBar
    in?: Enumerable<ClimbBar>
    notIn?: Enumerable<ClimbBar>
    not?: NestedEnumClimbBarWithAggregatesFilter | ClimbBar
    _count?: NestedIntFilter
    _min?: NestedEnumClimbBarFilter
    _max?: NestedEnumClimbBarFilter
  }

  export type EnumWinWithAggregatesFilter = {
    equals?: Win
    in?: Enumerable<Win>
    notIn?: Enumerable<Win>
    not?: NestedEnumWinWithAggregatesFilter | Win
    _count?: NestedIntFilter
    _min?: NestedEnumWinFilter
    _max?: NestedEnumWinFilter
  }

  export type EnumTeamWithAggregatesFilter = {
    equals?: Team
    in?: Enumerable<Team>
    notIn?: Enumerable<Team>
    not?: NestedEnumTeamWithAggregatesFilter | Team
    _count?: NestedIntFilter
    _min?: NestedEnumTeamFilter
    _max?: NestedEnumTeamFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumLaunchFilter = {
    equals?: Launch
    in?: Enumerable<Launch>
    notIn?: Enumerable<Launch>
    not?: NestedEnumLaunchFilter | Launch
  }

  export type GameRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type AutoLaunchCountOrderByAggregateInput = {
    id?: SortOrder
    launchOne?: SortOrder
    launchTwo?: SortOrder
    gameId?: SortOrder
  }

  export type AutoLaunchMaxOrderByAggregateInput = {
    id?: SortOrder
    launchOne?: SortOrder
    launchTwo?: SortOrder
    gameId?: SortOrder
  }

  export type AutoLaunchMinOrderByAggregateInput = {
    id?: SortOrder
    launchOne?: SortOrder
    launchTwo?: SortOrder
    gameId?: SortOrder
  }

  export type EnumLaunchWithAggregatesFilter = {
    equals?: Launch
    in?: Enumerable<Launch>
    notIn?: Enumerable<Launch>
    not?: NestedEnumLaunchWithAggregatesFilter | Launch
    _count?: NestedIntFilter
    _min?: NestedEnumLaunchFilter
    _max?: NestedEnumLaunchFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type MarkerCountOrderByAggregateInput = {
    id?: SortOrder
    left?: SortOrder
    top?: SortOrder
    launchOne?: SortOrder
    launchTwo?: SortOrder
    gameId?: SortOrder
  }

  export type MarkerAvgOrderByAggregateInput = {
    left?: SortOrder
    top?: SortOrder
  }

  export type MarkerMaxOrderByAggregateInput = {
    id?: SortOrder
    left?: SortOrder
    top?: SortOrder
    launchOne?: SortOrder
    launchTwo?: SortOrder
    gameId?: SortOrder
  }

  export type MarkerMinOrderByAggregateInput = {
    id?: SortOrder
    left?: SortOrder
    top?: SortOrder
    launchOne?: SortOrder
    launchTwo?: SortOrder
    gameId?: SortOrder
  }

  export type MarkerSumOrderByAggregateInput = {
    left?: SortOrder
    top?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type AutoLaunchCreateNestedOneWithoutGameInput = {
    create?: XOR<AutoLaunchCreateWithoutGameInput, AutoLaunchUncheckedCreateWithoutGameInput>
    connectOrCreate?: AutoLaunchCreateOrConnectWithoutGameInput
    connect?: AutoLaunchWhereUniqueInput
  }

  export type MarkerCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<MarkerCreateWithoutGameInput>, Enumerable<MarkerUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<MarkerCreateOrConnectWithoutGameInput>
    createMany?: MarkerCreateManyGameInputEnvelope
    connect?: Enumerable<MarkerWhereUniqueInput>
  }

  export type AutoLaunchUncheckedCreateNestedOneWithoutGameInput = {
    create?: XOR<AutoLaunchCreateWithoutGameInput, AutoLaunchUncheckedCreateWithoutGameInput>
    connectOrCreate?: AutoLaunchCreateOrConnectWithoutGameInput
    connect?: AutoLaunchWhereUniqueInput
  }

  export type MarkerUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<MarkerCreateWithoutGameInput>, Enumerable<MarkerUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<MarkerCreateOrConnectWithoutGameInput>
    createMany?: MarkerCreateManyGameInputEnvelope
    connect?: Enumerable<MarkerWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AutoLaunchUpdateOneWithoutGameNestedInput = {
    create?: XOR<AutoLaunchCreateWithoutGameInput, AutoLaunchUncheckedCreateWithoutGameInput>
    connectOrCreate?: AutoLaunchCreateOrConnectWithoutGameInput
    upsert?: AutoLaunchUpsertWithoutGameInput
    disconnect?: boolean
    delete?: boolean
    connect?: AutoLaunchWhereUniqueInput
    update?: XOR<AutoLaunchUpdateWithoutGameInput, AutoLaunchUncheckedUpdateWithoutGameInput>
  }

  export type MarkerUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<MarkerCreateWithoutGameInput>, Enumerable<MarkerUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<MarkerCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<MarkerUpsertWithWhereUniqueWithoutGameInput>
    createMany?: MarkerCreateManyGameInputEnvelope
    set?: Enumerable<MarkerWhereUniqueInput>
    disconnect?: Enumerable<MarkerWhereUniqueInput>
    delete?: Enumerable<MarkerWhereUniqueInput>
    connect?: Enumerable<MarkerWhereUniqueInput>
    update?: Enumerable<MarkerUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<MarkerUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<MarkerScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumClimbBarFieldUpdateOperationsInput = {
    set?: ClimbBar
  }

  export type EnumWinFieldUpdateOperationsInput = {
    set?: Win
  }

  export type EnumTeamFieldUpdateOperationsInput = {
    set?: Team
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AutoLaunchUncheckedUpdateOneWithoutGameNestedInput = {
    create?: XOR<AutoLaunchCreateWithoutGameInput, AutoLaunchUncheckedCreateWithoutGameInput>
    connectOrCreate?: AutoLaunchCreateOrConnectWithoutGameInput
    upsert?: AutoLaunchUpsertWithoutGameInput
    disconnect?: boolean
    delete?: boolean
    connect?: AutoLaunchWhereUniqueInput
    update?: XOR<AutoLaunchUpdateWithoutGameInput, AutoLaunchUncheckedUpdateWithoutGameInput>
  }

  export type MarkerUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<MarkerCreateWithoutGameInput>, Enumerable<MarkerUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<MarkerCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<MarkerUpsertWithWhereUniqueWithoutGameInput>
    createMany?: MarkerCreateManyGameInputEnvelope
    set?: Enumerable<MarkerWhereUniqueInput>
    disconnect?: Enumerable<MarkerWhereUniqueInput>
    delete?: Enumerable<MarkerWhereUniqueInput>
    connect?: Enumerable<MarkerWhereUniqueInput>
    update?: Enumerable<MarkerUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<MarkerUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<MarkerScalarWhereInput>
  }

  export type GameCreateNestedOneWithoutAutoBallsInput = {
    create?: XOR<GameCreateWithoutAutoBallsInput, GameUncheckedCreateWithoutAutoBallsInput>
    connectOrCreate?: GameCreateOrConnectWithoutAutoBallsInput
    connect?: GameWhereUniqueInput
  }

  export type EnumLaunchFieldUpdateOperationsInput = {
    set?: Launch
  }

  export type GameUpdateOneRequiredWithoutAutoBallsNestedInput = {
    create?: XOR<GameCreateWithoutAutoBallsInput, GameUncheckedCreateWithoutAutoBallsInput>
    connectOrCreate?: GameCreateOrConnectWithoutAutoBallsInput
    upsert?: GameUpsertWithoutAutoBallsInput
    connect?: GameWhereUniqueInput
    update?: XOR<GameUpdateWithoutAutoBallsInput, GameUncheckedUpdateWithoutAutoBallsInput>
  }

  export type GameCreateNestedOneWithoutMarkersInput = {
    create?: XOR<GameCreateWithoutMarkersInput, GameUncheckedCreateWithoutMarkersInput>
    connectOrCreate?: GameCreateOrConnectWithoutMarkersInput
    connect?: GameWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameUpdateOneWithoutMarkersNestedInput = {
    create?: XOR<GameCreateWithoutMarkersInput, GameUncheckedCreateWithoutMarkersInput>
    connectOrCreate?: GameCreateOrConnectWithoutMarkersInput
    upsert?: GameUpsertWithoutMarkersInput
    disconnect?: boolean
    delete?: boolean
    connect?: GameWhereUniqueInput
    update?: XOR<GameUpdateWithoutMarkersInput, GameUncheckedUpdateWithoutMarkersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumClimbBarFilter = {
    equals?: ClimbBar
    in?: Enumerable<ClimbBar>
    notIn?: Enumerable<ClimbBar>
    not?: NestedEnumClimbBarFilter | ClimbBar
  }

  export type NestedEnumWinFilter = {
    equals?: Win
    in?: Enumerable<Win>
    notIn?: Enumerable<Win>
    not?: NestedEnumWinFilter | Win
  }

  export type NestedEnumTeamFilter = {
    equals?: Team
    in?: Enumerable<Team>
    notIn?: Enumerable<Team>
    not?: NestedEnumTeamFilter | Team
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumClimbBarWithAggregatesFilter = {
    equals?: ClimbBar
    in?: Enumerable<ClimbBar>
    notIn?: Enumerable<ClimbBar>
    not?: NestedEnumClimbBarWithAggregatesFilter | ClimbBar
    _count?: NestedIntFilter
    _min?: NestedEnumClimbBarFilter
    _max?: NestedEnumClimbBarFilter
  }

  export type NestedEnumWinWithAggregatesFilter = {
    equals?: Win
    in?: Enumerable<Win>
    notIn?: Enumerable<Win>
    not?: NestedEnumWinWithAggregatesFilter | Win
    _count?: NestedIntFilter
    _min?: NestedEnumWinFilter
    _max?: NestedEnumWinFilter
  }

  export type NestedEnumTeamWithAggregatesFilter = {
    equals?: Team
    in?: Enumerable<Team>
    notIn?: Enumerable<Team>
    not?: NestedEnumTeamWithAggregatesFilter | Team
    _count?: NestedIntFilter
    _min?: NestedEnumTeamFilter
    _max?: NestedEnumTeamFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumLaunchFilter = {
    equals?: Launch
    in?: Enumerable<Launch>
    notIn?: Enumerable<Launch>
    not?: NestedEnumLaunchFilter | Launch
  }

  export type NestedEnumLaunchWithAggregatesFilter = {
    equals?: Launch
    in?: Enumerable<Launch>
    notIn?: Enumerable<Launch>
    not?: NestedEnumLaunchWithAggregatesFilter | Launch
    _count?: NestedIntFilter
    _min?: NestedEnumLaunchFilter
    _max?: NestedEnumLaunchFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type AutoLaunchCreateWithoutGameInput = {
    id?: string
    launchOne: Launch
    launchTwo: Launch
  }

  export type AutoLaunchUncheckedCreateWithoutGameInput = {
    id?: string
    launchOne: Launch
    launchTwo: Launch
  }

  export type AutoLaunchCreateOrConnectWithoutGameInput = {
    where: AutoLaunchWhereUniqueInput
    create: XOR<AutoLaunchCreateWithoutGameInput, AutoLaunchUncheckedCreateWithoutGameInput>
  }

  export type MarkerCreateWithoutGameInput = {
    id?: string
    left: number
    top: number
    launchOne: Launch
    launchTwo: Launch
  }

  export type MarkerUncheckedCreateWithoutGameInput = {
    id?: string
    left: number
    top: number
    launchOne: Launch
    launchTwo: Launch
  }

  export type MarkerCreateOrConnectWithoutGameInput = {
    where: MarkerWhereUniqueInput
    create: XOR<MarkerCreateWithoutGameInput, MarkerUncheckedCreateWithoutGameInput>
  }

  export type MarkerCreateManyGameInputEnvelope = {
    data: Enumerable<MarkerCreateManyGameInput>
    skipDuplicates?: boolean
  }

  export type AutoLaunchUpsertWithoutGameInput = {
    update: XOR<AutoLaunchUpdateWithoutGameInput, AutoLaunchUncheckedUpdateWithoutGameInput>
    create: XOR<AutoLaunchCreateWithoutGameInput, AutoLaunchUncheckedCreateWithoutGameInput>
  }

  export type AutoLaunchUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
  }

  export type AutoLaunchUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
  }

  export type MarkerUpsertWithWhereUniqueWithoutGameInput = {
    where: MarkerWhereUniqueInput
    update: XOR<MarkerUpdateWithoutGameInput, MarkerUncheckedUpdateWithoutGameInput>
    create: XOR<MarkerCreateWithoutGameInput, MarkerUncheckedCreateWithoutGameInput>
  }

  export type MarkerUpdateWithWhereUniqueWithoutGameInput = {
    where: MarkerWhereUniqueInput
    data: XOR<MarkerUpdateWithoutGameInput, MarkerUncheckedUpdateWithoutGameInput>
  }

  export type MarkerUpdateManyWithWhereWithoutGameInput = {
    where: MarkerScalarWhereInput
    data: XOR<MarkerUpdateManyMutationInput, MarkerUncheckedUpdateManyWithoutMarkersInput>
  }

  export type MarkerScalarWhereInput = {
    AND?: Enumerable<MarkerScalarWhereInput>
    OR?: Enumerable<MarkerScalarWhereInput>
    NOT?: Enumerable<MarkerScalarWhereInput>
    id?: StringFilter | string
    left?: FloatFilter | number
    top?: FloatFilter | number
    launchOne?: EnumLaunchFilter | Launch
    launchTwo?: EnumLaunchFilter | Launch
    gameId?: StringNullableFilter | string | null
  }

  export type GameCreateWithoutAutoBallsInput = {
    id?: string
    name: string
    markers?: MarkerCreateNestedManyWithoutGameInput
    cargoRP: number
    climbBar: ClimbBar
    climpRP: number
    weWin: Win
    ourTeam: Team
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUncheckedCreateWithoutAutoBallsInput = {
    id?: string
    name: string
    markers?: MarkerUncheckedCreateNestedManyWithoutGameInput
    cargoRP: number
    climbBar: ClimbBar
    climpRP: number
    weWin: Win
    ourTeam: Team
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateOrConnectWithoutAutoBallsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutAutoBallsInput, GameUncheckedCreateWithoutAutoBallsInput>
  }

  export type GameUpsertWithoutAutoBallsInput = {
    update: XOR<GameUpdateWithoutAutoBallsInput, GameUncheckedUpdateWithoutAutoBallsInput>
    create: XOR<GameCreateWithoutAutoBallsInput, GameUncheckedCreateWithoutAutoBallsInput>
  }

  export type GameUpdateWithoutAutoBallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    markers?: MarkerUpdateManyWithoutGameNestedInput
    cargoRP?: IntFieldUpdateOperationsInput | number
    climbBar?: EnumClimbBarFieldUpdateOperationsInput | ClimbBar
    climpRP?: IntFieldUpdateOperationsInput | number
    weWin?: EnumWinFieldUpdateOperationsInput | Win
    ourTeam?: EnumTeamFieldUpdateOperationsInput | Team
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateWithoutAutoBallsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    markers?: MarkerUncheckedUpdateManyWithoutGameNestedInput
    cargoRP?: IntFieldUpdateOperationsInput | number
    climbBar?: EnumClimbBarFieldUpdateOperationsInput | ClimbBar
    climpRP?: IntFieldUpdateOperationsInput | number
    weWin?: EnumWinFieldUpdateOperationsInput | Win
    ourTeam?: EnumTeamFieldUpdateOperationsInput | Team
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateWithoutMarkersInput = {
    id?: string
    name: string
    autoBalls?: AutoLaunchCreateNestedOneWithoutGameInput
    cargoRP: number
    climbBar: ClimbBar
    climpRP: number
    weWin: Win
    ourTeam: Team
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUncheckedCreateWithoutMarkersInput = {
    id?: string
    name: string
    autoBalls?: AutoLaunchUncheckedCreateNestedOneWithoutGameInput
    cargoRP: number
    climbBar: ClimbBar
    climpRP: number
    weWin: Win
    ourTeam: Team
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameCreateOrConnectWithoutMarkersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutMarkersInput, GameUncheckedCreateWithoutMarkersInput>
  }

  export type GameUpsertWithoutMarkersInput = {
    update: XOR<GameUpdateWithoutMarkersInput, GameUncheckedUpdateWithoutMarkersInput>
    create: XOR<GameCreateWithoutMarkersInput, GameUncheckedCreateWithoutMarkersInput>
  }

  export type GameUpdateWithoutMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    autoBalls?: AutoLaunchUpdateOneWithoutGameNestedInput
    cargoRP?: IntFieldUpdateOperationsInput | number
    climbBar?: EnumClimbBarFieldUpdateOperationsInput | ClimbBar
    climpRP?: IntFieldUpdateOperationsInput | number
    weWin?: EnumWinFieldUpdateOperationsInput | Win
    ourTeam?: EnumTeamFieldUpdateOperationsInput | Team
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateWithoutMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    autoBalls?: AutoLaunchUncheckedUpdateOneWithoutGameNestedInput
    cargoRP?: IntFieldUpdateOperationsInput | number
    climbBar?: EnumClimbBarFieldUpdateOperationsInput | ClimbBar
    climpRP?: IntFieldUpdateOperationsInput | number
    weWin?: EnumWinFieldUpdateOperationsInput | Win
    ourTeam?: EnumTeamFieldUpdateOperationsInput | Team
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarkerCreateManyGameInput = {
    id?: string
    left: number
    top: number
    launchOne: Launch
    launchTwo: Launch
  }

  export type MarkerUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
  }

  export type MarkerUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
  }

  export type MarkerUncheckedUpdateManyWithoutMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    left?: FloatFieldUpdateOperationsInput | number
    top?: FloatFieldUpdateOperationsInput | number
    launchOne?: EnumLaunchFieldUpdateOperationsInput | Launch
    launchTwo?: EnumLaunchFieldUpdateOperationsInput | Launch
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