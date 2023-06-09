import { gql } from "@apollo/client";
import { SUPPLIER_DETAILS_FRAGMENT, SUPPLIER_FRAGMENT } from "./fragments";

export const GET_SUPPLIER = gql`
  ${SUPPLIER_FRAGMENT}
  query getSupplier($id: String!) {
    getSupplier(id: $id) {
      ...Supplier
    }
  }
`;

export const GET_SUPPLIER_DETAILS = gql`
  ${SUPPLIER_DETAILS_FRAGMENT}
  query getSupplierDetails($id: String!) {
    getSupplierDetails(id: $id) {
      ...SupplierDetails
    }
  }
`;

export const GET_SUPPLIER_MEDIA = gql`
  query getSupplier($id: String!) {
    getSupplier(id: $id) {
      id
      images {
        fileName
        url
        size
        updatedOn
      }
      videos {
        fileName
        url
        size
        updatedOn
      }
      files {
        fileName
        url
        size
        updatedOn
      }
    }
  }
`;

export const GET_SUPPLIERS = gql`
  ${SUPPLIER_FRAGMENT}
  query getSuppliers(
    $limit: Float
    $cursor: String
    $filters: [QueryFilterInput!]
  ) {
    getSuppliers(limit: $limit, cursor: $cursor, filters: $filters) {
      cursor
      items {
        ...Supplier
      }
    }
  }
`;

export const CREATE_SUPPLIER = gql`
  ${SUPPLIER_FRAGMENT}
  mutation createSupplier($data: SupplierInput!) {
    createSupplier(data: $data) {
      ...Supplier
    }
  }
`;

export const SAVE_SUPPLIER = gql`
  ${SUPPLIER_FRAGMENT}
  mutation saveSupplier($data: SupplierInputUpdate!) {
    saveSupplier(data: $data) {
      ...Supplier
    }
  }
`;
