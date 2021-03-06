import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property()
  title!: string;

  @Field()
  @Property({ type: "date" })
  createdAt: Date = new Date();

  @Field() // Exposes this field in the schema
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
