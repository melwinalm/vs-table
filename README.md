# vs-table (This repo is currently not being maintained.)

Highly customizable table library build on react.

## Quick Features

- Customizable UI
- Custom Cell and Header Rendering
- Resizable (column width)
- Tooltip
- Pagination
- Loader
- Sorting
- Data Formatters (Value truncator, Currency value formatter, etc.)
- Custom Data Formatters
- Customizable No-Records message

## Table of Content

- [Documentation](https://github.com/melwinalm/versatile-table/tree/develop#documentation)
- [Quick Start](https://github.com/melwinalm/versatile-table/tree/develop#quick-start)
- [Contributors Guide](https://github.com/melwinalm/versatile-table/tree/develop#contributors-guide)

## Documentation

### List of Props

- **className** - `string`
- **style** - `object`

  Define the custom style.

  ```javascript
  style: {
    {
      width: '100%'
    }
  }
  ```

- **columns** - `array` _(required)_

  - **key** - `string` _(required)_

    Unique value associated with each column.

  - **headerRender** - `string` _(required)_

    Header title.

    Example:

    ```javascript
    headerRender: 'First Name'
    ```

  - **width** - `string`

    Width of the column (in `px` or `%`).

    Example:

    ```javascript
    width: '200px'
    ```

  - **headerStyle** - `object`

    Using this prop you can style each header by passing the CSS property inside `headerStyle`.

    Example:

    ```javascript
    headerStyle: {
      fontWeight: 'bold',
      backgroundColor: 'grey'
    }
    ```

  - **columnStyle** - `object`

    Using this prop you can style each column by passing the CSS property inside `columnStyle`.

    Example:

    ```javascript
    columnStyle: {
      fontWeight: 'bold',
      backgroundColor: 'grey'
    }
    ```

  - **cellRender** - `function` or `component`

    Using this prop you can define a custom cell rending logic. `cellRender` expose 5 arguments in the following order:

    - **value**: Cell value

    - **rowData**: Row data

    - **data**: Entite Data Array

    - **columnKey**: Column unique key

    - **index**: Index value of the row

    ```javascript
    cellRender: ((val, rowData, data, columnKey, index)) => {
      // do something here
    })
    ```

    Example:

    ```javascript
    cellRender: (val) => (val === 'Male' ? 'M' : 'F')

    // or

    cellRender: (val) => {
      return <MyCustomCellComponent value={val} />
    }
    ```

  - **cellTooltipRender** - `boolean` or `function` or `component`

    Using the prop you can enable default tooltip or even define a custom tooltip component for the cell.

    You can enable default tooltip on cell.

    ```javascript
    cellTooltipRender: true
    ```

    You can define a custom tooltip component.

    ```javascript
    cellTooltipRender: (val, rowData, data, columnKey, index) => {
      return <div>This is a custom tooltip</div>
    }
    ```

  - **cellTooltipPosition** - `string`

    You can define the position of the tooltip of cell, if `cellTooltipRender` is enabled. Posibile value: `top`, `bottom`, `left` and `right`.

    Example:

    ```javascript
    cellTooltipPosition: 'top'
    ```

  - **headerTooltipRender** - `boolean` or `function` or `component`

    Using the prop you can enable default tooltip or even define a custom tooltip component for the cell.

    You can enable default tooltip on cell.

    ```javascript
    headerTooltipRender: true
    ```

    You can define a custom tooltip component.

    ```javascript
    headerTooltipRender: (val) => {
      return <div>This is a custom tooltip</div>
    }
    ```

  - **headerTooltipPosition** - `string`

    You can define the position of the tooltip of cell, if `headerTooltipRender` is enabled. Posibile value: `top`, `bottom`, `left` and `right`.

    Example:

    ```javascript
    headerTooltipPosition: 'top'
    ```

- **data** - `array` _(required)_
- **options** - `object`

  - **defaultSort** - `object`

    You can define the default sorting. By default sort is disabled. This can be defined using the below properties.

    - **sortField** - `string`

      The field name which you want to sort.

      ```javascript
      sortField: 'first_name'
      ```

    - **sortOrder** - `string`

      Order of the sort - `asc` for ascending and `desc` for descending. Default value is `asc`.

      ```javascript
      sortOrder: 'desc'
      ```

    - **sortType** - `string`

      Define the type of sort. Column value will be sorted based on the type (`string`, `number` or `date`). Default value is `string`.

      ```javascript
      sortOrder: 'string'
      ```

  - **defaultLoader** - `object or boolean`

    To enable the default loader. `defaultLoader` can be enabled by passing in the boolean value (`true`) or by defining any object with the below properties. By default loader is disabled.

    ```javascript
    defaultLoader: true

    // or

    defaultLoader: {
    }
    ```

    Below are some of the properties that can be passed inside `defaultLoader`

    - **loaderTimeout** - `number`

      Time out (time in milli-seconds) to stop/hide loader. Default value is `3000`.

      ```javascript
      defaultLoader: {
        loaderTimeout: 5000
      }
      ```

- **subComponents** - `object`

  Define the custom sub-components. Below are list of sub-components supported by versatile-table.

  - **HeaderCellComponent**

    Custom header components.

    ```javascript
    subComponents={{
      HeaderCellComponent: CustomHeaderCellComponent
    }}
    ```

  - **NoRecordComponent**

    Custom NoRecord (if no record are found) components.

    ```javascript
    subComponents={{
      NoRecordComponent: CustomNoRecordMessageComponent
    }}
    ```

  - **PaginationComponent**

    Custom pagination components.

    ```javascript
    subComponents={{
      PaginationComponent: CustomPaginationComponent
    }}
    ```

  - **LoaderComponent**

    Custom Loader components.

    ```javascript
    subComponents={{
      LoaderComponent: CustomLoaderComponent
    }}
    ```

## Contributors Guide

- Base development branch - `develop`.

- If you are new contributor, Firstly create a copy of `develop` branch for your development purpose.

- Do not commit any changes directly to `develop` and `master` branch.

- Always raise a PR for the new changes to `develop` branch and also add reviewer.

- Always pull the latest code (`git pull origin develop`) and run `npm i` before starting the your development work.

- Before committing the code, make sure no lint error are present in your code and also run `npm run format` to beautify the code.

### Quick Start

- Run `npm i` to install dependencies.

- Run `npm run start` to start the application.

- Application can be accessed on port 3000 - `http://localhost:3000/`
