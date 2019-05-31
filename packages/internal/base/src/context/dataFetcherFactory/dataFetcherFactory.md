# StateProvider.js
```jsx
import { dataFetcherFactory } from "@staccx/base"

const [CaselistProvider, useCaselist] = dataFetcherFactory("/cases", [], { loop: 5000 })
const [NotificationsProvider, useNotifications] = dataFetcherFactory("/notifications", [])

const StateProvider = ({ children }) => {
  return (
    <CaselistProvider>
      <NotificationsProvider>
        {children}
      </NotificationsProvider>
    </CaselistProvider>
  )
}

export { useCaselist, useNotifications }

export default StateProvider
```

# Notifications.js
```jsx
const { data: notifications, isLoading } = useNotifications()
```

# Caselist.js
```jsx
const { data: caselist, isLoading } = useCaselist()
```
