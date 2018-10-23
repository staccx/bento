import S from "@sanity/desk-tool/structure-builder"
import PhotoIcon from "react-icons/lib/md/insert-photo"

const generate = (imageLibName, fileLibName) => [
  S.listItem()
    .title(imageLibName)
    .icon(PhotoIcon)
    .child(S.documentTypeList("sanity.imageAsset")),
  S.listItem()
    .title(fileLibName)
    .icon(PhotoIcon)
    .child(S.documentTypeList("sanity.fileAsset"))
]

export default (
  parentPane = null,
  imageLibName = "Image Library",
  fileLibName = "File explorer"
) =>
  parentPane
    ? [
        S.listItem()
          .title(parentPane)
          .child(
            S.list()
              .id(parentPane)
              .items(generate(imageLibName, fileLibName))
          )
      ]
    : generate(imageLibName, fileLibName)
