---
title: JavaScript Example
---
import Playground from '@site/src/components/Playground';

<Playground />

Thank you to <a href="https://discord.com/channels/@me/1193271410907426966">Trung</a> for making this!

```javascript
const axios = require("axios");

let api_key = "Replace ur api key here"
let owner_id = "replace your owner id here"
let bot_id = "Replace ur bot id here"
let bot_avatar = "replace ur bot avatar."
axios.post(`https://bot-api.danbot.host/addbot?apikey=${api_key}&discordid=${bot_id}&ownerid=${owner_id}&name=${client.user.username}&avatar=${bot_avatar}&guilds=${client.guilds.cache.size}&users=${client.users.cache.size}`).then(r => console.log(r.data));
```
