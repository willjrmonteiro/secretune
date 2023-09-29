import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { MessageService } from "./message.service";
import { CreateMessageDto } from "./dto/create-message.dto";
import { Message } from "./schemas/message.schema";

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Post()
    async create(@Body() createMessageDto: CreateMessageDto) {
        this.messageService.create(createMessageDto);
    }

    @Get()
    async findAll(): Promise<Message[]> {
        return this.messageService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Message> {
        return this.messageService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Message> {
        return this.messageService.delete(id);
    }
}