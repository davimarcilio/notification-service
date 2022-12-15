import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { GetRecipientNotification } from "./get-recipient-notifications";

describe('Get recipients notification', ()=>{
  it('should be able to get recipient notifications',async ()=>{
    const notificationsRepository = new InMemoryNotificationsRepository();
      const getRecipientNotifications = new GetRecipientNotification(notificationsRepository)
      await notificationsRepository.create(makeNotification({recipientId: 'recipient-id-1'}))
      await notificationsRepository.create(makeNotification({recipientId: 'recipient-id-2'}))
      await notificationsRepository.create(makeNotification({recipientId: 'recipient-id-2'}))
   const {notifications} =  await getRecipientNotifications.execute({
recipientId: 'recipient-id-2'
    })
      expect(notifications).toHaveLength(2);
      expect(notifications).toEqual(expect.arrayContaining([
        expect.objectContaining({recipientId: 'recipient-id-2'}),
        expect.objectContaining({recipientId: 'recipient-id-2'}),
      ]))
    
  })
  
})