import { SendNotification } from "@application/use-cases/send-notification";
import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
interface SendNotificationPayload{
  content: string;
  category: string;
  recipientId: string;
}
@Controller()
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification
  ){}
  @EventPattern('notification-service.ignitelab')
  async handleSendNotification(@Payload() {category,content,recipientId}: SendNotificationPayload){
    await this.sendNotification.execute({
      category,
      content,
      recipientId
    })
  }
}