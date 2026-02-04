const itData = {
    'Motherboard': {
        title: 'Motherboard & System Interconnects',
        content: `
            <p>The motherboard is the foundational printed circuit board (PCB) that hosts the primary electronic components of a computer system. It acts as the central hub, facilitating communication between the CPU, memory, and peripheral devices through a complex network of buses and traces. In a professional CSS environment, understanding form factors like ATX, Micro-ATX, and ITX is critical for compatibility during system assembly.</p>
            <div class="media-box"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Computer_Motherboard.jpg"></div>
            <p>Beyond physical mounting, the motherboard houses the Voltage Regulator Modules (VRM), which are responsible for stepping down high-voltage power from the PSU to the precise, low-voltage levels required by the processor. Modern motherboards also feature complex chipsets that manage data flow speed and determine the number of available PCIe lanes for expansion cards and NVMe storage.</p>
            <p>For Grade 11 students, troubleshooting often involves identifying the Northbridge and Southbridge functions (though now largely integrated into the CPU). Common points of failure include leaking capacitors, overheating VRMs, or corrupted CMOS settings which can be reset by removing the CR2032 battery.</p>`
    },
    'OSI': {
        title: '7-Layer OSI Reference Model',
        content: `
            <p>The Open Systems Interconnection (OSI) model is a conceptual framework used to understand network interactions in seven distinct layers. Starting from the Physical Layer (Layer 1), which involves the actual hardware like cables and hubs, up to the Application Layer (Layer 7), which interacts with end-user software. It is the global standard for network protocol design and troubleshooting.</p>
            <div class="media-box"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/OSI_Model_v2.svg/1200px-OSI_Model_v2.svg.png"></div>
            <p>The Network Layer (Layer 3) is where IP addressing and routing occur, while the Transport Layer (Layer 4) ensures data reliability through TCP (Transmission Control Protocol). For CSS students, identifying which layer a fault occurs in is vital—for example, a bad RJ45 crimp is a Layer 1 issue, whereas a wrong IP gateway is a Layer 3 issue.</p>
            <p>Each layer provides a service to the layer above it and receives a service from the layer below. By isolating problems to a specific layer, technicians can avoid unnecessary work, such as reinstalling software when the actual problem is a faulty network switch or a misconfigured router firewall.</p>`
    },
    'Kernel': {
        title: 'The System Kernel & OS Heart',
        content: `
            <p>The Kernel is the most essential part of an operating system, serving as the main interface between the computer's physical hardware and its software processes. It is the first program loaded on startup and remains in the RAM to manage memory, CPU tasks, and disk access. Without the kernel, software would have no way to communicate with the hardware in a safe, organized manner.</p>
            <p>In modern computing, we primarily see Monolithic kernels (like Linux) and Hybrid kernels (like the Windows NT kernel). The kernel operates in a protected memory space called 'Kernel Mode,' which has full access to the hardware. User-level applications run in 'User Mode,' having to request hardware access through 'System Calls' to the kernel to prevent system crashes.</p>
            <p>Troubleshooting kernel issues often involves analyzing 'Kernel Panics' or Blue Screens. These usually occur when a driver (which also runs in kernel space) attempts to access memory it doesn't own, forcing the kernel to halt the system to prevent permanent data corruption or physical hardware damage.</p>`
    }
    // ... Additional entries for DNS, TCP/IP, CPU, RAM follow this pattern
};

// Search and Filter Logic
function filterContent() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.getElementsByClassName('info-card');
    
    for (let card of cards) {
        if (card.innerText.toLowerCase().includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

function openInfo(key) {
    const detail = document.getElementById('detailPanel');
    document.getElementById('detailTitle').innerText = itData[key].title;
    document.getElementById('detailContent').innerHTML = itData[key].content;
    detail.style.display = 'block';
    detail.scrollIntoView({ behavior: 'smooth' });
}

function closeDetail() {
    document.getElementById('detailPanel').style.display = 'none';
}

function showTab(tabId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    // Logic to render cards based on tab...
}

// Initial Render of Cards
function renderCards() {
    const grid = document.getElementById('cardGrid');
    for (let key in itData) {
        let div = document.createElement('div');
        div.className = 'info-card';
        div.innerHTML = `<h3>${key}</h3><p>View Technical Specs</p>`;
        div.onclick = () => openInfo(key);
        grid.appendChild(div);
    }
}
renderCards();
