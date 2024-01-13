---
title: Typescript Example
---


Thank you to <a href="https://discord.com/channels/@me/418306434317680641">Domin</a> for making this!

:::warning[Note]
Make sure your bot meets these reqs and used these packages:
> **Node.js >=18, Typescript, ESM, JSDocs, discord.js**
:::

```typescript
import { Client } from "discord.js";

const URL = "https://bot-api.danbot.host/addbot";

/**
 * Parses an object into a parameter string.
 * @returns {string} Parameter string starting with "?".
 */
function toParams(parameters: Record<string, string | number>): string {
  const result = [];
  for (const property in parameters)
    result.push(`${property}=${parameters[property]}`);
  return "?" + result.join("&");
}

/**
 * Parameter interface for fetching the API.
 * Uses lowercase to match the native API implementation.
 */
interface Params {
  /** Your API key. */
  apikey: string;
  /** Snowflake ID of owner. */
  ownerid: string;
  /** Your bot's snowflake ID. */
  discordid: string;
  /** Avatar URL of the bot. */
  avatar: string;
  /** Bot's name. */
  name?: string;
  /** Bot's guild count. Can be biased. */
  guilds?: number;
  /** Bot's users served count. Can be biased. */
  users?: number;
  /** Shard count. Defaults to 1. Can be biased. */
  shards?: number;
}

/**
 * Asynchronously fetches Danbot Hosting's Bot API.
 * @todo Implement result type.
 * @returns {Promise<unknown>} Fetch json result.
 */
async function init(params: Params, client: Client): Promise<unknown> {
  const options = {
    name: client.user?.username ?? "",
    guilds: client.guilds.cache.size,
    users: client.users.cache.size,
    shards: 1,
    ...params,
  };

  const response = await fetch(URL + toParams(options), {
    method: "POST"
  });

  return response.json() as Promise<unknown>;
}

const client = new Client(/* Options */);

const API_KEY = "Replace it with your API key",
  OWNER_ID = "Replace it with your ID",
  BOT_ID = "Replace it with your bot's ID",
  BOT_AVATAR = "Replace it with your bot's avatar URL.";

// An asynchronous call can only be top-level awaited if that's ESM
await init({
  apikey: API_KEY,
  ownerid: OWNER_ID,
  discordid: BOT_ID,
  avatar: BOT_AVATAR
}, client);
```