const itData = {
    'Motherboard': {
        title: 'Mastering the Motherboard (Mainboard)',
        content: `
            <p>The motherboard is the primary circuit board of a computer, acting as the "nervous system" that connects every peripheral and internal component. For CSS students, it is vital to recognize the different form factors such as ATX and ITX, which determine the physical size and case compatibility of a build.</p>
                        <p>Technically, the motherboard houses the chipset, which acts as the communications controller between the CPU and other devices. It also contains the VRM (Voltage Regulator Modules) that ensure the CPU receives steady, low-voltage power. High-end boards feature multiple layers of copper for better heat dissipation and signal integrity.</p>
            <p>Troubleshooting often involves diagnosing "POST" (Power-On Self-Test) errors. If a board fails to boot, technicians look for "Beep Codes" or LED debug indicators. Common fixes include clearing the CMOS to reset BIOS settings or checking for physical damage like bulging capacitors.</p>`
    },
    'OSI': {
        title: 'The 7-Layer OSI Reference Model',
        content: `
            <p>The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes network functions into seven distinct layers. Troubleshooting starts at Layer 1 (Physical), which covers cables and hardware, and moves up to Layer 7 (Application), where the user interacts with software.</p>
                        <p>For Grade 11 CSS, understanding Layer 3 (Network) is crucial because it handles IP addressing and routing. Layer 4 (Transport) manages data reliability through TCP and UDP protocols. By isolating a network fault to a specific layer, you save time and avoid misdiagnosing software errors as hardware failures.</p>
            <p>A professional technician uses this model to communicate with others. For example, saying "The issue is at Layer 1" immediately tells everyone to check the Ethernet cables, switches, and physical ports before looking at IP settings or server configurations.</p>`
    },
    'Kernel': {
        title: 'System Kernel & Resource Management',
        content: `
            <p>The Kernel is the core program of an operating system, staying in memory to manage all hardware-software interactions. It is responsible for memory management, process scheduling, and disk access. It acts as a bridge, translating software requests into instructions the CPU can execute.</p>
            <p>Modern kernels operate in "Kernel Mode," which has full access to hardware. Applications run in "User Mode," which is restricted to prevent a single app crash from taking down the entire computer. This separation is key to system stability and security.</p>
            <p>When a system encounters a "Blue Screen" or "Kernel Panic," it means the kernel has detected a critical error it cannot recover from. This is often caused by a faulty device driver attempting to access a protected memory location. Troubleshooting involves analyzing minidump files to see which driver caused the crash.</p>`
    }
    // Add more categories here following the same title/content format
};

function renderGrid(tab) {
    const grid = document.getElementById('cardGrid');
    grid.innerHTML = ''; // Clear old broken boxes
    
    // Filter logic based on tab
    for (let key in itData) {
        let card = document.createElement('div');
        card.className = 'info-card';
        card.innerHTML = `<h3>${key}</h3><p>Initialize Technical Scan...</p>`;
        card.onclick = () => openInfo(key);
        grid.appendChild(card);
    }
}

function openInfo(key) {
    const panel = document.getElementById('detailPanel');
    document.getElementById('detailTitle').innerText = itData[key].title;
    document.getElementById('detailContent').innerHTML = itData[key].content;
    panel.style.display = 'block';
}

function showTab(tabId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links span').forEach(s => s.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.getElementById('nav-' + tabId.split('-')[0]).classList.add('active');
    renderGrid(tabId);
}

renderGrid('hw-tab'); // Initial start
