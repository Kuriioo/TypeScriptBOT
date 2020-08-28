import { Config } from './Config';

/// Load Every Commands \\\
Config.Load();

Config.Client.on("message", (Message: any) => {
  if(Message.author.bot) {
    return;
  };
  if (!Message.channel.permissionsFor(Message.guild.member(Config.Client.user)).has("SEND_MESSAGES")) {
    return;
  };
  if(!Message.content.startsWith(Config.Prefix)) {
    return;
  };
  let Args = Message.content.slice(Config.Prefix.length).trim().split(/ +/g);
  let Command = Args.shift();
  let Cmd = Config.Commands.get(Command);
  let Aliases = Config.Aliases.get(Command);
  if (Aliases) {
    Aliases.Help.Run(Message, Args);
    return;
  };
  if (Cmd) {
    Cmd.Help.Run(Message, Args);
    return;
  };
});

Config.Client.on("ready", () => {
  console.log(Config.Client.user.tag + " Connecté !");
});

/// Log BOT with Token \\\
Config.Client.login(Config.Token);
