import { useLazyQuery, useMutation } from "@apollo/client";
import { SupplierApi } from "./apiInterface";
import {
  CREATE_SUPPLIER,
  GET_SUPPLIER,
  GET_SUPPLIERS,
  GET_SUPPLIER_DETAILS,
  GET_SUPPLIER_MEDIA,
  SAVE_SUPPLIER,
} from "./gql";

export const useSupplierApi = (custom?: SupplierApi) => {
  const [getSupplier, { data: getSupplierData, loading: getSupplierLoading }] =
    useLazyQuery(
      custom?.getSupplier?.query || GET_SUPPLIER,
      custom?.getSupplier?.options
    );

  const [
    getSupplierDetails,
    { data: getSupplierDetailsData, loading: getSupplierDetailsLoading },
  ] = useLazyQuery(
    custom?.getSupplierDetails?.query || GET_SUPPLIER_DETAILS,
    custom?.getSupplierDetails?.options
  );

  const [
    getSupplierMedia,
    { data: getSupplierMediaData, loading: getSupplierMediaLoading },
  ] = useLazyQuery(
    custom?.getSupplierMedia?.query || GET_SUPPLIER_MEDIA,
    custom?.getSupplierMedia?.options
  );

  const [
    getSuppliers,
    {
      data: getSuppliersData,
      loading: getSuppliersLoading,
      fetchMore: getSuppliersFetchMore,
    },
  ] = useLazyQuery(
    custom?.getSuppliers?.query || GET_SUPPLIERS,
    custom?.getSuppliers?.options
  );

  const [
    createSupplier,
    { data: createSupplierData, loading: createSupplierLoading },
  ] = useMutation(
    custom?.createSupplier?.mutation || CREATE_SUPPLIER,
    custom?.createSupplier?.options
  );

  const [
    saveSupplier,
    { data: saveSupplierData, loading: saveSupplierLoading },
  ] = useMutation(
    custom?.saveSupplier?.mutation || SAVE_SUPPLIER,
    custom?.saveSupplier?.options
  );

  return {
    getSupplier: {
      query: getSupplier,
      data: getSupplierData,
      loading: getSupplierLoading,
    },
    getSupplierDetails: {
      query: getSupplierDetails,
      data: getSupplierDetailsData,
      loading: getSupplierDetailsLoading,
    },
    getSupplierMedia: {
      query: getSupplierMedia,
      data: getSupplierMediaData,
      loading: getSupplierMediaLoading,
    },
    getSuppliers: {
      query: getSuppliers,
      data: getSuppliersData,
      fetchMore: getSuppliersFetchMore,
      loading: getSuppliersLoading,
    },
    createSupplier: {
      mutation: createSupplier,
      data: createSupplierData,
      loading: createSupplierLoading,
    },
    saveSupplier: {
      mutation: saveSupplier,
      data: saveSupplierData,
      loading: saveSupplierLoading,
    },
  };
};
