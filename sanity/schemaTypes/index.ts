import { type SchemaTypeDefinition } from "sanity";

import { clientType } from "./clientsType";
import { categoryType } from "./categoryType";
import { galleryType } from "./galleryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [clientType, categoryType, galleryType],
};
