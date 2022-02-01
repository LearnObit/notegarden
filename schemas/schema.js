// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import guideCategory from './guideCategory'
import guideForDesktop from './guideForDesktop'
import shortKeys from './shortkeys'
import strings from './strings'
import updateNotice from './updateNotice'

const customSchemaTypes = [
  shortKeys,
  blockContent,
  guideCategory,
  guideForDesktop,
  strings,
  updateNotice,
]

const addLocalizationToDocumentType = (schemaType) => {
  if (schemaType.type !== 'document') {
    return schemaType
  }

  return {
    ...schemaType,
    fields: schemaType.fields.map((field) => {
      if (field.noTranslation) {
        return field
      } else {
        return (
          {
            name: field.name,
            title: field.title,
            type: 'object',
            base: 'ko',
            languages: ['ko', 'en'],
            i18n: true,
            options: {
              i18n: true,
              messages: {
                loading: 'Loading languages...',
                missingTranslations: 'Missing translations...',
              },
            },
            fieldsets: [
              {
                title: '번역',
                name: 'translations',
                options: { collapsible: true }
              }
            ],
            fields: [
              {
                ...field,
                name: 'ko',
                title: '한국어'
              },
              {
                ...field,
                name: 'en',
                title: '영어',
                fieldset: 'translations'
              }
            ]
          })
      }
    })
}

//   return {
//     ...schemaType,
//     i18n: {
//       ...schemaType.i18n,
//       base: {name : "en",  title: "English" },
//       languages: [{name : "ko",  title: "Korean" }, {name : "en",  title: "English" }],
// // change the names of the default fields
//       fieldNames: {
//         lang: 'i18n_lang',
//         references: 'i18n_refs'
//       }
//     },
// // add the fields in so we can query with them on graphql
//     fields: [
//       {
//         name: 'i18n_lang',
//         type: 'string'
//       },
//       {
//         name: 'i18n_refs',
//         type: 'array',
//         hidden: true,
//         of: [{
//           type: 'i18n_refs_object',
//         }]
//       },
//       ...schemaType.fields
//     ]
//   }
}

const addLocalizationToSchemaType = (schemaType) => {
  if(schemaType.type === 'object') {
    return schemaType
  } else {
    return addLocalizationToDocumentType(schemaType)
  }
}

// const i18n_refs_object = {
//   name: 'i18n_refs_object',
//   type: 'object',
//   fields: [{
//     type: 'string',
//     name: 'lang'
//   },
//     {
//       type: 'reference',
//       name: 'ref',
// // map over all the custom values to create a dynamic array of types which should be referenced
//       to: customSchemaTypes.map(customSchema => customSchema?.type === 'document' ? { type: customSchema.name} : null).filter(Boolean)
//     }]
// }

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
// add the custom types and map them with the config and fields and finally add the refs object in as well
    ...customSchemaTypes,
    // i18n_refs_object,
  ].map(schema => addLocalizationToSchemaType(schema))),
})
