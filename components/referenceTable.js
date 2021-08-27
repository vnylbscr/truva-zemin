import React from 'react';
import { Header, Table } from 'semantic-ui-react';
import { TABLE_DATA } from '../data/referencesTableData';
import useResponsiveScreen from '../hooks/useResponsiveScreen';
import classes from '../styles/References.module.scss';
const ReferenceTable = () => {
   const { isSmallScreen } = useResponsiveScreen();
   return (
      <Table padded selectable singleLine size='large' className={classes.table}>
         <Table.Header style={{ display: isSmallScreen ? 'none' : undefined }}>
            <Table.Row>
               <Table.HeaderCell textAlign='center' verticalAlign='middle'>
                  <Header color='orange' as='h2'>
                     Yapı Adresi
                  </Header>
               </Table.HeaderCell>
               <Table.HeaderCell>
                  <Header as='h1' color='orange'>
                     Müteahhit
                  </Header>
               </Table.HeaderCell>
               <Table.HeaderCell>
                  <Header as='h1' color='orange'>
                     Belediye
                  </Header>
               </Table.HeaderCell>
               <Table.HeaderCell>
                  <Header as='h1' color='orange'>
                     Şantiye Alanı <Header.Subheader>(m2)</Header.Subheader>
                  </Header>
               </Table.HeaderCell>
            </Table.Row>
         </Table.Header>

         <Table.Body>
            {TABLE_DATA.map((row, index) => (
               <Table.Row key={row.address + index}>
                  <Table.Cell>{row.address.toUpperCase()}</Table.Cell>
                  <Table.Cell>{row.builder.toUpperCase()}</Table.Cell>
                  <Table.Cell>{row.province.toUpperCase()}</Table.Cell>
                  <Table.Cell>
                     {row.constructionZone.toLocaleString('tr-TR', {
                        minimumFractionDigits: 2,
                     })}
                  </Table.Cell>
               </Table.Row>
            ))}
         </Table.Body>
      </Table>
   );
};

export default ReferenceTable;
