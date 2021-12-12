export default {
  supportedLanguages: [
    {id: 'ko', title: '한국어'},
    {id: 'en', title: '영어'},
    //...
  ],
  // Select Norwegian (Bokmål) by default
  // defaultLanguages: ['ko'],
  // Only show language filter for document type `page` (schemaType.name)
  // documentTypes: ['page'],
  filterField: (enclosingType, field, selectedLanguageIds) => {
    console.log(JSON.stringify(enclosingType.validation && Object.keys(enclosingType.validation[0])))
    if (enclosingType) {
      return true
    }
  }
}
