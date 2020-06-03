import { Ability } from "@casl/ability";

export default new Ability([
  {
    action: "read",
    subject: "Article",
    conditions: { published: false }
  }
]);