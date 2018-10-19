```javascript
<Form>
  <FormField name="myField" type="string" required>
    {({ name, field, form }) => (
      <Input {...field} placeholder="my input placeholder" id={name} />
    )}
  </FormField>
</Form>
```

## Initial value

```javascript
<Form initialValues={{ myField: "tester" }}>
  <FormField name="myField" type="string" required>
    {({ name, field, form }) => (
      <Input {...field} placeholder="my input placeholder" id={name} />
    )}
  </FormField>
</Form>
```

## Email

```javascript
<Form initialValues={{ epost: "" }} buttonText="Søk nå">
  <FormField name="epost" type="email" required>
    {({ name, field, form }) => (
      <Input {...field} placeholder="ola@nordmann.no" id={name} />
    )}
  </FormField>
</Form>
```

## Number

```javascript
<Form initialValues={{ amount: 1001 }} buttonText="Søk nå">
  <FormField name="amount" type="number" required min={1000} max={1005} integer>
    {({ name, field, form }) => <Input {...field} placeholder="0" id={name} />}
  </FormField>
</Form>
```

## Other components

```javascript
<Form initialValues={{ amount: 1002 }} buttonText="Søk nå">
  <FormField name="amount" type="number" required min={1000} max={1005} integer>
    {({ name, field, form }) => (
      <Slider min={1000} max={1006} {...field} id={name} />
    )}
  </FormField>
  <FormField name="myField" type="string" required>
    {({ name, field, form }) => (
      <Input {...field} placeholder="my input placeholder" id={name} />
    )}
  </FormField>
</Form>
```

## Render button

```javascript
<Form
  initialValues={{ epost: "" }}
  renderButton={({ isValid }) => (
    <Button disabled={!isValid} variant="subtle" type="submit">
      Seek
    </Button>
  )}
>
  <FormField name="epost" type="email" required>
    {({ name, field, form }) => (
      <Input {...field} placeholder="ola@nordmann.no" id={name} />
    )}
  </FormField>
</Form>
```

## Email

```javascript
<Form initialValues={{ epost: "" }} buttonText="Søk nå">
  <FormField
    name="epost"
    type="email"
    required
    renderError={({ error, touched }) => (
      <span>
        {error}-{touched}
      </span>
    )}
  >
    {({ name, field, form }) => (
      <Input {...field} placeholder="ola@nordmann.no" id={name} />
    )}
  </FormField>
</Form>
```
