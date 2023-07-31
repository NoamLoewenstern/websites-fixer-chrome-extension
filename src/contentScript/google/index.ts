import chatgptSidebarCB from './chatgpt-sidebar';

const allGoogleCBs: WebsitePlugin = {
  urlMatch: /www\.google\.com/,
  cbs: [chatgptSidebarCB],
  sequenceImportant: true,
};

export default allGoogleCBs;
