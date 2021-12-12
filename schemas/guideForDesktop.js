export default {
  name: 'guideForDesktop',
  title: 'Contents',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '이름',
      type: 'string',
    },
    {
      name: 'categories',
      title: '카테고리',
      description: '여러 카테고리에 해당하는 경우 여러개 중복 선택하면 됨',
      type: 'array',
      of: [{type: 'reference', to: {type: 'guideCategory'}}],
      noTranslation: true
    },

    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // },
    {
      name: 'body',
      title: '본문',
      type: 'blockContent',
    },
    {
      name: 'ps',
      title: '부록',
      description: 'ex: 사용 예시, LaTeX 테이블 등',
      type: 'blockContent',
    },
    {
      name: 'shortkeys',
      title: '관련 단축키',
      type: 'array',
      of: [{type: 'shortkeys'}],
      noTranslation: true
    },
    {
      name: 'tags',
      title: '태그 (같은 태그를 가진 가이드들이 참조 가이드로 추가될 것)',
      type: 'tags',
      noTranslation: true
    },
    {
      name: 'slideNumber',
      title: '순서',
      type: 'number',
      description: '높을 수록 위에 (오른쪽일수록 높은 것)',
      options: {
        range: {min: 0, max: 10, step: 0.1}
      },
      noTranslation: true
    },
    {
      name: 'updatedAt',
      title: '이 시간 이전에 확인한 유저들은 전부 다시 보게하기',
      type: 'object',
      fields: [
        {
          name: 'note',
          type: 'note',
          options: {
            headline: '가이드에 Breaking change가 발생했을 경우에만 쓸 것',
            message: '아니면 걍 비워두시오',
            tone: 'critical'
          }
        },
        {
          name: 'datetime',
          title: '날짜',
          type: 'datetime'
        }
      ],
      noTranslation: true
    },
    {
      name: 'note',
      type: 'note',
      options: {
        headline: 'Publish를 누르는건 앱에 배포하겠다는 것',
        message: '그냥 저장하고싶은거면 자동 저장되니까 가만 놔두기 / \n 그리고 다 작성해서 배포하고싶으면 Publish 누르기',
        tone: 'caution'
      },
      noTranslation: true
    },
  ],
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
