import { gql } from "@apollo/client";
import {
  ADDRESS_FRAGMENT,
  CONTACT_FRAGMENT,
  NOTE_FRAGMENT,
} from "../fragments/common";
import { SUPPLIER_ITEM_FRAGMENT } from "../supplierItem/fragments";
import {
  ARRIVAL_FRAGMENT,
  ARRIVAL_RELEASE_FRAGMENT,
} from "../arrival/fragments";
import { BID_FRAGMENT, BID_LINE_ITEM_FRAGMENT } from "../bid/fragments";

export const SUPPLIER_FRAGMENT = gql`
  ${ADDRESS_FRAGMENT}
  ${CONTACT_FRAGMENT}
  ${NOTE_FRAGMENT}
  fragment Supplier on Supplier {
    id
    status
    name
    website
    phoneNumber
    terms
    primaryPaymentType
    customerNumber
    defaultImageUrl
    createdOn
    createdBy
    updatedOn
    address {
      ...Address
    }
    shippingAddress {
      ...Address
    }
    contacts {
      ...Contact
    }
    notes {
      ...Note
    }
  }
`;

export const SUPPLIERS_FRAGMENT = gql`
  ${SUPPLIER_FRAGMENT}
  fragment SupplierQueryResponse on SupplierQueryResponse {
    cursor
    items {
      ...Supplier
    }
  }
`;

export const SUPPLIER_DETAILS_FRAGMENT = gql`
  ${SUPPLIER_FRAGMENT}
  ${SUPPLIER_ITEM_FRAGMENT}
  ${ARRIVAL_FRAGMENT}
  ${ARRIVAL_RELEASE_FRAGMENT}
  ${BID_FRAGMENT}
  ${BID_LINE_ITEM_FRAGMENT}
  fragment SupplierDetails on SupplierDetails {
    supplier {
      ...Supplier
    }
    supplierItems {
      ...SupplierItem
    }
    arrivals {
      ...Arrival
    }
    arrivalReleases {
      ...ArrivalRelease
    }
    bids {
      ...Bid
    }
    bidLineItems {
      ...BidLineItem
    }
  }
`;
