import { Field, ObjectType } from "type-graphql";
import "reflect-metadata";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

@ObjectType()
@Entity()
export class Updoot extends BaseEntity {
  @Field()
  @Column({ type: "int" })
  value: number;

  @Field()
  @PrimaryColumn()
  userId: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.updoots)
  user: User;

  @Field()
  @PrimaryColumn()
  postId: number;

  //Delete all updoots on delete post
  @Field(() => Post)
  @ManyToOne(() => Post, (post) => post.updoots, {
    onDelete: "CASCADE",
  })
  post: Post;
}
