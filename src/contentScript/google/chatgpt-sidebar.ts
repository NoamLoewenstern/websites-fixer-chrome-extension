import { waitForValue } from '~/utils/helpers';

export default async function fixChatGPTSideBar() {
  const chatSideBar = await waitForValue(() => document.querySelector('[id$="search-enhance"]') as HTMLDivElement, {
    ms: 2000,
    message: 'Could not find chat sidebar',
  });

  const shadowRoot = await waitForValue(() => chatSideBar.shadowRoot, {
    ms: 4000,
    message: 'Could not find chat sidebar shadow root',
  });
  const chatCard = await waitForValue(
    () =>
      [...shadowRoot.querySelectorAll('div')].find(div =>
        div.className.split(' ').some(className => className.startsWith('chat-gpt-card')),
      ),
    { ms: 10000, message: 'Could not find chatGPT card element in chat sidebar' },
  );

  chatCard.style.width = '600px';
  chatCard.style.direction = 'ltr';
}
