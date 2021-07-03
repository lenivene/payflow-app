import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

// Components
import { Content } from '../../../../components/Content';
import { Bill, BillsList } from '../../../../components/Bill';

// Hooks
import { useBarcode } from '../../../../hooks/barcode';

// Data
import { billsData } from '../../../../mock/data/bills';

export const StartHomePage: React.FC = () => {
  const navigation = useNavigation();
  const barcode = useBarcode();

  useEffect(() => {
    barcode.setIsVisible(true);

    const unsubscribe = navigation.addListener('focus', () => {
      barcode.setIsVisible(true);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Content
      title="Meus boletos"
      details="13 ao total"
    >
      <BillsList
        data={billsData}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{ paddingBottom: 99 }}
        renderItem={({ item }) => (
          <Bill data={item}/>
        )}
      />
    </Content>
  );
}