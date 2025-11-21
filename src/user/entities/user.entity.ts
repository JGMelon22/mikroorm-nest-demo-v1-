import { Entity, PrimaryKey, Property, Unique } from "@mikro-orm/core";

@Entity()
export class User {

    @PrimaryKey()
    id: string

    @Property()
    name: string

    @Property()
    @Unique()
    public email: string
}
