---
title: Python3 Example
---

# Python3 Method utilizing __requests__ built-in module

Thank you to <a href="https://discord.com/channels/@me/484318483258015754">kyztrx</a> for making this!

:::warning[Notes]
- Make sure you edit the following field(s):
   - \<apikey\> = Your API Key
   - \<owner-discord-id\> = I got lazy to add a method to automate it so you do you 👍🏻
   - \<shard-count\> = Total shards your bot has. Use **1** if you're only running your bot on a single server.
:::
:::danger[]
This code is **eval** friendly. And should only be used in eval sandbox as the API requires you to be posting it from a **DBH Node**.
:::

```py
import requests

def members(bot: commands.Bot):
    memc = 0
    for guild in bot.guilds:
        memc += guild.member_count
    return memc

totalservers = len(bot.guilds)
totalusers = members
url=f"https://bot-api.danbot.host/addbot?apikey=<apikey>&discordid={bot.user.id}&ownerid=<owner-discord-id>&name={bot.user.name}&avatar={bot.user.avatar.url}&shards=<shardcount>&guilds={totalservers}&users={totalusers(bot)}"

response = requests.post(url)
print(response)
```