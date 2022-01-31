import S from '@sanity/desk-tool/structure-builder'
import { createSuperPane } from 'sanity-super-pane'

export default () => {
  return (
    S.list()
      .title('Things')
      .items(        [
          S.listItem()
            .title('Guides')
            .child(
              S.list()
                .title('Guides')
                .items([
                  S.listItem()
                    .title('Categories')
                    .child(
                      S.documentTypeList('guideCategory')
                    ),
                  S.listItem()
                    .title('-> Multiple edit (for Categories)')
                    .child(createSuperPane('guideCategory', S)),
                  S.listItem()
                    .title('Desktop')
                    .child(
                      S.documentTypeList('guideForDesktop')
                    ),
                  S.listItem()
                    .title('-> Multiple edit (for Desktop)')
                    .child(createSuperPane('guideForDesktop', S)),
                  S.listItem()
                    .title('Mobile')
                    .child()
                ])
            ),
        S.listItem()
          .title('Update Notices')
          .child(
            S.list()
              .title('Update Notices')
              .items([
                S.listItem()
                  .title('Update Notice - Large')
                  .child(
                    S.documentTypeList('updateNoticeLarge')
                  ),
                S.listItem()
                  .title('-> Multiple edit (for Categories)')
                  .child(createSuperPane('updateNoticeLarge', S)),
                S.listItem()
                  .title('Update Notice - Small')
                  .child(
                    S.documentTypeList('updateNoticeSmall')
                  ),
                S.listItem()
                  .title('-> Multiple edit (for Desktop)')
                  .child(createSuperPane('updateNoticeSmall', S)),
              ])
          ),
          S.listItem()
            .title('FAQ')
            .child(
              S.list()
                .title('FAQ')
                .items([])
            ),
          S.listItem()
            .title('Blog')
            .child(
              S.list()
                .title('Blog')
                .items([])
            ),
          S.listItem()
            .title('Landing Page')
            .child(
              S.list()
                .title('Landing Page')
                .items([])
            ),
          S.listItem()
            .title('Assets')
            .child(
              S.list()
                .title('Assets')
                .items([])
            )
          // ,
          // ...S.documentTypeListItems()
        ]
      )
  )

}
