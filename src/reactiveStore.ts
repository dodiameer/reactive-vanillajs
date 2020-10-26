const reactiveStore = <T>(value: T) => {
  let callbacks: Array<(value: T) => void> = [];

  function subscribe(
    callback: (value: T) => void,
    options?: { runOnSubscription: boolean }
  ): () => void {
    callbacks.push(callback);
    if (options?.runOnSubscription) callback(value);

    return () => {
      callbacks = [...callbacks.filter((val) => val !== callback)];
    };
  }

  function set(newValue: T): void {
    value = newValue;
    callbacks.forEach((func) => func(value));
  }

  function update(callback: (currentValue: T) => T): void {
    value = callback(value);
    callbacks.forEach((func) => func(value));
  }

  return { subscribe, set, update };
};

export default reactiveStore;
