---
sidebar_position: 1
---

import Button from '../src/components/Button';
import { DiscordDefaultOptions, DiscordButton, DiscordButtons, DiscordInteraction, DiscordMessage, DiscordMessages, DiscordMention, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, } from "@pycord/discord-message-components-react";
import "@pycord/discord-message-components-react/dist/style.css";
import DiscordComponent, { defaultOptions } from "../src/components/DiscordComponent";

# Deprecation Notice

:::note[]
This was posted about in the [<DiscordMention>#❗╏news</DiscordMention>](https://discord.com/channels/639477525927690240/898050443446464532/1200591997128409178) channel on the discord, but forgot to post about here!
:::

Sadly due to discord's limit of 50 slash commands bot allowed in a discord server, we have decided to stop the API, it may come back, but due to this limit it has stoped us!

We are very sorry about this but it is not under our control, we would love to continue this but sadly we are unable to!

### Below is what <DiscordMention>Willy</DiscordMention> (one of DBH's many Devs) is the discord post they made

const discordOptions = {
 ...DiscordDefaultOptions,
 profiles: {
  willy: {
   author: 'Willy',
   avatar: '<https://images-ext-2.discordapp.net/external/lG-3qgSvQuJFGMwnA1VK70E0WGYQ2YIEc2UGtDBie1U/https/cdn.discordapp.com/avatars/853158265466257448/35eb8b32381055e896a6a2c6368065dd.png>',
   roleColor: '#0390F3',
  },
 },
}

export default function App() {
 return (
  <DiscordOptionsContext.Provider value={discordOptions}>
   <DiscordMessages>
    <DiscordMessage profile="willy">
     <DiscordMention>Changelogs</DiscordMention>
          Well this is an unfortunate announcement. Discord has introduced a limit of 50 bots per server which means we will be discontinuing the bot API for now as DBH will most likely reach the bot limit quickly.\n\nI have kicked most of the bots, and have only kept a few that are used somewhat often or if they were made by a higher ranking staff member.\n\nI will keep everyone updated about any changes to this decision.
    </DiscordMessage>
   </DiscordMessages>
  </DiscordOptionsContext.Provider>
 )
}
