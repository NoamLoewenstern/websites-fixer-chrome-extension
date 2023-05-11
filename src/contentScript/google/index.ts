import chatgptSidebarCB from './chatgpt-sidebar';

const allGoogleCBs = { urlMatch: /www\.google\.com/, cbs: [chatgptSidebarCB], sequenceImportant: true };

export default allGoogleCBs;
