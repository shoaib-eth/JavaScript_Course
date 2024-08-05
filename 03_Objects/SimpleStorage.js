class SimpleStorage {
    constructor() {
        this.data = {};
    }

    setValue(key, value) {
        this.data[key] = value;
    }

    getValue(key) {
        return this.data[key];
    }

    deleteValue(key) {
        delete this.data[key];
    }

    getAllValues() {
        return Object.values(this.data);
    }

    getAllKeys() {
        return Object.keys(this.data);
    }
}

// Example usage:
const storage = new SimpleStorage();
storage.setValue("name", "John");
storage.setValue("age", 25);

console.log(storage.getValue("name")); // Output: John
console.log(storage.getAllValues()); // Output: [John, 25]
console.log(storage.getAllKeys()); // Output: [name, age]