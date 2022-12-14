import { Content } from "./content"
describe('Notification content', () => {
    it('should be able to create a notification content', () => {
        const content = new Content('You recived one notification')

        expect(content).toBeTruthy();
    })
    it('should be able to create a notification content with less than 5 caracters', () => {

        expect(() => new Content('aaa')).toThrow();
    })

    it('should be able to create a notification content with more than 240 caracters', () => {

        expect(() => new Content('a'.repeat(241))).toThrow();
    })
})
