
class Nodes<T> {
    value: T | null;
    left: Nodes<T> | null;
    right: Nodes<T> | null;

    constructor() {
        this.value = null;
        this.left = null;
        this.right = null;
    }

    insert(value: T, node?: Nodes<T>): boolean {
        let self: Nodes<T> = node ?? this;

        if (self.value === null) {
            self.value = value;
            return true;
        }

        if (self.value > value) {
            if (self.right === null) {
                self.right = new Nodes<T>();
            }
            return this.insert(value, self.right);
        }

        if (self.value < value) {
            if (self.left === null) {
                self.left = new Nodes<T>();
            }
            return this.insert(value, self.left);
        }

        return false;
    }

    search(value: T, node?: Nodes<T>): Nodes<T> | null {
        let self: Nodes<T> = node ?? this;

        if (self.value === null) {
            return null;
        }

        if (self.value === value) {
            return self;
        }

        if (self.value > value && self.right !== null) {
            return this.search(value, self.right);
        }

        if (self.value < value && self.left !== null) {
            return this.search(value, self.left);
        }

        return null;
    }

    searchMin(node: Nodes<T>): Nodes<T> {
        if (node.left === null) {
            return node;
        } else {
            return this.searchMin(node.left);
        }

    }

    remove(value: T, node?: Nodes<T>): Nodes<T> | null {
        let self: Nodes<T> = node ?? this;

        if (self.value === null) {
            return null;
        } else if (self.value < value && self.left !== null) {
            self.left = this.remove(value, self.left);
            return self;
        } else if (self.value > value && self.right !== null) {
            self.right = this.remove(value, self.right);
            return self;
        } else if (self.left === null && self.right === null) {
            return self;
        } else {
            if (self.left === null && self.right !== null) {
                self = self.right;
                return self;
            } else if (self.right === null && self.left !== null) {
                self = self.left;
                return self;
            }
            if (self.right !== null) {
                let newNode = this.searchMin(self.right);
                self.value = newNode.value;
                if (newNode.value !== null)
                    self.right = this.remove(newNode.value, self.right);
                return self;
            }
            return self;
        }
    }
}
