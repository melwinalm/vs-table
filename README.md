## Versatile Table

Highly customizable table library build on react.

### Documentation

#### List of Props:

- **className** - `string`
- **style** - `object`

  Define the custom style.

  ```javascript
  style: {
    {
      width: "100%"
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
    headerRender: "First Name";
    ```

  - **width** - `string`

    Width of the column (in `px` or `%`).

    Example:

    ```javascript
    width: "200px";
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
    cellRender: (val) => (val === "Male" ? "M" : "F");

    // or

    cellRender: (val) => {
      return <MyCustomCellComponent value={val} />;
    };
    ```

  - **cellTooltipRender** - `boolean` or `function` or `component`

    Using the prop you can enable default tooltip or even define a custom tooltip component for the cell.

    You can enable default tooltip on cell.

    ```javascript
    cellTooltipRender: true;
    ```

    You can define a custom tooltip component.

    ```javascript
    cellTooltipRender: (val, rowData, data, columnKey, index) => {
      return <div>This is a custom tooltip</div>;
    };
    ```

  - **cellTooltipPosition** - `string`

    You can define the position of the tooltip of cell, if `cellTooltipRender` is enabled. Posibile value: `top`, `bottom`, `left` and `right`.

    Example:

    ```javascript
    cellTooltipPosition: "top";
    ```

  - **headerTooltipRender** - `boolean` or `function` or `component`

    Using the prop you can enable default tooltip or even define a custom tooltip component for the cell.

    You can enable default tooltip on cell.

    ```javascript
    headerTooltipRender: true;
    ```

    You can define a custom tooltip component.

    ```javascript
    headerTooltipRender: (val) => {
      return <div>This is a custom tooltip</div>;
    };
    ```

  - **headerTooltipPosition** - `string`

    You can define the position of the tooltip of cell, if `headerTooltipRender` is enabled. Posibile value: `top`, `bottom`, `left` and `right`.

    Example:

    ```javascript
    headerTooltipPosition: "top";
    ```

- **data** - `array` _(required)_
- **options** - `object`

  - **defaultSort** - `object`

    You can define the default sorting. This can be defined using the below properties.

    - **sortField** - `string`

      The field name which you want to sort.

      ```javascript
      sortField: "first_name";
      ```

    - **sortOrder** - `string`

      Order of the sort - `asc` for ascending and `desc` for descending. Default value is `asc`.

      ```javascript
      sortOrder: "desc";
      ```

    - **sortType** - `string`

      Define the type of sort. Column value will be sorted based on the type (`string`, `number` or `date`). Default value is `string`.

      ```javascript
      sortOrder: "string";
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
