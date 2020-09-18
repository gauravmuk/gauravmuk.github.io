var version = 12;
if (location.hostname === 'localhost') {
    importScripts(`https://cdn.pushcrew.com/sw/c746a6786890c4e74cb25498556803fc.js`);
} else {
    importScripts('https://cdn.pushcrew.com/sw/340dd5bbb930dfb5357a3220c40f3127.js');
}

