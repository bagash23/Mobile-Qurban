/* eslint-disable react-native/no-inline-styles */
import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';

type QurbanDataItem = {
  name: string;
  value: number;
  color: string;
};

type CMPBarChartProps = {
  data: QurbanDataItem[];
  year?: string | number;
  onSelectYear?: () => void;
};

const CMPBarChart = ({data, year = '2025', onSelectYear}: CMPBarChartProps) => {
  const defaultAnimals: QurbanDataItem[] = [
    {name: 'Sapi', value: 0, color: '#537D5D'},
    {name: 'Kambing', value: 0, color: '#73946B'},
    {name: 'Domba', value: 0, color: '#9EBC8A'},
  ];

  const normalizedData = useMemo(() => {
    return defaultAnimals.map(animal => {
      const found = data.find(
        d => d.name.toLowerCase() === animal.name.toLowerCase(),
      );
      return found ? {...animal, value: found.value} : animal;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const total = normalizedData.reduce((sum, item) => sum + item.value, 0);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Data Hewan Qurban</Text>
        <TouchableOpacity style={styles.yearButton} onPress={onSelectYear}>
          <Text style={styles.yearButtonText}>{year}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.total}>Total Hewan Qurban: {total}</Text>

      <View style={styles.progressBar}>
        {normalizedData.map((item, index) => {
          const isZero = !item.value || item.value === 0;
          // Jika value 0, tetap tampil dengan lebar minimal 4% agar bar tidak hilang
          const percentage = isZero ? '4%' : `${(item.value / total) * 100}%`;

          return (
            <View
              key={index}
              // @ts-ignore
              style={{
                backgroundColor: isZero ? '#EFEFEF' : item.color,
                width: percentage,
                height: 12,
                borderTopLeftRadius: index === 0 ? 8 : 0,
                borderBottomLeftRadius: index === 0 ? 8 : 0,
                borderTopRightRadius:
                  index === normalizedData.length - 1 ? 8 : 0,
                borderBottomRightRadius:
                  index === normalizedData.length - 1 ? 8 : 0,
              }}
            />
          );
        })}
      </View>

      {normalizedData.map((item, index) => (
        <View key={index} style={styles.row}>
          <View style={[styles.dot, {backgroundColor: item.color}]} />
          <Text style={styles.label}>{item.name}</Text>
          <Text style={styles.value}>{item.value} ekor</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 16,
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yearButton: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  yearButtonText: {
    fontSize: 12,
    fontFamily: Fonts.medium.fontFamily,
    color: Colors.black,
  },
  title: {
    fontSize: 12,
    fontFamily: Fonts.regular.fontFamily,
    color: Colors.black,
  },
  total: {
    fontSize: 20,
    fontFamily: Fonts.bold.fontFamily,
    marginVertical: 8,
    color: '#222',
  },
  progressBar: {
    flexDirection: 'row',
    height: 12,
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    justifyContent: 'space-between',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  label: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.medium.fontFamily,
    color: Colors.black,
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: Fonts.regular.fontFamily,
    color: Colors.black,
  },
});

export default CMPBarChart;
