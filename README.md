# thingBot info

### What is thingBot?

thingBot is a Discord Bot just meant for testing purposes

### How do I get thingBot in my server?

thingBot is currently not public, so you will have to host it locally.

In order to download it you will need:

<a style="margin:4px;" class="btn btn-outline-success btn-lg" href="https://nodejs.org/en/" role="button">Node.js LTS</a> ( Node.js 15 and 16 unsupported )

<a style="margin:4px;" class="btn btn-outline-success btn-lg" href="https://git-scm.com" role="button">Git</a>

1. First create a Discord app in the Discord dev portal and make it a bot
2. Go to OAuth2 and copy the Client ID
3. Copy and paste this: ( https://discord.com/oauth2/authorize?client_id=INSERT_CLIENT_ID_HERE&scope=bot&permissions=8 ) and replace "INSERT_CLIENT_ID" with you Client ID then press and and do the steps on the webpage
4. Go back to the Discord Dev portal and go to bot
5. Copy your bot token ( DO NOT SHARE YOUR TOKEN!!!!!!!! )
6. Go to the bot folder in Finder / File Explorer
8. Edit main.js with TextEdit / Notepad
9. Replace <token> with your token and save it
10. Go to your Terminal / CMD Prompt
11. Type the following in:

$ git clone https://github.com/TheGalacticAce/thingBot.git/

$ node main.js
  
  Your done!


