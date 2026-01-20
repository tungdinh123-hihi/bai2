import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar, 
  Platform 
} from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Đăng nhập</Text>
      </View>
      
      <View style={styles.separator} />

      <View style={styles.body}>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại của bạn"
            placeholderTextColor="#bdbdbd"
            keyboardType="numeric" 
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            autoFocus={true} 
          />
        </View>

        
        <TouchableOpacity 
          style={[styles.button, phoneNumber.length > 0 ? styles.buttonActive : styles.buttonDisabled]}
          disabled={phoneNumber.length === 0}
        >
          <Text style={[styles.buttonText, phoneNumber.length > 0 ? styles.buttonTextActive : styles.buttonTextDisabled]}>
            Tiếp tục
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    width: '100%',
  },
  body: {
    padding: 16,
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: '500', 
    color: '#000',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666', 
    lineHeight: 20, 
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 40,
  },
  input: {
    fontSize: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0', 
    paddingVertical: 8,
    color: '#000',
  },
  button: {
    borderRadius: 4,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#f5f5f5',
  },
  buttonActive: {
    backgroundColor: '#007AFF', 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextDisabled: {
    color: '#bdbdbd',
  },
  buttonTextActive: {
    color: '#fff',
  },
});