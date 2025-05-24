/* eslint-disable react-native/no-inline-styles */
import moment from 'moment';
import 'moment/locale/id';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from '../../../utils/colors';
import Fonts from '../../../utils/fonts';

moment.locale('id');

const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelectDate: (val: string) => void;
  value?: string;
}

const CMPDatePicker = ({visible, onClose, onSelectDate, value}: Props) => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);

  const startOfMonth = currentDate.clone().startOf('month');
  const endOfMonth = currentDate.clone().endOf('month');

  const startDay = startOfMonth.day() === 0 ? 6 : startOfMonth.day() - 1;
  const daysInMonth = endOfMonth.date();

  const dates = [];

  for (let i = 0; i < startDay; i++) {
    dates.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(moment(currentDate).date(i));
  }

  const goToPreviousMonth = () =>
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  const goToNextMonth = () =>
    setCurrentDate(currentDate.clone().add(1, 'month'));

  const confirmDate = () => {
    if (selectedDate) {
      onSelectDate(selectedDate.format('DD/MM/YYYY'));
    }
  };

  useEffect(() => {
    if (value) {
      const parsed = moment(value, 'DD/MM/YYYY');
      if (parsed.isValid()) {
        setSelectedDate(parsed);
        setCurrentDate(parsed);
      }
    }
  }, [value]);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goToPreviousMonth}>
              <Text style={styles.arrow}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.monthText}>
              {currentDate.format('MMMM')} {currentDate.year()}
            </Text>
            <TouchableOpacity onPress={goToNextMonth}>
              <Text style={styles.arrow}>{'>'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.weekDays}>
            {days.map(day => (
              <Text key={day} style={styles.weekDayText}>
                {day}
              </Text>
            ))}
          </View>

          <FlatList
            data={dates}
            keyExtractor={(_, index) => index.toString()}
            numColumns={7}
            renderItem={({item}: {item: moment.Moment | null}) => {
              const isFuture = item ? item.isAfter(moment(), 'day') : false;
              const isSelected = item && selectedDate?.isSame(item, 'day');
              const isDisabled = !item || isFuture;

              return (
                <TouchableOpacity
                  onPress={() => item && !isFuture && setSelectedDate(item)}
                  style={[
                    styles.dateCell,
                    item &&
                      selectedDate?.isSame(item, 'day') &&
                      styles.selectedDate,
                  ]}
                  disabled={isDisabled}>
                  <Text
                    style={[
                      styles.dateText,
                      isDisabled && styles.disabledText,
                      isSelected && { color: 'white' },
                    ]}>
                    {item ? item.date() : ''}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText}>Batal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.confirmButton,
                !selectedDate && {backgroundColor: '#aaa'},
              ]}
              onPress={confirmDate}
              disabled={!selectedDate}>
              <Text style={styles.buttonText}>Pilih</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    padding: 16,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthText: {
    fontSize: 18,
    fontFamily: Fonts.medium.fontFamily,
    textTransform: 'capitalize',
  },
  arrow: {
    fontSize: 18,
    paddingHorizontal: 12,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weekDayText: {
    width: `${100 / 7}%`,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dateCell: {
    width: `${100 / 7}%`,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
    borderRadius: 8,
  },
  selectedDate: {
    backgroundColor: Colors.primary,
  },
  dateText: {
    fontSize: 16,
    fontFamily: Fonts.regular.fontFamily,
    color: Colors.black,
  },
  disabledText: {
    color: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  cancelButton: {
    padding: 10,
    marginRight: 10,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  confirmButton: {
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: Fonts.medium.fontFamily,
    color: Colors.white,
  },
});

export default CMPDatePicker;
