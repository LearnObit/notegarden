export default {
  name: 'sharedContents',
  title: '공유된 것들',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '타이틀',
      type: 'string',
    },
    {
      name: 'description',
      title: '설명',
      type: 'text',
    },
    {
      name: 'tags',
      title: '태그',
      type: 'array',
      of: [{
        name: 'tag',
        title: '태그',
        type: 'string',
      }]
    },
    {
      name: 'language',
      title: '언어',
      type: 'string',
    },
    {
      name: 'previewContents',
      title: '프리뷰 단어들',
      type: 'string',
    },
    {
      name: 'count',
      title: '숫자',
      type: 'number',
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'number',
    },
    {
      name: 'userInfo',
      type: 'object',
      title: '유저 정보',
      fields: [
        {
          name: 'name',
          title: '이름',
          type: 'string'
        },
        {
          name: 'id',
          title: '고유 아이디',
          type: 'string'
        },
        {
          name: 'level',
          title: '레벨',
          type: 'string'
        }
      ]
    },
    {
      name: 'downloadedUsers',
      title: '다운받은 유저들',
      type: 'array',
      of: [{
        name: 'userId',
        title: '아이디',
        type: 'string',
      }]
    },

  ],
  initialValue: {
    title: '',
    description: '',
    tags: [],
    language: '',
    previewContents: '',
    count: 0,
    likes: 0
  },
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title || '이름없음',
      }
    }
  }
}
