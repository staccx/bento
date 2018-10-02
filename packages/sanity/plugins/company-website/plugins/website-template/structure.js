import S from "@sanity/desk-tool/structure-builder"
import PageIcon from "react-icons/lib/md/description"
import DataIcon from "react-icons/lib/md/list"
import HomeIcon from "react-icons/lib/md/home"
import PeopleIcon from "react-icons/lib/md/people"
import MenuIcon from "react-icons/lib/md/menu"
import CompanyIcon from "react-icons/lib/md/apps"
import ProcuctIcon from "react-icons/lib/md/widgets"
import ClientIcon from "react-icons/lib/md/attach-money"
import TeamIcon from "react-icons/lib/md/wc"
import ServiceIcon from "react-icons/lib/md/domain"
import CampaignIcon from "react-icons/lib/md/toys"
import mediaLibGenerator from "../structure-images-and-files"

const singleton = (title, schemaType, documentId) =>
  S.listItem()
    .title(title)
    .child(
      S.editor()
        .id(title)
        .schemaType(schemaType)
        .documentId(documentId)
    )

// ae56715e-4e83-4748-b307-524787231b6b - Team page
// beb2be49-57cb-4cc6-9cd9-2b87656dd8d3 - Home page
// 831e840a-74e5-402d-ab6a-89505d19a01d - Clients page
// ffe2cd1d-2fed-4436-9942-ad9674dd80ea - Main menu
export default () =>
  S.list()
    .title("Stacc CMS")
    .items([
      ...mediaLibGenerator("Assets"),
      S.listItem()
        .title("Pages")
        .icon(PageIcon)
        .child(
          S.list()
            .title("Pages")
            .items([
              singleton(
                "Home Page",
                "homePage",
                "beb2be49-57cb-4cc6-9cd9-2b87656dd8d3"
              ).icon(HomeIcon),
              singleton(
                "Clients Page",
                "clientsPage",
                "831e840a-74e5-402d-ab6a-89505d19a01d"
              ).icon(ClientIcon),
              singleton(
                "Team Page",
                "teamPage",
                "ae56715e-4e83-4748-b307-524787231b6b"
              ).icon(TeamIcon),
              S.documentTypeListItem("productPage").title(
                "Solution(Product) Pages"
              ),
              S.documentTypeListItem("servicePage")
                .title("Service Pages")
                .icon(ServiceIcon),
              S.documentTypeListItem("client"),
              S.documentTypeListItem("campaignPage").icon(CampaignIcon),
              S.documentTypeListItem("page")
            ])
        ),
      S.listItem()
        .title("Data")
        .icon(DataIcon)
        .child(
          S.list()
            .title("Data")
            .items([
              singleton("Menu", "menu", "ffe2cd1d-2fed-4436-9942-ad9674dd80ea")
                .title("Main Menu")
                .icon(MenuIcon),
              S.documentTypeListItem("person")
                .title("People")
                .icon(PeopleIcon),
              S.documentTypeListItem("product")
                .title("Products")
                .icon(ProcuctIcon),

              S.documentTypeListItem("company")
                .title("Stacc divisions")
                .icon(CompanyIcon)
            ])
        )
    ])
