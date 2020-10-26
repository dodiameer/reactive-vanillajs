declare const reactiveStore: <T>(value: T) => {
    subscribe: (callback: (value: T) => void, options?: {
        runOnSubscription: boolean;
    } | undefined) => () => void;
    set: (newValue: T) => void;
    update: (callback: (currentValue: T) => T) => void;
};
export default reactiveStore;
//# sourceMappingURL=reactiveStore.d.ts.map