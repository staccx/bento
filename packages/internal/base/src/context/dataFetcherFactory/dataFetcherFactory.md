# StateProvider.js
```jsx
import { dataFetcherFactory } from "@staccx/base"

const [CaselistProvider, useCaselist] = dataFetcherFactory()
const [NotificationsProvider, useNotifications] = dataFetcherFactory()

const StateProvider = ({ children }) => {
  return (
    <CaselistProvider path={"/api/cases"} initialData={[]} loop={3000}>
      <NotificationsProvider path={"/api/notifications"} initialData={[]} loop={5000}>
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
