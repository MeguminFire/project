const itData = {
    'Motherboard': `
        <p>The motherboard is the primary Printed Circuit Board (PCB) in a computer. It serves as the "spinal cord" of the system, allowing the CPU, RAM, and storage to communicate via high-speed lanes.</p>
        <div class="media-box"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Computer_Motherboard.jpg" alt="Motherboard Layout"></div>
        <p>A key feature is the <b>Chipset</b>, which acts as the communications controller. Modern boards also utilize <b>VRMs</b> (Voltage Regulator Modules) to convert the 12V power from the PSU into the tiny 1.2V-1.3V required by the CPU.</p>
        <p>Expansion is handled via PCIe slots, allowing for GPUs and NVMe SSDs to transmit data at speeds exceeding 7,000 MB/s.</p>`,
    
    'OSI': `
        <p>The OSI (Open Systems Interconnection) Model is a 7-layer framework for understanding network communication.</p>
        <div class="media-box"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/OSI_Model_v2.svg/1200px-OSI_Model_v2.svg.png" alt="OSI Model"></div>
        <p>Troubleshooting always starts at <b>Layer 1 (Physical)</b>: Are the cables plugged in? We then move to Layer 2 for MAC addresses and Layer 3 for IP routing.</p>`,

    'Kernel': `
        <p>The Kernel is the most essential part of an OS. It resides in the computer's memory and acts as the gatekeeper between software and hardware.</p>
        <p>It manages <b>Interrupts</b>, <b>Memory Allocation</b>, and <b>Process Scheduling</b>. In Windows, the 'NT Kernel' handles these tasks, while Linux uses a 'Monolithic Kernel'.</p>`,

    'Subnet': `
        <p>Subnetting is the practice of dividing a network into smaller, manageable pieces. This improves security and reduces network congestion.</p>
        <div class="media-box"><iframe src="https://www.youtube.com/embed/s_Ntt6eTn94"></iframe></div>
        <p>An IP address like 192.168.1.0/24 uses a Subnet Mask of 255.255.255.0 to define the network boundary.</p>`,

    'BSOD': `
        <p>A Blue Screen of Death is a kernel-level panic. It happens when Windows encounters an error so severe it must stop to prevent physical damage.</p>
        <div class="media-box"><img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Bsod_windows_10.png" alt="BSOD Example"></div>
        <div class="media-box"><iframe src="https://www.youtube.com/embed/S2O6_O9G_H4"></iframe></div>`,

    'NetFix': `
        <p>When the internet goes down, we follow the "Outside-In" rule. Check the ISP modem, then the router, then the local switch, then the PC.</p>
        <div class="media-box"><iframe src="https://www.youtube.com/embed/bsfNIn6-L_k"></iframe></div>`,

    'CPU': `<p>The CPU executes the 'Fetch-Decode-Execute' cycle. Modern CPUs have 'Cores' for parallel tasks and 'Cache' (L1/L2/L3) for ultra-fast data access.</p>`,
    'RAM': `<p>RAM is volatile storage. Without enough RAM, the OS uses 'Swap Space' on the hard drive, which causes significant system slowdowns.</p>`,
    'PSU': `<p>The PSU converts AC to DC. A failing PSU can cause random restarts, 'coil whine,' or complete hardware failure.</p>`,
    'GPU': `<p>The GPU has thousands of small cores for 'Parallel Processing'. It is used for rendering graphics and processing AI algorithms.</p>`,
    'FileSys': `<p>NTFS (Windows) supports encryption and large files, while FAT32 is compatible with almost everything but has a 4GB file limit.</p>`,
    'Virtual': `<p>Virtualization allows one physical server to run multiple Virtual Machines using a Hypervisor like VMware or Hyper-V.</p>`,
    'BIOS': `<p>BIOS/UEFI is the first software that runs. It performs the POST (Power-On Self-Test) to ensure the hardware is safe to boot.</p>`,
    'DNS': `<p>DNS is the 'Phonebook of the Internet'. It translates human names like google.com into IP addresses like 142.250.190.46.</p>`,
    'HardwareFix': `<p>Hardware diagnostics involve 'Reseating' RAM and checking for 'Bulging Capacitors' or thermal throttling issues.</p>`
};

function showTab(tabId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links span').forEach(s => s.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.getElementById('nav-' + tabId.split('-')[0]).classList.add('active');
    document.getElementById('detailPanel').style.display = 'none';
}

function openInfo(key) {
    const panel = document.getElementById('detailPanel');
    document.getElementById('detailTitle').innerText = key;
    document.getElementById('detailContent').innerHTML = itData[key];
    panel.style.display = 'block';
    panel.scrollIntoView({ behavior: 'smooth' });
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
    render();
    document.getElementById('dev').value=''; document.getElementById('iss').value=''; document.getElementById('sol').value='';
}

function render() {
    const area = document.getElementById('forumArea');
    area.innerHTML = '';
    const logs = JSON.parse(localStorage.getItem('it_logs')) || [];
    logs.forEach(l => {
        area.innerHTML += `<div class="forum-post"><strong>${l.dev}</strong> - <small>${l.date}</small><p>Issue: ${l.iss}</p><p>${l.sol}</p></div>`;
    });
}
render();
