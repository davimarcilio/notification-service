import { Content } from "@application/entities/content";
import { Notification, NotificationsProps } from "@application/entities/notification";
type Override = Partial<NotificationsProps>;
export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('New solicitations for friend'),
    recipientId: 'recipient-id-2',
    ...override
  })
}