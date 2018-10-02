import S from "@sanity/desk-tool/structure-builder"
import PhotoIcon from "react-icons/lib/md/insert-photo"

export default () => [
  S.listItem()
    .title("Image library")
    .icon(PhotoIcon)
    .child(S.documentTypeList("sanity.imageAsset")),
  S.listItem()
    .title("File explorer")
    .icon(PhotoIcon)
    .child(S.documentTypeList("sanity.fileAsset"))
]
