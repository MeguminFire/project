const itData = {
    'Hardware': {
        'Motherboard': {
            title: 'Motherboard Architecture',
            content: `<p>The motherboard is the primary Printed Circuit Board (PCB) that acts as the backbone of the entire computer. For CSS students, it's essential to understand that the motherboard dictates the type of CPU, RAM, and storage the system can support. It contains the Chipset, which manages high-speed data flow between the processor and external devices.</p>
            
            <p>Technically, the motherboard houses the VRM (Voltage Regulator Modules) which are responsible for stepping down high-voltage power from the PSU to the precise 1.2V-1.35V required by the CPU. Modern boards also feature M.2 slots for NVMe SSDs and PCIe lanes for high-end graphics cards.</p>
            <p>Common troubleshooting involves the "POST" (Power-On Self-Test). If a computer fails to start, technicians listen for "Beep Codes" or look at Debug LEDs on the board to identify if the RAM, CPU, or GPU is the cause of the failure.</p>`
        },
        'CPU': {
            title: 'CPU & Thermal Management',
            content: `<p>The Central Processing Unit (CPU) is the "brain" of the computer, executing billions of instructions per second using the Fetch-Decode-Execute cycle. Modern CPUs are multi-core, allowing them to handle several tasks simultaneously through parallel processing.</p>
            <p>A critical aspect of CSS is Thermal Management. The CPU generates intense heat and requires a heatsink and thermal paste to transfer that heat away. If the temperature exceeds safe limits, the CPU will "Thermal Throttle," slowing itself down to prevent permanent hardware damage.</p>
            <p>Troubleshooting often involves checking the "BIOS Temperature Monitor" or using software to check for "Bottlenecking." If a PC randomly shuts down during heavy tasks, it is almost always an overheating issue caused by dried thermal paste or a failing fan.</p>`
        }
    },
    'Software': {
        'Kernel': {
            title: 'The Operating System Kernel',
            content: `<p>The Kernel is the core part of an Operating System that manages system resources and hardware communication. It resides in the RAM from the moment the PC boots up and acts as a bridge between your apps and the physical hardware like the disk and CPU.</p>
            <p>In Windows, the NT Kernel manages "System Calls," which are requests made by software to perform tasks like saving a file or drawing a pixel on the screen. It ensures that one application cannot crash the entire system by isolating memory into "User Mode" and "Kernel Mode."</p>
            <p>When you see a "Kernel Panic" or a BSOD, it means a driver (software that talks to hardware) has made a mistake that the Kernel cannot fix. Troubleshooting involves checking "Device Manager" for driver conflicts or using "System File Checker" (SFC /scannow) to repair corrupted OS files.</p>`
        }
    },
    'Networking': {
        'OSI Model': {
            title: 'The 7-Layer OSI Model',
            content: `<p>The OSI (Open Systems Interconnection) Model is the global standard for understanding network communication. It breaks down how data travels across the world into 7 distinct layers, from the physical cable (Layer 1) to the web browser (Layer 7).</p>
            
            <p>For CSS students, Layer 3 (Network) is the most important as it handles IP Addressing and Routing. Layer 4 (Transport) handles "Reliability" via TCP, ensuring that if a packet of data is lost, it is automatically re-sent until the message is complete.</p>
            <p>Troubleshooting always starts at Layer 1. If a computer has no internet, you check the physical RJ45 cable and the "Link Light" on the router before checking IP settings or software firewalls. This "Bottom-Up" approach is the mark of a professional technician.</p>`
        }
    }
    // You can follow this pattern to add as many as you want!
};

function showTab(pageId, category) {
    // 1. Hide all pages
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    
    // 2. Show the selected page
    const activePage = document.getElementById(pageId);
    activePage.style.display = 'block';
    
    // 3. Update active button style
    document.querySelectorAll('.nav-links span').forEach(s => s.classList.remove('active'));
    // Find the button that was clicked and make it active
    event.currentTarget.classList.add('active');

    // 4. If it's a content page, render the cards
    if (category !== 'Logs') {
        renderGrid(category);
    }
    
    // 5. Hide the detail panel when switching
    closeDetail();
}

function renderGrid(category) {
    const grid = document.getElementById('cardGrid');
    grid.innerHTML = ''; 
    
    const items = itData[category];
    for (let key in items) {
        let card = document.createElement('div');
        card.className = 'info-card';
        card.innerHTML = `<h3>${key}</h3><p>Accessing encrypted data...</p>`;
        card.onclick = () => openInfo(category, key);
        grid.appendChild(card);
    }
}

function openInfo(cat, key) {
    const panel = document.getElementById('detailPanel');
    document.getElementById('detailTitle').innerText = itData[cat][key].title;
    document.getElementById('detailContent').innerHTML = itData[cat][key].content;
    panel.style.display = 'block';
}

function closeDetail() {
    document.getElementById('detailPanel').style.display = 'none';
}

function addPost() {
    const dev = document.getElementById('dev').value;
    const iss = document.getElementById('iss').value;
    const sol = document.getElementById('sol').value;
    if(!dev || !iss) return;
    const post = { dev, iss, sol, date: new Date().toLocaleString() };
    let logs = JSON.parse(localStorage.getItem('it_logs')) || [];
    logs.unshift(post);
    localStorage.setItem('it_logs', JSON.stringify(logs));
    renderLogs();
    document.getElementById('dev').value=''; document.getElementById('iss').value=''; document.getElementById('sol').value='';
}

function renderLogs() {
    const area = document.getElementById('forumArea');
    area.innerHTML = '';
    const logs = JSON.parse(localStorage.getItem('it_logs')) || [];
    logs.forEach(l => {
        area.innerHTML += `<div class="forum-post" style="background:rgba(255,255,255,0.05); border:1px solid var(--primary); padding:15px; margin-bottom:10px; border-radius:10px;">
            <strong>${l.dev}</strong> - <small>${l.date}</small><p>Status: ${l.iss}</p><p>${l.sol}</p></div>`;
    });
}
renderLogs();
