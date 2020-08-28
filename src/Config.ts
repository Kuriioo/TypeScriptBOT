import { Client as _Client } from 'discord.js';
const FS = require("fs");

export class Config {
  static Client = new _Client();
  static Commands = new Map();
  static Aliases = new Map();
  static Token = "Your Token";
  static Prefix = "&";

  static getPrefix() {
    return Config.Prefix;
  };

  static Load() {
    FS.readdir('./Commands/', (err : string, f : any) => {
      if (err) {
        return console.error(err);
      };
      let _Commands = f.filter(f => f.split(".").pop() === "js");
      if(_Commands.size === 0) {
        return console.log("Aucune commande trouvée !");
      };
      _Commands.forEach(f => {
        let Command = require("./Commands/" + f);
        Config.Commands.set(Command.Help.Name, Command);

        Command.Help.Aliases.forEach(_Aliases => {
          Config.Aliases.set(_Aliases, Command);
        });
        console.log(f + " chargé !");
      });
    });
  };
};
