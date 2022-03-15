export default {
  name: 'updateNotice',
  title: 'Update Notice',
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
      description: '주의: 여기서 설정되는 날짜는 지역시간이고 앱에서 측정되는 날짜는 UTC 시간임',
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
