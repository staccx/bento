```javascript
 <Select2
              options={options}
              renderSelected={(selectedItem, getToggleButtonProps) => (
                <Button {...getToggleButtonProps()}>
                  {selectedItem.value}
                </Button>
              )}
              renderLabel={renderLabel}
              onChange={console.log}
            >
              {({ selectedItem, options, getItemProps, highlightedIndex }) => {
                return (
                  <List>
                    {options.map(
                      renderOption(getItemProps, highlightedIndex, selectedItem)
                    )}
                  </List>
                )
              }}
            </Select2>
``´
