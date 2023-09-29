import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Message } from "./schemas/message.schema";
import { CreateMessageDto } from "./dto/create-message.dto";

@Injectable()
export class MessageService {
    constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}

    async create(createMessageDto: CreateMessageDto): Promise<Message> {
        const createdMessage = new this.messageModel(createMessageDto);
        return createdMessage.save();
    }

    async findAll(): Promise<Message[]> {
        return this.messageModel.find().exec();
    }

    async findOne(id: string): Promise<Message> {
        return this.messageModel.findById(id);
    }

    async delete(id: string): Promise<Message> {
        return this.messageModel.findByIdAndDelete(id);
    }

}