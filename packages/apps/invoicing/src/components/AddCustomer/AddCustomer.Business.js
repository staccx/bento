import React, { Component } from "react"
import { Heading, CompanyInput, Layout, Input, CheckBox } from "@staccx/base"
import styled from "styled-components"

class AddCustomerBusiness extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      showCompanyFields: false,
      selectedCompany: {
        name: null,
        taxId: null,
        address: null,
        postCode: null
      }
    }

    this.setCompany = this.setCompany.bind(this)
  }

  setCompany(company) {
    this.setState({
      showCompanyFields: true,
      selectedCompany: {
        name: company.navn,
        taxId: company.organisasjonsnummer,
        address: company.postadresse ? company.postadresse.adresse : null,
        postCode: company.postadresse ? company.postadresse.postnummer : null
      }
    })
  }

  render() {
    return (
      <div>
        <Heading level={2}>Bedriftskunde</Heading>
        <Layout>
          <CompanyInput
            label="Firmanavn"
            id="findCompany"
            onSelect={company =>
              company
                ? company.navn && this.setCompany(company)
                : this.setState({ showCompanyFields: false })
            }
          />
          {this.state.showCompanyFields && (
            <MoreFields>
              <Layout>
                <Input
                  label="Organisasjonsnummer"
                  id="companyTaxId"
                  defaultValue={this.state.selectedCompany.taxId}
                />
                <Input
                  label="Forretningsadresse"
                  id="companyAddress"
                  defaultValue={this.state.selectedCompany.address}
                />
                <Input
                  label="Postnummer"
                  id="companyPostalcode"
                  defaultValue={this.state.selectedCompany.postCode}
                />
              </Layout>
            </MoreFields>
          )}

          <Input
            label="E-postadresse til fakturamottak (kan endres før du sender)"
            id="invoiceEmail"
          />
          <CheckBox id="foreignCustomer">Bedriften er i utlandet</CheckBox>
        </Layout>
      </div>
    )
  }
}

const MoreFields = styled.div`
  border: 1px solid #ddd;
  padding: 24px;
`

export default AddCustomerBusiness
