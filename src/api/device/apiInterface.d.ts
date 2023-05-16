import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateDeviceArgs,
  MutationSaveDeviceArgs,
  QueryGetDeviceArgs,
  QueryGetDevicesArgs,
  Device,
  DeviceQueryResponse,
  MutationDeleteDeviceArgs,
  MutationCreateDeviceArgs,
} from "../../types/graphql";

export interface DeviceApi {
  getDevice?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getDevice: Device;
      },
      QueryGetDeviceArgs
    >;
  };

  getDevices?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getDevices: DeviceQueryResponse;
      },
      QueryGetDevicesArgs
    >;
  };

  getDeviceAccessToken?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<{
      getDeviceAccessToken: string;
    }>;
  };

  createDevice?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createDevice: Device;
      },
      MutationCreateDeviceArgs
    >;
  };

  saveDevice?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveDevice: Device;
      },
      MutationSaveDeviceArgs
    >;
  };

  deleteDevice?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        deleteDevice: Device;
      },
      MutationDeleteDeviceArgs
    >;
  };
}
