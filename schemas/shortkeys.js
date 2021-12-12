export default {
  name: 'shortkeys',
  type: 'object',
  title: '단축키들',
  fields: [
    {
      name: 'usage',
      title: '용도',
      type: 'strings'
    },
    {
      name: 'note',
      type: 'note',
      options: {
        headline: 'ctrl은 대신 mod로 써라',
        message: '맥에서는 ctrl 아니라 cmd임 그니까 유저 환경에따라 알아서 문자가 바뀌도록 ctrl 대신 mod로 써라 (ex: mod + z)',
        tone: 'caution'
      }
    },
    {
      name: 'key',
      type: 'string',
      title: '키'
    }
  ]
}
