document.addEventListener('DOMContentLoaded', () => {
    // Terminal Typing Animation
    const terminal = document.getElementById('terminal');
    const commands = [
        "ssh root@portfolio",
        "Access granted.",
        "Loading profile data...",
        "User: Professional Procrastinator",
        "Skills: [Docker, Python, Linux, Django]",
        "Status: Ready for new challenges."
    ];

    let cmdIndex = 0;

    function addTerminalLine(text, isCmd) {
        const line = document.createElement('div');
        line.className = 'term-line';
        if (isCmd) {
            line.innerHTML = `<span class="prompt">guest@portfolio:~$</span><span class="cmd">${text}</span>`;
        } else {
            line.textContent = text;
        }
        terminal.appendChild(line);
    }

    function typeTerminal() {
        if (cmdIndex < commands.length) {
            const isCmd = cmdIndex === 0;
            addTerminalLine(commands[cmdIndex], isCmd);
            cmdIndex++;
            setTimeout(typeTerminal, 800 + Math.random() * 500);
        } else {
            addTerminalLine("", true); // Empty prompt at the end
        }
    }

    setTimeout(typeTerminal, 1000);

    // Matrix Background Effect (Simple canvas)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.getElementById('matrixBg').appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~';
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(5, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff9d';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
                drops[i] = 0;

            drops[i]++;
        }
    }

    setInterval(drawMatrix, 33);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
