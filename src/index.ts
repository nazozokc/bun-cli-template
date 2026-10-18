import { define, cli } from "gunshi";

const mainCommand = define({
  name: "foo",
  description: "foo",
});

await cli(process.argv.slice(2), mainCommand, {
  name: "foo",
  version: "0",
});
