import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import type { Linter } from "eslint";
import type { Awaitable, FlatConfigComposer } from "eslint-flat-config-utils";

export const shironConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[] = [
  {
    rules: {
      "style/quotes": [
        "error",
        "double",
      ],
      "style/semi": [
        "error",
        "always",
      ],
    },
  },
];
