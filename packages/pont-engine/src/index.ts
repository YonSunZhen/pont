/** new */

export { CONFIG_FILE } from './constants';
export { Surrounding } from './types/pontConfig';
export { getTemplate } from './utils/templateHelp';
export { PollingManage } from './utils/PollingManage';

export { DataSourceConfig } from './main/Config';
export { Manager } from './main/Manager';
export { Config } from './main/Config';
export { Logger } from './main/Logger';

export { OriginManage } from './main/originManage';
export { OriginReader } from './main/originManage/OriginReader';
export { CodeGenerator } from './main/originManage/CodeGenerator';
export { FileStructures } from './main/originManage/FileStructures';
export { FilesManager } from './main/originManage/FilesManager';

export * from './types';

/** compatible */

export { createManager } from './compatible/Manager';

export {
  format,
  getDuplicateById,
  getIdentifierFromOperatorId,
  getIdentifierFromUrl,
  getMaxSamePath,
  hasChinese,
  lookForFiles,
  toDashCase,
  toDashDefaultCase,
  toUpperFirstLetter,
  transformCamelCase,
  transformDescription,
  transformModsName,
  getFileName
} from './compatible/utils';
export { diff, Model, removeCtx } from './compatible/diff';
export {
  BaseClass,
  Interface,
  Mod,
  PrimitiveType,
  Property,
  StandardDataSource,
  StandardDataType
} from './compatible/standard';

/** deprecated */

export { PontDictManager } from './deprecated/LocalDictManager';
