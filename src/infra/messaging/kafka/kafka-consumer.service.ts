import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy{
    constructor(){
      super({
        
        client:{ 
          clientId: "notifications", brokers: ['factual-giraffe-14402-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'ZmFjdHVhbC1naXJhZmZlLTE0NDAyJJVmAtiqxfCEdwzvfEYD_RE7Y_HYHyqmazA',
          password: '9M5QlEbA2IZs9jwrLaUI5GRjfe2NJIJCSGwNzd5ZwGAfZzSKRWudekwcKI6yrSgldMo92A==',
        },
        ssl: true,}
      });
    }async onModuleDestroy() {
 await this.close()
}
}