import { restClient, referenceClient } from "@polygon.io/client-js";
import env from '../config/env';
const { POLYGON_API_KEY } = env;

const rest = restClient(POLYGON_API_KEY);
const reference = referenceClient(POLYGON_API_KEY);

export const polygonRestClient = rest;
export const polygonReferenceClient = reference;
