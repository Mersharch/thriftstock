import { type SchemaTypeDefinition } from "sanity";

import { clientType } from "./clientsType";
import { categoryType } from "./categoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [clientType, categoryType],
};
