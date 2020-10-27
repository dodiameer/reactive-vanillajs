declare const reactiveStore: <T>(value: T) => {
    subscribe: (callback: (value: T) => void, options?: {
        runOnSubscription: boolean;
    }) => () => void;
    set: (newValue: T) => void;
    update: (callback: (currentValue: T) => T) => void;
};
export default reactiveStore;
