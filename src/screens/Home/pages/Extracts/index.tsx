import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

// Components
import { Content } from '../../../../components/Content';
import { Bill, BillsList } from '../../../../components/Bill';

// Hooks
import { useBarcode } from '../../../../hooks/barcode';

// Data
import { billsData } from '../../../../mock/data/bills';

export const ExtractsHomePage: React.FC = () => {
  const getRandomData = () => {
    return [...billsData].sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  const navigation = useNavigation();
  const barcode = useBarcode();
  const [data, setData] = useState(getRandomData());

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      barcode.setIsVisible(false);
      setData(getRandomData);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Content
      title="Meus extratos"
      details="3 pagos"
    >
      <BillsList
        data={data}
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