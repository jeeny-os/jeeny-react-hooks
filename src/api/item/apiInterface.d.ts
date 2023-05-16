import {
  DocumentNode,
  MutationFunctionOptions,
  QueryFunctionOptions,
} from "@apollo/client";
import {
  MutationCreateItemArgs,
  MutationSaveItemArgs,
  QueryGetItemArgs,
  QueryGetItemsArgs,
  Item,
  ItemQueryResponse,
  QueryGetItemDetailsArgs,
  ItemDetails,
  ItemWithPrimarySupplierQueryResponse,
  QueryGetItemsWithPrimarySupplierArgs,
  InventoryHistoryRecord,
} from "../../types/graphql";

export interface ItemApi {
  getItem?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getItem: Item;
      },
      QueryGetItemArgs
    >;
  };

  getItemMedia?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getItem: Pick<Item, "id" | "images" | "videos" | "files">;
      },
      QueryGetItemArgs
    >;
  };

  getItemHistory?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getItemHistory: InventoryHistoryRecord[];
      },
      QueryGetItemHistoryArgs
    >;
  };

  getItemDetails?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getItemDetails: ItemDetails;
      },
      QueryGetItemDetailsArgs
    >;
  };

  getItems?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getItems: ItemQueryResponse;
      },
      QueryGetItemsArgs
    >;
  };

  getItemsHistory?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<{
      getItemsHistory: InventoryHistoryRecord[];
    }>;
  };

  getItemsWithPrimarySupplier?: {
    query?: DocumentNode;
    options?: QueryFunctionOptions<
      {
        getItemsWithPrimarySupplier: ItemWithPrimarySupplierQueryResponse;
      },
      QueryGetItemsWithPrimarySupplierArgs
    >;
  };

  createItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        createItem: Item;
      },
      MutationCreateItemArgs
    >;
  };

  saveItem?: {
    mutation?: DocumentNode;
    options?: MutationFunctionOptions<
      {
        saveItem: Item;
      },
      MutationSaveItemArgs
    >;
  };
}
