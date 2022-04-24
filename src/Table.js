import React from 'react';
import './Table.scss';
import Multiselect from 'multiselect-react-dropdown';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state2 = {
            options: [{ name: 'Lobster', id: 1, cat: 'Seafood' }, { name: 'Crab', id: 2, cat: 'Seafood' },
            { name: 'Beef', id: 3, cat: 'Meat' }, { name: 'Lamb', id: 4, cat: 'Meat' }],

            selectedValues: [
                { name: 'Beef', id: 3, cat: 'Meat' }
            ]
        };
        this.state = {
            options: [{ name: 'Option 1️⃣', id: 1 }, { name: 'Option 2️⃣', id: 2 }]
        };

    }





    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <section className="md-ui component-data-table">
                    <header className="main-table-header">
                          <h2> <a href="https://www.npmjs.com/package/multiselect-react-dropdown">https://www.npmjs.com/package/multiselect-react-dropdown</a> </h2>
                       <b> <a href="https://multiselect-react-dropdown.vercel.app/?path=/story/multiselect-dropdown--flat-array">Story book</a> </b>
                    </header>
                    <div className="main-table-wrapper">
                        <table className="main-table-content">
                            <thead className="data-table-header">
                                <tr className="data-table-row">
                                    <td className="table-datacell datatype-string">Dessert (100g serving)</td>
                                    <td className="table-datacell datatype-numeric">Calories</td>
                                    <td className="table-datacell datatype-numeric">Fat (g)</td>
                                    <td className="table-datacell datatype-numeric">Carbs (g)</td>
                                    <td className="table-datacell datatype-numeric">Protein (g)</td>
                                    <td className="table-datacell datatype-numeric">Sodium (mg)</td>
                                    <td className="table-datacell datatype-numeric">Calcium (%)</td>
                                    <td className="table-datacell datatype-numeric">Iron (%)</td>
                                    <td className="table-datacell datatype-string">Comments</td>
                                </tr>
                            </thead>
                            <tbody className="data-table-content">
                                <tr className="data-table-row">
                                    <td className="table-datacell datatype-string">Frozen yogurt</td>
                                    <td className="table-datacell datatype-numeric">159</td>
                                    <td className="table-datacell datatype-numeric">6.0</td>
                                    <td className="table-datacell datatype-numeric">24</td>
                                    <td className="table-datacell datatype-numeric">4.0</td>
                                    <td className="table-datacell datatype-numeric">87</td>
                                    <td className="table-datacell datatype-numeric">14%</td>
                                    <td className="table-datacell datatype-numeric">1%</td>
                                    <td className="table-datacell datatype-string"><input type="text" className="md-ui component-input data-table-input" placeholder="add a comment"></input></td>
                                </tr>
                                <tr className="data-table-row">
                                    <td className="table-datacell datatype-string">Ice cream sandwich</td>
                                    <td className="table-datacell datatype-numeric">237</td>
                                    <td className="table-datacell datatype-numeric">9.0</td>
                                    <td className="table-datacell datatype-numeric">37</td>
                                    <td className="table-datacell datatype-numeric">4.3</td>
                                    <td className="table-datacell datatype-numeric">129</td>
                                    <td className="table-datacell datatype-numeric">8%</td>
                                    <td className="table-datacell datatype-numeric">1%</td>
                                    <td className="table-datacell datatype-string"><input type="text" className="md-ui component-input data-table-input" placeholder="add a comment"></input></td>
                                </tr>
                                <tr className="data-table-row">
                                    <td className="table-datacell datatype-string">Eclair</td>
                                    <td className="table-datacell datatype-numeric">262</td>
                                    <td className="table-datacell datatype-numeric">16.0</td>
                                    <td className="table-datacell datatype-numeric">24</td>
                                    <td className="table-datacell datatype-numeric">6.0</td>
                                    <td className="table-datacell datatype-numeric">337</td>
                                    <td className="table-datacell datatype-numeric">6%</td>
                                    <td className="table-datacell datatype-numeric">7%</td>
                                    <td className="table-datacell datatype-string">
                                        <input type="text" className="md-ui component-input data-table-input" placeholder="add a comment"></input>
                                    </td>
                                </tr>
                                <tr className="data-table-row">
                                    <td className="table-datacell datatype-string">Eclair</td>
                                    <td className="table-datacell datatype-numeric">262</td>
                                    <td className="table-datacell datatype-numeric">16.0</td>
                                    <td className="table-datacell datatype-numeric">24</td>
                                    <td className="table-datacell datatype-numeric">6.0</td>
                                    <td className="table-datacell datatype-numeric">337</td>
                                    <td className="table-datacell datatype-numeric">6%</td>
                                    <td className="table-datacell datatype-numeric">7%</td>
                                    <td className="table-datacell datatype-string">
                                        <Multiselect
                                            options={this.state.options} // Options to display in the dropdown
                                            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                            onSelect={this.onSelect} // Function will trigger on select event
                                            onRemove={this.onRemove} // Function will trigger on remove event
                                            displayValue="name" // Property name to display in the dropdown options
                                        />
                                    </td>
                                </tr>
                                <tr className="data-table-row">
                                    <td className="table-datacell datatype-string">Eclair</td>
                                    <td className="table-datacell datatype-numeric">262</td>
                                    <td className="table-datacell datatype-numeric">16.0</td>
                                    <td className="table-datacell datatype-numeric">24</td>
                                    <td className="table-datacell datatype-numeric">6.0</td>
                                    <td className="table-datacell datatype-numeric">337</td>
                                    <td className="table-datacell datatype-numeric">6%</td>
                                    <td className="table-datacell datatype-numeric">7%</td>
                                    <td className="table-datacell datatype-string">
                                        <Multiselect
                                            options={this.state2.options} // Options to display in the dropdown
                                            selectedValues={this.state2.selectedValues} // Preselected value to persist in dropdown
                                            onSelect={this.onSelect} // Function will trigger on select event
                                            onRemove={this.onRemove} // Function will trigger on remove event
                                            displayValue="name" // Property name to display in the dropdown options
                                            groupBy='cat'
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </form>
        );
    }
}

export default Table 