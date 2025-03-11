import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "hello@johndoe.com",
    firstName: "john",
    lastName: "doe",
  },
});

console.log("done");
