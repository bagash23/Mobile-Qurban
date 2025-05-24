/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../../utils/colors';
import { ListHewan, ListStatus } from '../data';

type THewanQurban = {
  open: boolean;
  setOpen: (v: boolean) => void;
  value: string;
  onSelect: (value: string) => void;
};

type TStatusQurban = {
  open: boolean;
  setOpen: (v: boolean) => void;
  value: string;
  onSelect: (value: string) => void;
};

type TDeleteQurban = {
  open: boolean;
  setOpen: (v: boolean) => void;
  handleClick: () => void;
  value: string
};

const CMPModal = () => {
  const CMPModalTypeHewan = ({
    open,
    setOpen,
    value,
    onSelect,
  }: THewanQurban) => {
    return (
      <Modal isVisible={open}>
        <View style={stylesHewan.modalContainer}>
          <View style={stylesHewan.header}>
            <Text style={stylesHewan.title}>Pilih Hewan Qurban</Text>
            <AntDesign
              name="close"
              color={Colors.black}
              size={18}
              onPress={() => setOpen(false)}
            />
          </View>

          <FlatList
            data={ListHewan}
            keyExtractor={item => item.title}
            renderItem={({item}) => {
              const isSelected = value === item.title;
              return (
                <TouchableOpacity
                  onPress={() => onSelect(item.title)}
                  style={[
                    stylesHewan.optionBox,
                    isSelected && stylesHewan.selectedOption,
                  ]}>
                  <View style={stylesHewan.iconTitle}>
                    <AntDesign
                      name={item.icon}
                      size={22}
                      color={Colors.primary}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text style={stylesHewan.optionTitle}>{item.title}</Text>
                    </View>
                  </View>
                  <View
                    style={[
                      stylesHewan.radio,
                      isSelected && stylesHewan.radioSelected,
                    ]}
                  />
                </TouchableOpacity>
              );
            }}
          />

          <View style={stylesHewan.footer}>
            <TouchableOpacity
              style={stylesHewan.cancelBtn}
              onPress={() => setOpen(false)}>
              <Text style={stylesHewan.cancelText}>Batal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesHewan.confirmBtn}
              onPress={() => setOpen(false)}>
              <Text style={stylesHewan.confirmText}>Pilih dan Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  const CMPModalStatus = ({open, setOpen, value, onSelect}: TStatusQurban) => {
    return (
      <Modal isVisible={open}>
        <View style={stylesHewan.modalContainer}>
          <View style={stylesHewan.header}>
            <Text style={stylesHewan.title}>Pilih Hewan Qurban</Text>
            <AntDesign
              name="close"
              color={Colors.black}
              size={18}
              onPress={() => setOpen(false)}
            />
          </View>

          <FlatList
            data={ListStatus}
            keyExtractor={item => item.title}
            renderItem={({item}) => {
              const isSelected = value === item.title;
              return (
                <TouchableOpacity
                  onPress={() => onSelect(item.title)}
                  style={[
                    stylesHewan.optionBox,
                    isSelected && stylesHewan.selectedOption,
                  ]}>
                  <View style={stylesHewan.iconTitle}>
                    <AntDesign
                      name={item.icon}
                      size={22}
                      color={Colors.primary}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text style={stylesHewan.optionTitle}>{item.title}</Text>
                    </View>
                  </View>
                  <View
                    style={[
                      stylesHewan.radio,
                      isSelected && stylesHewan.radioSelected,
                    ]}
                  />
                </TouchableOpacity>
              );
            }}
          />

          <View style={stylesHewan.footer}>
            <TouchableOpacity
              style={stylesHewan.cancelBtn}
              onPress={() => setOpen(false)}>
              <Text style={stylesHewan.cancelText}>Batal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesHewan.confirmBtn}
              onPress={() => setOpen(false)}>
              <Text style={stylesHewan.confirmText}>Pilih dan Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  const CMPModalDelete = ({open, setOpen, handleClick, value}: TDeleteQurban) => (
    <Modal isVisible={open}>
      <View style={stylesDelete.modalContainer}>
        {/* Trash Icon */}
        <View style={stylesDelete.trashIconContainer}>
          <AntDesign name="delete" size={40} color="#4da6ff" />
        </View>

        {/* Confirmation Text */}
        <Text style={stylesDelete.title}>
          Apakah kamu yakin untuk menghapus data qurban ini
        </Text>
        <Text style={stylesDelete.filename}>
          {value}
        </Text>

        {/* Action Buttons */}
        <View style={stylesDelete.actions}>
          <TouchableOpacity
            onPress={() => setOpen(false)}
            style={[stylesDelete.button, stylesDelete.cancelButton]}>
            <Text style={stylesDelete.cancelText}>Batal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleClick}
            style={[stylesDelete.button, stylesDelete.deleteButton]}>
            <Text style={stylesDelete.deleteText}>Hapus</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return {
    CMPModalTypeHewan,
    CMPModalStatus,
    CMPModalDelete,
  };
};

export default CMPModal;

const stylesHewan = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  optionBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedOption: {
    borderColor: Colors.primary,
    backgroundColor: '#f0fcf4',
  },
  iconTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  optionSub: {
    fontSize: 12,
    color: '#666',
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  radioSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  cancelBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  confirmBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cancelText: {
    color: '#666',
  },
  confirmText: {
    color: '#fff',
    fontWeight: '500',
  },
});

const stylesDelete = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  trashIconContainer: {
    backgroundColor: '#e6f2ff',
    padding: 16,
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
  },
  filename: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  deleteButton: {
    backgroundColor: '#e53935',
  },
  cancelText: {
    color: '#333',
    fontWeight: '500',
  },
  deleteText: {
    color: '#fff',
    fontWeight: '500',
  },
});
