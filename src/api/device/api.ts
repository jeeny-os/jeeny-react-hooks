import { useLazyQuery, useMutation } from "@apollo/client";
import { DeviceApi } from "./apiInterface";
import {
  CREATE_DEVICE,
  DELETE_DEVICE,
  GET_DEVICE,
  GET_DEVICES,
  GET_DEVICE_ACCESS_TOKEN,
  SAVE_DEVICE,
} from "./gql";

export const useDeviceApi = (custom?: DeviceApi) => {
  const [getDevice, { data: getDeviceData, loading: getDeviceLoading }] =
    useLazyQuery(
      custom?.getDevice?.query || GET_DEVICE,
      custom?.getDevice?.options
    );

  const [
    getDevices,
    {
      data: getDevicesData,
      loading: getDevicesLoading,
      fetchMore: getDevicesFetchMore,
    },
  ] = useLazyQuery(
    custom?.getDevices?.query || GET_DEVICES,
    custom?.getDevices?.options
  );

  const [
    getDeviceAccessToken,
    { data: getDeviceAccessTokenData, loading: getDeviceAccessTokenLoading },
  ] = useLazyQuery(
    custom?.getDeviceAccessToken?.query || GET_DEVICE_ACCESS_TOKEN,
    custom?.getDeviceAccessToken?.options
  );

  const [
    createDevice,
    { data: createDeviceData, loading: createDeviceLoading },
  ] = useMutation(
    custom?.createDevice?.mutation || CREATE_DEVICE,
    custom?.createDevice?.options
  );

  const [saveDevice, { data: saveDeviceData, loading: saveDeviceLoading }] =
    useMutation(
      custom?.saveDevice?.mutation || SAVE_DEVICE,
      custom?.saveDevice?.options
    );

  const [
    deleteDevice,
    { data: deleteDeviceData, loading: deleteDeviceLoading },
  ] = useMutation(
    custom?.deleteDevice?.mutation || DELETE_DEVICE,
    custom?.deleteDevice?.options
  );

  return {
    getDevice: {
      query: getDevice,
      data: getDeviceData,
      loading: getDeviceLoading,
    },
    getDevices: {
      query: getDevices,
      data: getDevicesData,
      fetchMore: getDevicesFetchMore,
      loading: getDevicesLoading,
    },
    getDeviceAccessToken: {
      get: getDeviceAccessToken,
      data: getDeviceAccessTokenData,
      loading: getDeviceAccessTokenLoading,
    },
    createDevice: {
      create: createDevice,
      data: createDeviceData,
      loading: createDeviceLoading,
    },
    saveDevice: {
      mutation: saveDevice,
      data: saveDeviceData,
      loading: saveDeviceLoading,
    },
    deleteDevice: {
      mutation: deleteDevice,
      data: deleteDeviceData,
      loading: deleteDeviceLoading,
    },
  };
};
