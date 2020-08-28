"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const discord_js_1 = require("discord.js");
const FS = require("fs");
class Config {
    static getPrefix() {
        return Config.Prefix;
    }
    ;
    static Load() {
        FS.readdir('./Commands/', (err, f) => {
            if (err) {
                return console.error(err);
            }
            ;
            let _Commands = f.filter(f => f.split(".").pop() === "js");
            if (_Commands.size === 0) {
                return console.log("Aucune commande trouvée !");
            }
            ;
            _Commands.forEach(f => {
                let Command = require("./Commands/" + f);
                Config.Commands.set(Command.Help.Name, Command);
                Command.Help.Aliases.forEach(_Aliases => {
                    Config.Aliases.set(_Aliases, Command);
                });
                console.log(f + " chargé !");
            });
        });
    }
    ;
}
exports.Config = Config;
Config.Client = new discord_js_1.Client();
Config.Commands = new Map();
Config.Aliases = new Map();
Config.Token = "NjM3MjQ2MTg3ODQ1NzEzOTYw.XbLXwg.IShoeo3EFfEOLOdfgWEBy9Rlr_0";
Config.Prefix = "&";
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBK0M7QUFDL0MsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpCLE1BQWEsTUFBTTtJQU9qQixNQUFNLENBQUMsU0FBUztRQUNkLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQUEsQ0FBQztJQUVGLE1BQU0sQ0FBQyxJQUFJO1FBQ1QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFZLEVBQUUsQ0FBTyxFQUFFLEVBQUU7WUFDbEQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1lBQUEsQ0FBQztZQUNGLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQzNELElBQUcsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQ2pEO1lBQUEsQ0FBQztZQUNGLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BCLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUVoRCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFBQSxDQUFDOztBQTlCSix3QkErQkM7QUE5QlEsYUFBTSxHQUFHLElBQUksbUJBQU8sRUFBRSxDQUFDO0FBQ3ZCLGVBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLGNBQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFlBQUssR0FBRyw2REFBNkQsQ0FBQztBQUN0RSxhQUFNLEdBQUcsR0FBRyxDQUFDO0FBMEJyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IGFzIF9DbGllbnQgfSBmcm9tICdkaXNjb3JkLmpzJztcclxuY29uc3QgRlMgPSByZXF1aXJlKFwiZnNcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcclxuICBzdGF0aWMgQ2xpZW50ID0gbmV3IF9DbGllbnQoKTtcclxuICBzdGF0aWMgQ29tbWFuZHMgPSBuZXcgTWFwKCk7XHJcbiAgc3RhdGljIEFsaWFzZXMgPSBuZXcgTWFwKCk7XHJcbiAgc3RhdGljIFRva2VuID0gXCJOak0zTWpRMk1UZzNPRFExTnpFek9UWXcuWGJMWHdnLklTaG9lbzNFRmZFT0xPZGZnV0VCeTlSbHJfMFwiO1xyXG4gIHN0YXRpYyBQcmVmaXggPSBcIiZcIjtcclxuXHJcbiAgc3RhdGljIGdldFByZWZpeCgpIHtcclxuICAgIHJldHVybiBDb25maWcuUHJlZml4O1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBMb2FkKCkge1xyXG4gICAgRlMucmVhZGRpcignLi9Db21tYW5kcy8nLCAoZXJyIDogc3RyaW5nLCBmIDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9O1xyXG4gICAgICBsZXQgX0NvbW1hbmRzID0gZi5maWx0ZXIoZiA9PiBmLnNwbGl0KFwiLlwiKS5wb3AoKSA9PT0gXCJqc1wiKTtcclxuICAgICAgaWYoX0NvbW1hbmRzLnNpemUgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJBdWN1bmUgY29tbWFuZGUgdHJvdXbDqWUgIVwiKTtcclxuICAgICAgfTtcclxuICAgICAgX0NvbW1hbmRzLmZvckVhY2goZiA9PiB7XHJcbiAgICAgICAgbGV0IENvbW1hbmQgPSByZXF1aXJlKFwiLi9Db21tYW5kcy9cIiArIGYpO1xyXG4gICAgICAgIENvbmZpZy5Db21tYW5kcy5zZXQoQ29tbWFuZC5IZWxwLk5hbWUsIENvbW1hbmQpO1xyXG5cclxuICAgICAgICBDb21tYW5kLkhlbHAuQWxpYXNlcy5mb3JFYWNoKF9BbGlhc2VzID0+IHtcclxuICAgICAgICAgIENvbmZpZy5BbGlhc2VzLnNldChfQWxpYXNlcywgQ29tbWFuZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZiArIFwiIGNoYXJnw6kgIVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG4iXX0=