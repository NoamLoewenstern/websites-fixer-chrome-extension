import googleCBs from './google';

const allCBs = [{ google: googleCBs }];

async function main() {
  for (const cb of allCBs) {
    for (const [name, cbInfo] of Object.entries(cb)) {
      if (cbInfo.urlMatch.test(window.location.href)) {
        console.log(`Running WebsitesFixer for: ${name}`);

        if (!cbInfo.sequenceImportant) {
          // running in parallel
          const result = await Promise.allSettled(cbInfo.cbs);
          result.forEach(r => {
            if (r.status === 'rejected') {
              console.error(r.reason);
            }
          });
        } else {
          // running in sequence
          for (const cb of cbInfo.cbs) {
            try {
              await cb();
            } catch (err) {
              console.error(err);
            }
          }
        }
      }
    }
  }
}

main();
