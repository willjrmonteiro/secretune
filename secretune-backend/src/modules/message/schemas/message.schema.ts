import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
    @Prop()
    text: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);