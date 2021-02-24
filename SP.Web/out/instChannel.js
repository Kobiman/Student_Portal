export class Channel {
    static add(message) {
        this.messages.push(message);
    }
    static remove(message) {
        this.messages.splice(this.messages.indexOf(message));
    }
}
Channel.messages = [];
//# sourceMappingURL=instChannel.js.map