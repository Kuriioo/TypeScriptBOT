"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Main_1 = __importDefault(require("./Main"));
const Config_1 = require("./Config");
const Config = new Config_1.Config();
Main_1.default.main(Config);
console.log(Main_1.default.getPrefix());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFDMUIscUNBQTZDO0FBQzdDLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTyxFQUFFLENBQUM7QUFFN0IsY0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW4gZnJvbSBcIi4vTWFpblwiO1xyXG5pbXBvcnQgeyBDb25maWcgYXMgX0NvbmZpZyB9IGZyb20gJy4vQ29uZmlnJztcclxuY29uc3QgQ29uZmlnID0gbmV3IF9Db25maWcoKTtcclxuXHJcbk1haW4ubWFpbihDb25maWcpO1xyXG5jb25zb2xlLmxvZyhNYWluLmdldFByZWZpeCgpKTtcclxuIl19