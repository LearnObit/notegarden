export default {
  name: 'updateNoticeSmall',
  title: 'Update Notice - Small',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: '업데이트 내용',
      type: 'text',
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
      description: 'description'
    },
    prepare(selection) {
      const { description } = selection
      return {
        description: (description && (description.ko ? (description.ko + (description.en ? ` (${description.en})` : '')) : (description.en))) || '내용없음',
      }
    }
  }
}
