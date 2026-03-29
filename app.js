// Data counters
let stats = { calls: 0, visits: 0 };

function processData() {
    const raw = document.getElementById('rawInput').value;
    if (!raw) return;

    // The Sunrise Parser Logic
    const timestampMatch = raw.match(/\d{1,2}\/\d{1,2}\/\d{4} \d{2}:\d{2}:\d{2}/);
    const timestamp = timestampMatch ? timestampMatch[0] : new Date().toLocaleString();
    
    // Simple logic to detect if it's Activity or Feedback
    if (raw.includes("Sales")) {
        // Parsing Activity
        stats.calls += 20; // Example increment based on your sample
        updateUI(`Activity Parsed: ${timestamp}`, "success");
    } else {
        // Parsing Feedback
        stats.visits += 1;
        updateUI(`Client Feedback Logged: ${timestamp}`, "info");
    }

    document.getElementById('rawInput').value = "";
    document.getElementById('call-count').innerText = stats.calls;
    document.getElementById('visit-count').innerText = stats.visits;
}

function updateUI(msg, type) {
    const log = document.getElementById('log');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerText = msg;
    log.prepend(entry);
}

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
