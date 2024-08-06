class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.display();
    }

    delete() {
        if (this.head !== null) {
            if (this.head.next === null) {
                this.head = null;
            } else {
                let current = this.head;
                while (current.next.next !== null) {
                    current = current.next;
                }
                current.next = null;
            }
        }
        this.display();
    }

    display() {
        const listElement = document.getElementById('linkedList');
        listElement.innerHTML = '';
        let current = this.head;
        while (current !== null) {
            const li = document.createElement('li');
            li.textContent = current.value;
            listElement.appendChild(li);
            // Animate new list item
            setTimeout(() => li.classList.add('show'), 10);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();

document.getElementById('insertButton').addEventListener('click', () => {
    const value = document.getElementById('inputValue').value;
    if (value) {
        linkedList.insert(value);
        document.getElementById('inputValue').value = '';
    }
});

document.getElementById('deleteButton').addEventListener('click', () => {
    linkedList.delete();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const value = document.getElementById('inputValue').value;
        if (value) {
            linkedList.insert(value);
            document.getElementById('inputValue').value = '';
        }
    } else if (event.key === 'Delete') {
        linkedList.delete();
    }
});
