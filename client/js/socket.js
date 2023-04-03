class Client {
    constructor(name, color, position, ws) {
        this.name = name;
        this.color = color;
        this.position = position;
        this.ws = ws;
    }

    draw() {
        const gameContainer = document.getElementById('game-container');
        const cell = document.createElement('div');
        cell.style.backgroundColor = this.color;
        cell.style.gridColumn = this.position.x + 1;
        cell.style.gridRow = this.position.y + 1;
        cell.textContent = this.name;
        gameContainer.appendChild(cell);
    }

    move(direction) {
        switch (direction) {
            case 'up':
                this.position.y -= 1;
                break;
            case 'down':
                this.position.y += 1;
                break;
            case 'left':
                this.position.x -= 1;
                break;
            case 'right':
                this.position.x += 1;
                break;
            default:
                break;
        }

        this.ws.send(JSON.stringify({
            type: 'move',
            name: this.name,
            position: this.position,
        }));
    }
}

const url = 'ws://localhost:3000';
const ws = new WebSocket(url);

ws.addEventListener('open', () => {
    const connectForm = document.getElementById('connect-form');
    connectForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        const position = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) };
        const client = new Client(name, color, position, ws);

        // client.draw();

        ws.send(JSON.stringify({
            type: 'join',
            name: name,
            color: color,
            position: position,
        }));

        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    client.move('up');
                    break;
                case 'ArrowDown':
                    client.move('down');
                    break;
                case 'ArrowLeft':
                    client.move('left');
                    break;
                case 'ArrowRight':
                    client.move('right');
                    break;
                default:
                    break;
            }
        });
    });
});

ws.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    console.log(data);

    switch (data.type) {
        case 'message':
            console.log(`Received message: ${data.message}`);
            break;
        case 'join':
            const client = new Client(data.name, data.color, data.position, ws);
            client.draw();
            break;
        case 'move':
            const clients = document.querySelectorAll(`[data-name="${data.name}"]`);
            console.log(clients);
            console.log(data);
            clients.forEach((client) => {
                client.style.gridColumn = data.position.x + 1;
                client.style.gridRow = data.position.y + 1;
            });
            break;
        default:
            break;
    }
});
