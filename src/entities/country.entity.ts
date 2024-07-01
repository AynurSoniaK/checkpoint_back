import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, InputType, ObjectType, registerEnumType } from "type-graphql";


@ObjectType()
@Entity()
export default class Country {
  
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  emoji: string;

  @Field()
  @Column()
  continent: string;
}


/**----------------------
 **      Input Types
 *------------------------**/
 @InputType()
 export class InputCreateCountry {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;

  @Field()
  continent: string;
}