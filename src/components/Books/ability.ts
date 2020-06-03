import { Ability } from "@casl/ability";

export default new Ability([
  {
    action: "update",
    subject: "Author",
    conditions: { isShowAuthor: true }
  }
]);
