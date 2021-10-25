import { KafkaMessage, Producer } from '@nestjs/microservices/external/kafka.interface';
export declare class TestKafkaController {
    private kafkaProducer;
    constructor(kafkaProducer: Producer);
    consumer(message: KafkaMessage): void;
    producer(body: any): void;
}
