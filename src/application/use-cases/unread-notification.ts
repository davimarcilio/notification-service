import { Injectable } from "@nestjs/common";
import {NotificationsRepository} from '../repositories/notifications-repository'
import { NotificationNotFound } from "./errors/notification-not-found";

interface UnreadNotificationRequest{
  notificationId: string;
}
type UnreadNotificationReponse = void
@Injectable()
export class UnreadNotification {
constructor(
  private notificationsRepository: NotificationsRepository
){}

  async execute(request: UnreadNotificationRequest): Promise<UnreadNotificationReponse>{
            const {notificationId} = request
const notification = await this.notificationsRepository.findById(notificationId)
     if(!notification){
      throw new NotificationNotFound();
     }
     notification.unread();
     await this.notificationsRepository.save(notification)
  }
} 