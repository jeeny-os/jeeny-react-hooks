export * from "./types/graphql";
import { useCompanyApi } from "./api/company/api";
import { useCompanyUserApi } from "./api/companyUser/api";
import { useDepartureApi } from "./api/departure/api";
import { useDeviceApi } from "./api/device/api";
import { useFacilityApi } from "./api/facility/api";
import { useInventoryRecordApi } from "./api/inventoryRecord/api";
import { useItemApi } from "./api/item/api";
import { useFacilityItemApi } from "./api/facilityItem/api";
import { useOperatorApi } from "./api/operator/api";
import { useProductApi } from "./api/product/api";
import { useArrivalApi } from "./api/arrival/api";
import {
  useDynamicContainerApi,
  useItemStorageInventoryAreaLocationApi,
  useItemStorageInventoryAreaRuleApi,
  useStorageInventoryAreaLocationApi,
  useStorageInventoryApi,
  useStorageInventoryAreaRuleApi,
} from "./api/storage/index";
import { useKitApi } from "./api/kit/api";
import { useInventoryAreaApi } from "./api/inventoryArea/api";
import { useTeamApi } from "./api/team/api";
import { useSupplierApi } from "./api/supplier/api";
import { useSupplierItemApi } from "./api/supplierItem/api";
import { useEventApi } from "./api/event/api";
import { useInstructionApi } from "./api/instruction/api";
import { useKioskApi } from "./api/kiosk/api";
import { useAppApi } from "./api/app/api";
import { useItemGroupApi } from "./api/itemGroup/api";
import { useBidApi } from "./api/bid/api";

export { JeenyContext, JeenyProvider } from "./providers/JeenyProvider";
export { useAppApi } from "./api/app/api";
export { useArrivalApi } from "./api/arrival/api";
export { useBidApi } from "./api/bid/api";
export { useCompanyApi } from "./api/company/api";
export { useCompanyUserApi } from "./api/companyUser/api";
export { useDepartureApi } from "./api/departure/api";
export { useDeviceApi } from "./api/device/api";
export { useEventApi } from "./api/event/api";
export { useFacilityApi } from "./api/facility/api";
export { useFacilityItemApi } from "./api/facilityItem/api";
export { useInstructionApi } from "./api/instruction/api";
export { useInventoryAreaApi } from "./api/inventoryArea/api";
export { useInventoryRecordApi } from "./api/inventoryRecord/api";
export { useItemApi } from "./api/item/api";
export { useItemGroupApi } from "./api/itemGroup/api";
export { useKioskApi } from "./api/kiosk/api";
export { useKitApi } from "./api/kit/api";
export { useOperatorApi } from "./api/operator/api";
export { useProductApi } from "./api/product/api";
export {
  useDynamicContainerApi,
  useItemStorageInventoryAreaLocationApi,
  useItemStorageInventoryAreaRuleApi,
  useStorageInventoryAreaLocationApi,
  useStorageInventoryApi,
  useStorageInventoryAreaRuleApi,
} from "./api/storage/index";
export { useSupplierApi } from "./api/supplier/api";
export { useSupplierItemApi } from "./api/supplierItem/api";
export { useTeamApi } from "./api/team/api";

export const useApi = () => {
  const appApi = useAppApi();
  const arrivalApi = useArrivalApi();
  const bidApi = useBidApi();
  const companyApi = useCompanyApi();
  const companyUserApi = useCompanyUserApi();
  const departureApi = useDepartureApi();
  const deviceApi = useDeviceApi();
  const dynamicContainerApi = useDynamicContainerApi();
  const eventApi = useEventApi();
  const facilityApi = useFacilityApi();
  const facilityItemApi = useFacilityItemApi();
  const instructionApi = useInstructionApi();
  const inventoryAreaApi = useInventoryAreaApi();
  const inventoryRecordApi = useInventoryRecordApi();
  const itemApi = useItemApi();
  const itemGroupApi = useItemGroupApi();
  const itemStorageInventoryAreaLocationApi =
    useItemStorageInventoryAreaLocationApi();
  const itemStorageInventoryAreaRuleApi = useItemStorageInventoryAreaRuleApi();
  const kioskApi = useKioskApi();
  const kitApi = useKitApi();
  const operatorApi = useOperatorApi();
  const productApi = useProductApi();
  const storageInventoryApi = useStorageInventoryApi();
  const storageInventoryAreaLocationApi = useStorageInventoryAreaLocationApi();
  const storageInventoryAreaRuleApi = useStorageInventoryAreaRuleApi();
  const supplierApi = useSupplierApi();
  const supplierItemApi = useSupplierItemApi();
  const teamApi = useTeamApi();

  return {
    app: appApi,
    arrival: arrivalApi,
    bid: bidApi,
    company: companyApi,
    companyUser: companyUserApi,
    departure: departureApi,
    device: deviceApi,
    event: eventApi,
    facility: facilityApi,
    inventoryArea: inventoryAreaApi,
    inventoryRecord: inventoryRecordApi,
    item: itemApi,
    itemGroup: itemGroupApi,
    facilityItem: facilityItemApi,
    itemStorageInventoryAreaLocation: itemStorageInventoryAreaLocationApi,
    itemStorageInventoryAreaRule: itemStorageInventoryAreaRuleApi,
    kiosk: kioskApi,
    kit: kitApi,
    instruction: instructionApi,
    operator: operatorApi,
    product: productApi,
    dynamicContainer: dynamicContainerApi,
    storageInventoryAreaLocation: storageInventoryAreaLocationApi,
    storageInventoryAreaRule: storageInventoryAreaRuleApi,
    storageInventory: storageInventoryApi,
    supplier: supplierApi,
    supplierItem: supplierItemApi,
    team: teamApi,
  };
};
