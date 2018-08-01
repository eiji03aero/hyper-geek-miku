module.exports = {
  noFileDir: {
    RE: /no.*such.*file.*or.*directory/,
    message: 'ドコニ、イキタイノ・・・？',
    image: 'miku_wake_up'
  },
  noCommandFound: {
    RE: /command not found/,
    message: 'チョット、ナニヲイッテルノカワカラナイヨ・・・？',
    image: 'miku_wake_up'
  },
  nothingToCommit: {
    RE: /nothing to commit, working tree clean/,
    message: 'キレイナ、ツリーダヨ！',
    image: 'miku_cheerful'
  },
  commit: {
    RE: /file.*changed.*(insertions)?.*(deletions)?/,
    message: 'オシゴトヲ、キロクシタヨ！',
    image: 'miku_happy'
  },
  pushToRemote: {
    RE: /To.*https:\/\/github.com/,
    // To https://github.com.*
    message: 'オツカレサマー',
    image: 'miku_snooze'
  },
  pullFromRemote: {
    RE: /From.*https:\/\/github.com/,
    // From https://github.com.*
    message: 'ヨクワカラナイケド、モッテキタヨ！',
    image: 'miku_happy'
  },
}

