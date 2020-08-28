export class Help {
  static Name = "help";
  static Aliases = ["aide"];

  static Run(Message, Args) {
    Message.reply("Aide !");
  };
};
