import { defineAbility } from '@casl/ability';

export default defineAbility((can, cannot) => {
  can('read', 'GS');
  cannot('delete', 'User');
});