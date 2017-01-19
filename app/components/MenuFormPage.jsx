import React from 'react';
import MenuForm from './MenuForm';

class MenuFormPage extends React.Component {

  download_csv = (menuData) => {
    var data = menuData || [
       [1, 'FOOD', 100, 101],
       [2, 'DRINK', 102, 103],
       [3, 'BREAKFAST', 104, 105]
    ];

    var csv = 'ID,NAME,';
    for (let i = 1; i <= 98; i++){
      csv += 'CHILD'+ i + ','
    }
    csv += '\n' ;
    data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });

    console.log(csv);
    var menuDlElement = document.createElement('a');
    menuDlElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    menuDlElement.target = '_blank';
    menuDlElement.download = 'menu.csv';
    menuDlElement.click();

    var groupDlElement = document.createElement('a');
    groupDlElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    groupDlElement.target = '_blank';
    groupDlElement.download = 'group.csv';
    groupDlElement.click();
  }

  handleSubmit = (values) => {


    let nextGroupId = 100;
    let menuData = values.menus.map((menu,id) => Object.assign({}, menu, {id, groups: menu.groups && menu.groups.map(group => Object.assign({}, group, {id: nextGroupId++}))}))

    menuData = menuData.map( (menu) => {
      let arr = [menu.id, menu.name]
      for (let i = 0; i < 98; i++){
        if (menu.groups[i]) arr.push(menu.groups[i].id)
        else arr.push(0)
      }
      return arr;
    })

    console.log(menuData)


    this.download_csv(menuData);

    new Promise(resolve => {
        setTimeout(() => {  // simulate server latency
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
          resolve()
        }, 500)
      })
  }

  render() {
    return (
      <MenuForm onSubmit={this.handleSubmit} />
    );
  }
}

export default MenuFormPage
