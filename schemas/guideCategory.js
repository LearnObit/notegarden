export default {
  name: 'guideCategory',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '이름',
      type: 'string',
    },
    {
      name: 'description',
      title: '설명 (마우스 올렸을 때 뜰 것)',
      type: 'text',
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
    }
  ],
}
