### versatile-table

#### Plannned Features

##### Dev Standards

- Every prop name should follow camelCase naming convention
- Color should always be mentioned in `rgba` format
- Props which take boolean value should always have `is` prefix. Eg. isSortable, isLoading etc.

#### Dev Tasks

- Setting up a standard coding and linting configuration for the project

##### Version 1 (Release date 30th Dec 2020 - tentative)

- [x] Ability to provide custom width to the table columns
- [ ] Individual column sorting
- [ ] Ability to customize Cell, Row and Table, TableHeader etc (Sub Components)
- [ ] Custom cell design
- [ ] Ability to import or write custom filters for each column
- [ ] Pagination support
- [ ] Prop validation - validate if the data sent to props valid of valid type (Example: if the prop requires array type, but the user sends an object)
- [ ] Logging erros in devlopment mode
- [ ] Error handling - Table or the application shouldn't crash regardless of what values are passed in props
- [ ] Migrate current CSS to SCSS
- [ ] Add profiling support in development mode

##### Version 2 

- [ ] Group by Value
- [ ] Column Ordering
- [ ] Column specific search
- [ ] Entire table search
- [ ] Row drag and drop
- [ ] Automatically detect the column type (column, number, date) and attach that specific filter to the column automtically
- [ ] Export table functionality
- [ ] Localization and internationalization support
### Documentation

- className `string`
- columns `array`
	- key `string`
	- type `string | function` - `Under develoment` <!-- TODO: This will be used to determine what type of sorting will be used when sorting based on this column. Or the user can pass a custom comparator function -->
	- headerTitle `string` <!-- TODO: I think this should be removed since we have customHeader prop  -->
	- width `css width property`
	- cell `Component` <!-- TODO: Probably renaming this to cellRender would be cleaner -->
	- customHeader `Component` <!-- TODO: Renaming this to headerRender to follow consistent naming convention -->
	- isSortable `boolean` - `Under development`
- data `array`
- height `css height property` - `Under development`
- isLoading `boolean` - `Under development`
- loadingRender `Component` - `Under development`
- options `object`
	- defaultSort `object`
			- sortField `string`
			- sortOrder `string`
			- numericSort `boolean` <!-- TODO: Instead of having a boolean option, it should more like sortType which would take various options. What do you say? -->
- width `css width property` - `Under development`
- noRecordsMessageRenderer - `string|Component` - `Under Development`
