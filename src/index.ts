import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from "@antfu/eslint-config"
import type { Linter } from "eslint"
import type { FlatConfigComposer } from "eslint-flat-config-utils"
import { antfu } from "@antfu/eslint-config"
import { shironConfigs } from "./config"
import { shironOptions } from "./options"

function shiron(options?: OptionsConfig & Omit<TypedFlatConfigItem, "files">, ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  return antfu({ ...shironOptions, ...options }, ...shironConfigs, ...userConfigs)
}
export default shiron

export * from "@antfu/eslint-config";
