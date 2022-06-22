import { subDays, format } from "date-fns";

const date = new Date(1998, 0, 1); //0enero, 1 febrero, 2 marzo ...
const rta = subDays(date, 30);
const str = format(rta, "yyyy/MM/dd")
console.log(str);

