class Entity {
  constructor(attrs) {
    Object.assign(this, attrs);
  }
}

export class Article extends Entity {}
export class Author extends Entity {}
