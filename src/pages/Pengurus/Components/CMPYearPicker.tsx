import React from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface YearPickerModalProps {
  visible: boolean;
  years: number[];
  selectedYear: number;
  onSelectYear: (year: number) => void;
  onClose: () => void;
}

const CMPYearPicker: React.FC<YearPickerModalProps> = ({
  visible,
  years,
  selectedYear,
  onSelectYear,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Pilih Tahun</Text>
          <FlatList
            data={years}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => {
              const isSelected = item === selectedYear;
              return (
                <TouchableOpacity
                  style={[styles.yearItem, isSelected && styles.selectedYearItem]}
                  onPress={() => {
                    onSelectYear(item);
                    onClose();
                  }}
                >
                  <Text style={[styles.yearText, isSelected && styles.selectedYearText]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Batal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 250,
    maxHeight: 300,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  yearItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  selectedYearItem: {
    backgroundColor: '#537D5D',
  },
  yearText: {
    fontSize: 16,
    color: '#333',
  },
  selectedYearText: {
    color: '#fff',
    fontWeight: '700',
  },
  closeButton: {
    marginTop: 15,
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#444',
  },
});

export default CMPYearPicker;
