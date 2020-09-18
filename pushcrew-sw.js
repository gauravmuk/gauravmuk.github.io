var version = 12;
if (location.hostname === 'localhost') {
    importScripts(`https://cdn.pushcrew.com/sw/c746a6786890c4e74cb25498556803fc.js`);
} else {
    importScripts('https://cdn.pushcrew.com/sw/e0a4b04cf201feb52c477318c588494b.js');
}

