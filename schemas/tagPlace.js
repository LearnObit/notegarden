export default {
  name: 'tagPlace',
  title: '등록된 태그들',
  type: 'document',
  fields: [
    {
      name: 'tags',
      title: '태그',
      type: 'array',
      of: [{
        name: 'tag',
        title: '태그',
        type: 'string',
      }]
    }
  ],
  initialValue: {
  },
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: (title && (title.ko ? (title.ko + (title.en ? ` (${title.en})` : '')) : (title.en))) || '이름없음',
      }
    }
  }
}
