
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  objectEnumValues
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.1.0
 * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
 */
Prisma.prismaVersion = {
  client: "4.1.0",
  engine: "8d8414deb360336e4698a65aa45a1fbaf1ce13d8"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "src\\server\\db\\generated\\prisma-client-ts",
    "server\\db\\generated\\prisma-client-ts",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.GameScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  tournament: 'tournament',
  cargoRP: 'cargoRP',
  climbBar: 'climbBar',
  climbRP: 'climbRP',
  weWin: 'weWin',
  ourTeam: 'ourTeam',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.AutoLaunchScalarFieldEnum = makeEnum({
  id: 'id',
  launchOne: 'launchOne',
  launchTwo: 'launchTwo',
  gameId: 'gameId'
});

exports.Prisma.MarkerScalarFieldEnum = makeEnum({
  id: 'id',
  left: 'left',
  top: 'top',
  launchOne: 'launchOne',
  launchTwo: 'launchTwo',
  gameId: 'gameId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});
exports.ClimbBar = makeEnum({
  Low: 'Low',
  Middle: 'Middle',
  High: 'High',
  Traversal: 'Traversal'
});

exports.Win = makeEnum({
  Win: 'Win',
  Lose: 'Lose',
  Tie: 'Tie'
});

exports.Team = makeEnum({
  Red: 'Red',
  Blue: 'Blue'
});

exports.Launch = makeEnum({
  GotIn: 'GotIn',
  BounceOut: 'BounceOut',
  MissClose: 'MissClose',
  MissFar: 'MissFar',
  NoLaunch: 'NoLaunch'
});

exports.Prisma.ModelName = makeEnum({
  Game: 'Game',
  AutoLaunch: 'AutoLaunch',
  Marker: 'Marker'
});

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"Launch\",\"values\":[{\"name\":\"GotIn\",\"dbName\":null},{\"name\":\"BounceOut\",\"dbName\":null},{\"name\":\"MissClose\",\"dbName\":null},{\"name\":\"MissFar\",\"dbName\":null},{\"name\":\"NoLaunch\",\"dbName\":null}],\"dbName\":null},{\"name\":\"Team\",\"values\":[{\"name\":\"Red\",\"dbName\":null},{\"name\":\"Blue\",\"dbName\":null}],\"dbName\":null},{\"name\":\"Win\",\"values\":[{\"name\":\"Win\",\"dbName\":null},{\"name\":\"Lose\",\"dbName\":null},{\"name\":\"Tie\",\"dbName\":null}],\"dbName\":null},{\"name\":\"ClimbBar\",\"values\":[{\"name\":\"Low\",\"dbName\":null},{\"name\":\"Middle\",\"dbName\":null},{\"name\":\"High\",\"dbName\":null},{\"name\":\"Traversal\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"Game\",\"dbName\":\"game\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournament\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autoBalls\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AutoLaunch\",\"relationName\":\"AutoLaunchToGame\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"markers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Marker\",\"relationName\":\"GameToMarker\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cargoRP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"climbBar\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClimbBar\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"climbRP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weWin\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Win\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ourTeam\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Team\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"AutoLaunch\",\"dbName\":\"auto_launch\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"launchOne\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Launch\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"launchTwo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Launch\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"AutoLaunchToGame\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Marker\",\"dbName\":\"marker\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"left\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"top\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"launchOne\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Launch\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"launchTwo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Launch\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToMarker\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Game\",\"plural\":\"games\",\"findUnique\":\"findUniqueGame\",\"findFirst\":\"findFirstGame\",\"findMany\":\"findManyGame\",\"create\":\"createOneGame\",\"createMany\":\"createManyGame\",\"delete\":\"deleteOneGame\",\"update\":\"updateOneGame\",\"deleteMany\":\"deleteManyGame\",\"updateMany\":\"updateManyGame\",\"upsert\":\"upsertOneGame\",\"aggregate\":\"aggregateGame\",\"groupBy\":\"groupByGame\"},{\"model\":\"AutoLaunch\",\"plural\":\"autoLaunches\",\"findUnique\":\"findUniqueAutoLaunch\",\"findFirst\":\"findFirstAutoLaunch\",\"findMany\":\"findManyAutoLaunch\",\"create\":\"createOneAutoLaunch\",\"createMany\":\"createManyAutoLaunch\",\"delete\":\"deleteOneAutoLaunch\",\"update\":\"updateOneAutoLaunch\",\"deleteMany\":\"deleteManyAutoLaunch\",\"updateMany\":\"updateManyAutoLaunch\",\"upsert\":\"upsertOneAutoLaunch\",\"aggregate\":\"aggregateAutoLaunch\",\"groupBy\":\"groupByAutoLaunch\"},{\"model\":\"Marker\",\"plural\":\"markers\",\"findUnique\":\"findUniqueMarker\",\"findFirst\":\"findFirstMarker\",\"findMany\":\"findManyMarker\",\"create\":\"createOneMarker\",\"createMany\":\"createManyMarker\",\"delete\":\"deleteOneMarker\",\"update\":\"updateOneMarker\",\"deleteMany\":\"deleteManyMarker\",\"updateMany\":\"updateManyMarker\",\"upsert\":\"upsertOneMarker\",\"aggregate\":\"aggregateMarker\",\"groupBy\":\"groupByMarker\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Anand\\Documents\\coding\\t3\\scout-waffle\\src\\server\\db\\generated\\prisma-client-ts",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\..\\..\\.env"
  },
  "relativePath": "..\\..\\..\\..\\..\\prisma",
  "clientVersion": "4.1.0",
  "engineVersion": "8d8414deb360336e4698a65aa45a1fbaf1ce13d8",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})
const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src\\server\\db\\generated\\prisma-client-ts\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src\\server\\db\\generated\\prisma-client-ts\\schema.prisma")
