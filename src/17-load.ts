import _ from "lodash";

const data = [
  {
    username: "Daniel",
    RemotePlayback: "admin"
  },
  {
    username: "Valentina",
    role: "seller"
  },
  {
    username: "Daniela",
    role: "seller"
  },
  {
    username: "Santiago",
    role: "customer"
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);

const rta2 = 1 + '1';
console.log(typeof(rta2))

