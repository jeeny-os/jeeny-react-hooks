<h1 align="center">Welcome to jeeny-react-hooks 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.3-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/jeeny-os/jeeny-react-hooks#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/jeeny-os/jeeny-react-hooks/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/jeeny-os/jeeny-react-hooks/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/jeeny-os/jeeny-react" />
  </a>
</p>

# jeeny-react-hooks

The jeeny-react-hooks package provides an intuitive and typesafe way to interact with the Jeeny API. It is primarily designed to be "headless", just like the Jeeny API.

## What is Jeeny?

Jeeny is a [warehouse management system and enterprise resource planning API](https://jeeny.com). It is a headless system for procurement, inventory, standard operating procedures, manufacturing, and fulfillment. Without replacing your current systems you can extend, enhance, and embed in order to create the customizations your teams need.

## Table of contents

- [What is a headless front end?](#what-is-a-headless-front-end)
- [Installation](#installation)
- [Authentication](#authentication)
- [Hooks](#hooks)
- [React SDK](#react-sdk)
- [JavaScript SDK](#javascript-sdk)

## What is a headless front end?

A headless front end library separates the UI from the logic. This lets the developer focus on user experience without having to think too much about how to retrieve, manipulate, and store data.

The goal is twofold - make it impossible to fail and let the API documentation fade into the background by making it part of the components. You will of course need to be using TypeScript to take full advantage of these features. The package can be used with good old JavaScript too though.

## Installation

Yarn
`yarn add @jeeny/jeeny-react-hooks`

npm
`npm install @jeeny/jeeny-react-hooks`

## Running tests

Yarn
`yarn test`

npm
`npm run test`

## Authentication

You must wrap your application in the JeenyProvider component and pass it your headless API key. This provider allows downstream components to authenticate with the Jeeny graphql server.

It includes the ApolloProvider component from the [React Apollo Client](https://www.apollographql.com/docs/react/). This means that the Jeeny hooks and components can take advantage of features like caching and the Apollo devtools.

You can get your free API key from the [Jeeny Hub under the Headless menu](https://hub.jeeny.com/headless/api-keys).

```
import { JeenyProvider } from "@jeeny/jeeny-react"
<React.StrictMode>
	<JeenyProvider apiKey="YOUR_API_KEY">
		<App  />
	</JeenyProvider>
</React.StrictMode>
```

## Hooks

The hooks in this package provide an easy way to get direct access to the API. The API hooks can be considered a wrapper around the Apollo Client hooks. The hooks return functions you can use to retrieve or mutate data, the loading state of the actions, and the response data. Like the other utilities in this package, they are fully typed.

Each query function is actually a wrapper around the Apollo Client `useLazyQuery` hook and the mutations are a wrapper around the `useMutation` hook. This means that the full APIs for both of those hooks are provided on each and every Jeeny hook. You can find Apollo's documentation on `useLazyQuery` [here](https://www.apollographql.com/docs/react/data/queries/#usequery-api) and their documentation on `useMutation` [here](https://www.apollographql.com/docs/react/data/mutations#usemutation-api). This will let you customize options such as fetch policy, caching, error handling, and more.

The hooks can be thought of as a self-documenting API package.

<details>
<summary>Sample code</Summary>

```
const {
  getItem: {
    query: getItem,
    data,
    loading
  }
} = useItem({
  getItem: {
    options: {
      onCompleted: (data) => dropTheBalloons();
    }
  }
})

useEffect(() => {
  getItem({variables: { id }})
}, [getItem, id])

if (isLoading) {
  return <Loader />
}

const item = data.getItem;

return <div>
  {item.name}
</div>
```

</details>

The following hooks are available for use. `useApi` is also available to access all of the below hooks at once.

| Hook                                   | Record associations                                                                                                                                                         |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| useAppApi                              | App                                                                                                                                                                         |
| useArrivalApi                          | [Arrival, ArrivalDetails, ArrivalRelease, ArrivalDelivery, ArrivalLineItem, ArrivalReleaseLineItem, ArrivalDeliveryLineItem](https://dev.jeeny.com/data-and-logic/arrivals) |
| useBidApi                              | [BidRequest, Bid, BidRequestLineItem, BidLineItem](https://dev.jeeny.com/data-and-logic/bids)                                                                               |
| useCompanyApi                          | Company                                                                                                                                                                     |
| useCompanyUserApi                      | CompanyUser                                                                                                                                                                 |
| useDepartureApi                        | [Departure, DeparturePickList, DeparturePick, DepartureLineItem, DeparturePickListLineItem, DeparturePickLineItem](https://dev.jeeny.com/data-and-logic/departures)         |
| useDeviceApi                           | Device                                                                                                                                                                      |
| useDynamicContainerApi                 | [DynamicContainer](https://dev.jeeny.com/data-and-logic/dynamic-containers)                                                                                                 |
| useEventApi                            | [Event](https://dev.jeeny.com/data-and-logic/events)                                                                                                                        |
| useFacilityApi                         | [Facility, FacilityDetails](https://dev.jeeny.com/data-and-logic/facilities)                                                                                                |
| useFacilityItemApi                     | [FacilityItem](https://dev.jeeny.com/data-and-logic/facility-items)                                                                                                         |
| useInstructionApi                      | [InstructionTemplate, InstructionExecution, InstructionSubject](https://dev.jeeny.com/data-and-logic/instructions)                                                          |
| useInventoryAreaApi                    | [StorageInventoryArea](https://dev.jeeny.com/data-and-logic/inventory-areas)                                                                                                |
| useInventoryRecordApi                  | [InventoryRecord, InventoryLog](https://dev.jeeny.com/data-and-logic/inventory-records)                                                                                     |
| useItemStorageInventoryAreaLocationApi | [ItemStorageInventoryAreaLocation](https://dev.jeeny.com/data-and-logic/static-item-locations)                                                                              |
| useItemStorageInventoryAreaRuleApi     | [ItemStorageInventoryAreaRule](https://dev.jeeny.com/data-and-logic/static-item-locations)                                                                                  |
| useItemApi                             | [Item, ItemDetails](https://dev.jeeny.com/data-and-logic/items)                                                                                                             |
| useItemGroupApi                        | [ItemGroup](https://dev.jeeny.com/data-and-logic/item-groups)                                                                                                               |
| useKioskApi                            | Kiosk                                                                                                                                                                       |
| useKitApi                              | [KitTemplate, KitTemplatePart, KitTemplatePartOption, KitTemplateTree, KitTemplateBomEntry](https://dev.jeeny.com/data-and-logic/kits)                                      |
| useOperatorApi                         | Operator, SafeOperator                                                                                                                                                      |
| useProductApi                          | [Product](https://dev.jeeny.com/data-and-logic/products)                                                                                                                    |
| useStorageInventoryApi                 | StorageInventory                                                                                                                                                            |
| useStorageInventoryAreaLocationApi     | [StorageInventoryAreaLocation, StorageInventoryAreaLocationPayload](https://dev.jeeny.com/data-and-logic/storage-locations)                                                 |
| useStorageInventoryAreaRuleApi         | [StorageInventoryAreaRule](https://dev.jeeny.com/data-and-logic/storage-locations)                                                                                          |
| useSupplierApi                         | [Supplier](https://dev.jeeny.com/data-and-logic/suppliers)                                                                                                                  |
| useSupplierItemApi                     | [SupplierItem](https://dev.jeeny.com/data-and-logic/supplier-items)                                                                                                         |
| useTeamApi                             | Team                                                                                                                                                                        |

## React SDK

If you're looking for a more full featured React SDK you might be interested in this. Table, form, and action components are provided (fully typed and validated). [Check it out here.](https://github.com/jeeny-os/jeeny-react)

## JavaScript SDK

If you're not working with React you might be looking for our JavaScript/TypeScript SDK. [Check it out here.](https://github.com/jeeny-os/jeeny-js-sdk)

## Author

👤 **Jeeny**

- Website: https://jeeny.com
- Github: [@jeeny-os](https://github.com/jeeny-os)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jeeny-os/jeeny-react/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Jeeny](https://github.com/jeeny-os).<br />
This project is [MIT](https://github.com/jeeny-os/jeeny-react/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
