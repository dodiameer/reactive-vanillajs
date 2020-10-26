const reactiveStore = (value) => {
    let callbacks = [];
    function subscribe(callback, options) {
        callbacks.push(callback);
        if (options === null || options === void 0 ? void 0 : options.runOnSubscription)
            callback(value);
        return () => {
            callbacks = [...callbacks.filter((val) => val !== callback)];
        };
    }
    function set(newValue) {
        value = newValue;
        callbacks.forEach((func) => func(value));
    }
    function update(callback) {
        value = callback(value);
        callbacks.forEach((func) => func(value));
    }
    return { subscribe, set, update };
};
export default reactiveStore;
