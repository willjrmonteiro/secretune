import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    login: string;

    @Prop()
    password: string;

    @Prop()
    name: string;

    @Prop()
    surname: string;

    @Prop()
    email: string;

    @Prop()
    phone: string;

    @Prop()
    address: string;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop()
    country: string;

    @Prop()
    postalCode: string;

    @Prop()
    profilePicture: string;

    @Prop()
    avatar: string;

    @Prop()
    status : string;

    @Prop()
    about: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);