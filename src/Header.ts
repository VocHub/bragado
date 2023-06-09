import WebpackUserscript from 'webpack-userscript';

const icon =
  ' data:image/jpeg;base64,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';

function generateHeaders(isDevelopment: boolean, buildVersion?: string): WebpackUserscript.HeaderObject {
  /* eslint-disable sort-keys */
  const header: WebpackUserscript.HeaderObject = {
    name: 'mangareader',
    description: 'some quality-of-life improvements for a few manga reading sites',
    version: buildVersion !== undefined ? buildVersion : '[version]',
    author: 'mangadoot',
    namespace: 'https://github.com/mangadoot',
    license: 'MIT',
    match: ['*://catmanga.org/*', '*://readgrandblue.com/*'],
    connect: ['catmanga.org', 'readgrandblue.com'],
    noframes: true,
    'run-at': 'document-end',
    grant: ['GM.registerMenuCommand'],
    icon,
  };
  /* eslint-enable sort-keys */

  if (isDevelopment) {
    header.name += ' (DEV)';
    header.version += '.[buildTime]';
    delete header.downloadURL;
    delete header.updateURL;
  }

  return header;
}

export default generateHeaders;
