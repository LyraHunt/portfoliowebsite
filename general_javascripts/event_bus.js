class EventBus {
    subscriptions = {}; // stores event names as keys and arrays of callback functions as values

    // method to subscribe to an event
    subscribe(eventName, callback) {
        if (!this.subscriptions[eventName]) {
            this.subscriptions[eventName] = [];
        }
        this.subscriptions[eventName].push(callback);
    }

    // Method to unsubscribe from an event
    unsubscribe(eventName, callback) {
        if (this.subscriptions[eventName]) {
            this.subscriptions[eventName] = this.subscriptions[eventName].filter(
                (subscriber) => subscriber !== callback
            );
        }
    }

    // method to publish an event
    publish(eventName, data) {
        if (!this.subscriptions[eventName]) {
            this.subscriptions[eventName] = [];
        }
        this.subscriptions[eventName].forEach((callback) => callback(data));
    }
}

var GlobalEventBus = new EventBus;