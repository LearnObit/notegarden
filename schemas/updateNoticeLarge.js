export default {
  name: 'updateNoticeLarge',
  title: 'Update Notice - Large',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '제목',
      type: 'string',
    },
    {
      name: 'body',
      title: '본문',
      type: 'blockContent',
    },
    {
      name: 'datetime',
      title: '날짜',
      type: 'datetime',
      noTranslation: true
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: (title && (title.ko ? (title.ko + (title.en ? ` (${title.en})` : '')) : (title.en))) || '제목 없음',
      }
    }
  }
}
