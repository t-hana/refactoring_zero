import play from "../json/plays.json" assert { type: "json" };
import nvoices from "../json/nvoices.json" assert { type: "json" };
import { statement } from "./statement.js";

console.log(statement(nvoices, play));
