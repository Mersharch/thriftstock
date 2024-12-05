import { defineLive } from "next-sanity";
import { apiVersion, readToken } from "../env";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: apiVersion }),
  serverToken: readToken,
  browserToken: readToken,
});
