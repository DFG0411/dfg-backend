import { Field, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";


export enum Target {
  _blank="_blank",
  _self ="_self", 
  _parent="_parent",
  _top= "_top"
}


@ObjectType()
@Index("menu_pkey", ["id"], { unique: true })
@Index("menu_parent_id_idx", ["parent_id"], {})
@Index("menu_parent_path_idx", ["parent_path"], {})
@Entity("menu", { schema: "public" })
export class Menu extends BaseEntity {
  @ApiProperty()
  @Field()
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @ApiProperty()
  @Field()
  @Column("text", { name: "text" })
  text: string;

  @ApiProperty()
  @Field()
  @Column("text", { name: "i18n", nullable: true })
  i18n: string | null;

  @ApiProperty()
  @Field()
  @Column("boolean", { name: "group", nullable: true, default: () => "true" })
  group: boolean | null;

  @ApiProperty()
  @Field()
  @Column("text", { name: "link", nullable: true })
  link: string | null;

  @ApiProperty()
  @Field()
  @Column("text", { name: "externallink", nullable: true })
  externallink: string | null;

  @ApiProperty()
  @Field()
  @Column("enum", {
    name: "target",
    nullable: true,
    enum:Target,
    default:Target._self,
  })
  target: Target;

  @ApiProperty()
  @Field()
  @Column("text", { name: "icon", nullable: true })
  icon: string | null;

  @ApiProperty()
  @Field()
  @Column("integer", { name: "badge", nullable: true })
  badge: number | null;

  @ApiProperty()
  @Field()
  @Column("boolean", { name: "badgedot", nullable: true })
  badgedot: boolean | null;

  @ApiProperty()
  @Field()
  @Column("text", { name: "badgestatus", nullable: true })
  badgestatus: string | null;

  
  @ApiProperty()
  @Field()
  @Column("boolean", {
    name: "disabled",
    nullable: true,
    default: () => "false",
  })
  disabled: boolean | null;

  @ApiProperty()
  @Field()
  @Column("boolean", { name: "hide", nullable: true, default: () => "false" })
  hide: boolean | null;

  @ApiProperty()
  @Field()
  @Column("boolean", { name: "hideinbreadcrumb", nullable: true })
  hideinbreadcrumb: boolean | null;

  @ApiProperty()
  // @Field()
  @Column("int",{ array: true })
  roles: number[];

  @ApiProperty()
  @Field()
  @Column("boolean", {
    name: "shortcut",
    nullable: true,
    default: () => "false",
  })
  shortcut: boolean | null;

  @ApiProperty()
  @Field()
  @Column("boolean", {
    name: "shortcutroot",
    nullable: true,
    default: () => "false",
  })
  shortcutroot: boolean | null;

  @ApiProperty()
  @Field()
  @Column("boolean", { name: "reuse", nullable: true })
  reuse: boolean | null;

  @ApiProperty()
  @Field()
  @Column("text", { name: "key", nullable: true })
  key: string | null;

  @ApiProperty()
  @Field()
  @Column("integer", { name: "parent_id", nullable: true })
  parent_id: number | null;

  @ApiProperty()
  @Field()
  @Column( { nullable: true })
  parent_path: string | null;

  // @ManyToOne(() => Menu, (menu) => menu.children)
  // @JoinColumn([{ name: "parent_id", referencedColumnName: "id" }])
  // parent: Menu;

  @OneToMany(() => Menu, (child) => child.parent_id)
  children: Menu[];
}
