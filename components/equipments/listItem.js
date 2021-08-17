import React from 'react';
import { List } from 'semantic-ui-react';

const EquipmetsListItem = ({ item }) => {
   return (
      <List.Item>
         {/* <List.Icon name={item.icon} verticalAlign='middle' size='big' /> */}
         <List.Header as='a'>{item.title}</List.Header>
         <List.Description>{item?.description}</List.Description>
      </List.Item>
   );
};

export default EquipmetsListItem;
