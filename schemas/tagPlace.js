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
    tags: []
  },
  preview: {
    select: {
      tags: 'tags'
    },
    prepare(selection) {
      const {tags} = selection
      return {
        title: tags.length ? tags.join(',') : '없음'
      }
    }
  }
}
