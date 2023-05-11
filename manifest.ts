import { ManifestV3Export } from '@crxjs/vite-plugin';
import packageJson from './package.json';
const manifest: ManifestV3Export = {
  manifest_version: 3,
  name: 'Websites Fixer',
  version: packageJson.version,
  action: {
    default_title: 'Popup',
    default_popup: 'src/popup/index.html',
    default_icon: {
      '16': 'logo128.png',
      '32': 'logo128.png',
      '48': 'logo128.png',
      '128': 'logo128.png',
    },
  },
  icons: {
    '48': 'logo128.png',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/contentScript/content.ts'],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        // 'src/contentScript/index.css',
        'logo128.png',
        'src/assets/logo128.png',
      ],
      matches: ['<all_urls>'],
    },
  ],
  content_security_policy: {
    extension_pages:
      "default-src 'self'; script-src: 'self' 'unsafe-inline'; object-src 'self' ; default-src 'none'; frame-ancestors 'none';",
  },
  permissions: ['storage', 'activeTab'],
  background: {
    service_worker: 'src/backgroundScripts/background.ts',
    type: 'module',
  },
  options_ui: {
    page: 'src/options/index.html',
    open_in_tab: true,
  },
};
export default manifest;
